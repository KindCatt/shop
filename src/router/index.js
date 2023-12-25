import { createRouter, createWebHistory } from 'vue-router'

import vCatalog from '@/components/catalog/vCatalog.vue'
import vCart from '@/components/cart/vCart.vue'

const routes = [
	{
		path: '/',
		name: 'catalog',
		component: vCatalog
	},
	{
		path: '/cart',
		name: 'cart',
		component: vCart,
		props: true
	},
	// {
	// 	path: '/about',
	// 	name: 'about',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	// }
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
