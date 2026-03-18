<script setup>
import { computed } from 'vue';

const props = defineProps({
	dish: {
		type: Object,
		required: true,
	},
});

const imageSrc = computed(() => {
	if (!props.dish.image) {
		return '';
	}
	return new URL(props.dish.image, import.meta.url).href;
});

const tagLabel = (tag) => `Label: ${tag}`;
</script>

<template>
	<article class="menu-card">
		<div v-if="imageSrc" class="menu-card__media">
			<img
				:src="imageSrc"
				:alt="dish.alt || `Gerecht ${dish.name}`"
				loading="lazy"
			/>
		</div>

		<div class="menu-card__body">
			<div class="menu-card__header">
				<h3 class="menu-card__title">{{ dish.name }}</h3>
				<p class="menu-card__price" aria-label="Prijs">€ {{ dish.price }}</p>
			</div>

			<p class="menu-card__description">{{ dish.description }}</p>

			<ul class="menu-card__tags" aria-label="Kenmerken">
				<li v-for="tag in dish.tags" :key="tag">{{ tagLabel(tag) }}</li>
			</ul>
		</div>
	</article>
</template>
