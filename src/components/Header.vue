<script setup>
import { computed } from 'vue';

const heroImage = computed(
	() => new URL('../assets/images/menu/gerecht1.jpg', import.meta.url).href,
);
</script>

<template>
	<section class="hero" aria-labelledby="hero-heading">
		<div class="hero__grid">
			<div class="hero__content">
				<p class="eyebrow">Sinds 2012</p>
				<h2 id="hero-heading">Smaakvol, lokaal en gastvrij</h2>
				<p class="hero__lead">
					Bistro Delicioso serveert seizoensgebonden gerechten met lokale ingrediënten. Perfect
					voor een avond uit, een snelle lunch of een borrel met vrienden.
				</p>

				<div class="hero__actions">
					<RouterLink class="btn btn--primary" to="/menu">Bekijk het menu</RouterLink>
					<RouterLink class="btn btn--ghost" to="/contact">Plan je bezoek</RouterLink>
				</div>
			</div>

			<div class="hero__visual" role="presentation">
				<img :src="heroImage" alt="Sfeervol gedekte tafel met gerechten" loading="lazy" />
				<div class="hero__badge" aria-hidden="true">
					<span>Chef's special</span>
					<strong>Verse seizoensgroenten</strong>
				</div>
			</div>
		</div>
	</section>
</template>
