import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import MenuView from '../views/Menu.vue';
import ContactView from '../views/Contact.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		meta: {
			title: 'Bistro Delicioso | Sfeervol dineren in de stad',
			description:
				'Geniet van verse, lokale gerechten bij Bistro Delicioso. Bekijk onze sfeerimpressie, specials en reserveringsinformatie.',
		},
	},
	{
		path: '/menu',
		name: 'menu',
		component: MenuView,
		meta: {
			title: 'Menu | Bistro Delicioso',
			description:
				'Ontdek ons seizoensmenu met voorgerechten, hoofdgerechten, desserts en vegetarische opties. Vers bereid en vol smaak.',
		},
	},
	{
		path: '/contact',
		name: 'contact',
		component: ContactView,
		meta: {
			title: 'Contact | Bistro Delicioso',
			description:
				'Neem contact op met Bistro Delicioso: adres, telefoon, e-mail en route. We horen graag van je voor vragen of reserveringen.',
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return { top: 0, left: 0, behavior: 'smooth' };
	},
});

const DEFAULT_TITLE = 'Bistro Delicioso';
const DEFAULT_DESCRIPTION =
	'Restaurantwebsite met menu, contact en sfeerimpressie. Bistro Delicioso serveert verse, lokale gerechten in een warme ambiance.';

router.afterEach((to) => {
	document.title = to.meta?.title || DEFAULT_TITLE;

	const description = to.meta?.description || DEFAULT_DESCRIPTION;
	let descriptionTag = document.querySelector('meta[name="description"]');

	if (!descriptionTag) {
		descriptionTag = document.createElement('meta');
		descriptionTag.setAttribute('name', 'description');
		document.head.appendChild(descriptionTag);
	}

	descriptionTag.setAttribute('content', description);
});

export default router;
