<script setup>
import { onMounted, ref } from 'vue';
import MenuCard from '../components/MenuCard.vue';
import foto1 from '../assets/images/menu/foto1.jpg';
import foto2 from '../assets/images/menu/foto2.jpg';
import foto3 from '../assets/images/menu/foto3.jpg';
import foto4 from '../assets/images/menu/foto4.jpg';
import foto5 from '../assets/images/menu/foto5.jpg';
import foto6 from '../assets/images/menu/foto6.jpg';
import foto7 from '../assets/images/menu/foto7.jpg';
import foto8 from '../assets/images/menu/foto8.jpg';

const menuSections = ref([]);
const isLoading = ref(true);
const errorMessage = ref('');

const imageMap = { foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8 };

onMounted(async () => {
	try {
		const response = await fetch('/api/menu.json');
		if (!response.ok) {
			throw new Error('Menu request failed');
		}

		const data = await response.json();
		menuSections.value = data.map((section) => ({
			...section,
			dishes: section.dishes.map((dish) => ({
				...dish,
				image: dish.image ? imageMap[dish.image] : undefined,
			})),
		}));
	} catch (error) {
		errorMessage.value = 'Kon het menu niet laden. Probeer later opnieuw.';
	} finally {
		isLoading.value = false;
	}
});
</script>

<template>
	<section class="section" aria-labelledby="menu-heading">
		<div class="section__header">
			<h1 id="menu-heading">Menu</h1>
			<p class="section__lead">
				Ontdek onze seizoenskaart. We wisselen maandelijks, zodat er altijd iets nieuws te proeven
				valt.
			</p>
		</div>

		<p v-if="isLoading" class="section__lead">Menu laden...</p>
		<p v-else-if="errorMessage" class="section__lead">{{ errorMessage }}</p>

		<div v-else class="menu-sections">
			<section v-for="section in menuSections" :key="section.title" class="menu-section">
				<div class="menu-section__header">
					<h2>{{ section.title }}</h2>
					<p class="menu-section__hint">Altijd huisgemaakt en vers bereid.</p>
				</div>

				<div class="menu-grid">
					<MenuCard v-for="dish in section.dishes" :key="dish.name" :dish="dish" />
				</div>
			</section>
		</div>
	</section>
</template>
