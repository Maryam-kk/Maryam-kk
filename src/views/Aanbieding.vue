<script setup>
import MenuCard from '../components/MenuCard.vue';

const aanbiedingen = [
	{
		name: 'Lunchdeal van de chef',
		price: '14,50',
		description: 'Soep van de dag + mini hoofdgerecht + koffie of thee.',
		tags: ['Ma-Vr', '12:00-15:00'],
		image: '../assets/images/menu/foto3.jpg',
		alt: 'Lunchdeal van de chef',
	},
	{
		name: '2-gangen avondmenu',
		price: '24,50',
		description: 'Voorgerecht en hoofdgerecht naar keuze van de seizoenskaart.',
		tags: ['Diner', 'Populair'],
		image: '../assets/images/menu/foto4.jpg',
		alt: '2-gangen avondmenu',
	},
	{
		name: 'Dessert + koffie',
		price: '9,50',
		description: 'Kies een dessert en ontvang er een espresso of cappuccino bij.',
		tags: ['Na het diner', 'Zoet'],
		image: '../assets/images/menu/foto5.jpg',
		alt: 'Dessert met koffie',
	},
	{
		name: 'Familie zondagdeal',
		price: '32,50',
		description: 'Hoofdgerecht voor twee volwassenen met kindermenu voor 2 kinderen.',
		tags: ['Zondag', 'Gezin'],
		image: '../assets/images/menu/foto8.jpg',
		alt: 'Familie zondagdeal',
	},
];
</script>

<template>
	<section class="section" aria-labelledby="aanbieding-heading">
		<div class="section__header">
			<h1 id="aanbieding-heading">Aanbiedingen</h1>
			<p class="section__lead">
				Speciaal geselecteerde deals van Bistro Delicioso. Vraag in het restaurant naar de
				beschikbaarheid.
			</p>
		</div>

		<div class="menu-grid">
			<MenuCard v-for="aanbieding in aanbiedingen" :key="aanbieding.name" :dish="aanbieding" />
		</div>

		<div class="cta-row">
			<RouterLink class="btn btn--primary" to="/contact">Reserveer je tafel</RouterLink>
			<RouterLink class="btn btn--ghost" to="/menu">Bekijk volledig menu</RouterLink>
		</div>
	</section>
</template>
