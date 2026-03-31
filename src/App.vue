<script setup>
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
import HeaderBar from './components/Header.vue';
import FooterBar from './components/Footer.vue';

const navLinks = [
	{ label: 'Home', to: '/' },
	{ label: 'Menu', to: '/menu' },
	{ label: 'Aanbieding', to: '/aanbieding' },
	{ label: 'Contact', to: '/contact' },
];
</script>

<template>
	<div class="app-shell">
		<Navigation :links="navLinks" />
		<HeaderBar />

		<main class="page-content" role="main">
			<RouterView />
		</main>

		<FooterBar />
	</div>
</template>
