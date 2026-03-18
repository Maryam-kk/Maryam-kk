<template>
	<footer class="site-footer" aria-label="Voettekst">
		<div class="footer__grid">
			<div>
				<h2 class="footer__title">Bistro Delicioso</h2>
				<p class="footer__copy">Vers, lokaal en gastvrij sinds 2012.</p>
			</div>

			<div>
				<h3 class="footer__subtitle">Contact</h3>
				<address class="footer__address">
					Marktstraat 12<br />
					5611 AA Eindhoven<br />
					<a href="tel:+31401234567">+31 (0)40 123 45 67</a><br />
					<a href="mailto:info@bistrodelicioso.nl">info@bistrodelicioso.nl</a>
				</address>
			</div>

			<div>
				<h3 class="footer__subtitle">Openingstijden</h3>
				<p class="footer__copy">
					Ma–Do: 12:00 – 22:00<br />
					Vr–Za: 12:00 – 23:00<br />
					Zo: 15:00 – 21:00
				</p>
			</div>

			<div>
				<h3 class="footer__subtitle">Volg ons</h3>
				<ul class="footer__links" aria-label="Social media links">
					<li><a href="#" aria-label="Instagram">Instagram</a></li>
					<li><a href="#" aria-label="Facebook">Facebook</a></li>
					<li><a href="#" aria-label="Nieuwsbrief">Nieuwsbrief</a></li>
				</ul>
			</div>
		</div>

		<div class="footer__legal">
			<small>© {{ new Date().getFullYear() }} Bistro Delicioso. Alle rechten voorbehouden.</small>
		</div>
	</footer>
</template>
