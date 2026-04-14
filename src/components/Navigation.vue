<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';

defineProps({
	links: {
		type: Array,
		required: true,
	},
});

const isOpen = ref(false);
const isScrolled = ref(false);
const route = useRoute();

const toggleMenu = () => {
	isOpen.value = !isOpen.value;
};

const closeMenu = () => {
	isOpen.value = false;
};

const handleScroll = () => {
	isScrolled.value = window.scrollY > 16;
};

onMounted(() => {
	handleScroll();
	window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
	<header class="nav-shell" :class="{ 'nav-shell--scrolled': isScrolled }">
		<div class="nav-bar">
			<RouterLink class="brand" to="/" @click="closeMenu">
				<span aria-label="Bistro Delicioso">Bistro Delicioso</span>
			</RouterLink>

			<button
				class="nav-toggle"
				type="button"
				:aria-expanded="isOpen"
				aria-controls="primary-navigation"
				@click="toggleMenu"
			>
				<span class="sr-only">Toon navigatie</span>
				<span class="nav-toggle__icon" aria-hidden="true"></span>
			</button>

			<nav
				id="primary-navigation"
				class="nav-links"
				:class="{ 'nav-links--open': isOpen }"
				aria-label="Hoofdnavigatie"
			>
				<RouterLink
					v-for="link in links"
					:key="link.to"
					class="nav-link"
					:to="link.to"
					:aria-current="route.path === link.to ? 'page' : undefined"
					@click="closeMenu"
				>
					{{ link.label }}
				</RouterLink>
			</nav>
		</div>
	</header>
</template>
