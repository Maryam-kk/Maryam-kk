<script setup>
const contactInfo = {
	phone: '+31 (0)40 123 45 67',
	email: 'info@bistrodelicioso.nl',
	address: 'Marktstraat 12, 5611 AA Eindhoven',
	opening: 'Ma–Do 12:00 – 22:00, Vr–Za 12:00 – 23:00, Zo 15:00 – 21:00',
};
</script>

<template>
	<section class="section" aria-labelledby="contact-heading">
		<div class="section__header">
			<h1 id="contact-heading">Contact</h1>
			<p class="section__lead">
				Heb je vragen of wil je reserveren? Bel ons, mail ons of loop gerust binnen.
			</p>
		</div>

		<div class="contact-grid">
			<div class="contact-card">
				<h2>Contactgegevens</h2>
				<p><strong>Telefoon:</strong> {{ contactInfo.phone }}</p>
				<p><strong>E-mail:</strong> {{ contactInfo.email }}</p>
				<p><strong>Adres:</strong> {{ contactInfo.address }}</p>
				<p><strong>Openingstijden:</strong> {{ contactInfo.opening }}</p>

				<div class="contact-actions">
					<a class="btn btn--primary" :href="`tel:${contactInfo.phone.replace(/\s|\(|\)/g, '')}`">Bel direct</a>
					<a class="btn btn--ghost" :href="`mailto:${contactInfo.email}`">Stuur e-mail</a>
				</div>
			</div>

			<form class="contact-form" aria-label="Contactformulier">
				<h2>Stuur een bericht</h2>
				<label for="name">Naam</label>
				<input id="name" name="name" type="text" autocomplete="name" placeholder="Je naam" />

				<label for="email">E-mail</label>
				<input
					id="email"
					name="email"
					type="email"
					autocomplete="email"
					placeholder="je@email.nl"
				/>

				<label for="message">Bericht</label>
				<textarea
					id="message"
					name="message"
					rows="4"
					placeholder="Waar kunnen we je mee helpen?"
				></textarea>

				<button type="submit" class="btn btn--primary">Verstuur</button>
				<p class="form-note">Dit formulier is een demo; geen berichten worden opgeslagen.</p>
			</form>
		</div>
	</section>
</template>
