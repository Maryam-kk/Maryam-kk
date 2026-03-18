<script setup>
import MenuCard from '../components/MenuCard.vue';

const featuredDishes = [
	{
		name: 'Gegrilde zalmfilet',
		price: '19,50',
		description: 'Met citroenboter, venkel en geroosterde krieltjes.',
		tags: ['Vis', 'Glutenvrij', 'Seizoensgerecht'],
		image: '../assets/images/menu/foto1.jpg',
		alt: 'Gegrilde zalm met venkel en krieltjes',
	},
	{
		name: 'Risotto funghi',
		price: '16,00',
		description: 'Romige risotto met paddenstoelen, Parmezaan en truffelolie.',
		tags: ['Vegetarisch', 'Comfort food'],
		alt: 'Risotto met paddenstoelen en Parmezaan',
	},
	{
		name: 'Citrus cheesecake',
		price: '7,50',
		description: 'Frisse cheesecake met citroencrème en krokante bodem.',
		tags: ['Dessert', 'Licht'],
		alt: 'Cheesecake met citroen en crumble',
	},
];

const highlights = [
	{
		title: 'Lokale ingrediënten',
		text: 'We koken met leveranciers uit de regio voor de beste smaak en een kleinere footprint.',
	},
	{
		title: 'Seizoensmenu',
		text: 'Elke maand nieuwe specials die inspelen op het seizoen.',
	},
	{
		title: 'Gastvrije sfeer',
		text: 'Kleine zaal, veel aandacht. Perfect voor een diner of borrel.',
	},
];
</script>

<template>
	<section class="section" aria-labelledby="home-heading">
		<div class="section__header">
			<h1 id="home-heading">Welkom bij Bistro Delicioso</h1>
			<p class="section__lead">
				Een gezellige bistro in het hart van de stad, bekend om verse gerechten, een warme sfeer en
				vriendelijke service.
			</p>
		</div>

		<div class="features">
			<article
				v-for="item in highlights"
				:key="item.title"
				class="feature-card"
				aria-label="Waarom Bistro Delicioso"
			>
				<h2>{{ item.title }}</h2>
				<p>{{ item.text }}</p>
			</article>
		</div>
	</section>

	<section class="section" aria-labelledby="featured-heading">
		<div class="section__header">
			<h2 id="featured-heading">Populaire gerechten</h2>
			<p class="section__lead">
				Proef onze gastenfavorieten, samengesteld door chef Sofia en haar team.
			</p>
		</div>

		<div class="menu-grid">
			<MenuCard v-for="dish in featuredDishes" :key="dish.name" :dish="dish" />
		</div>

		<div class="cta-row">
			<RouterLink class="btn btn--primary" to="/menu">Bekijk het volledige menu</RouterLink>
			<RouterLink class="btn btn--ghost" to="/contact">Reserveer een tafel</RouterLink>
		</div>
	</section>
</template>
