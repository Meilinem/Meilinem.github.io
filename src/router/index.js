import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginLayout from "@/components/login/LoginLayout";
import HomeLayout from "@/components/home/HomeLayout";
import AppLayout from "@/components/AppLayout";
import { isLoggedIn } from '@/utils/authentification'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'LoginLayout',
		component: LoginLayout,
		meta: {
			allowAnonymous: true
		}
	},
	{
		path: '/app',
		name: 'AppLayout',
		redirect: {name: 'HomeLayout'},
		component: AppLayout,
		children: [
			{
				path: "home",
				name: "HomeLayout",
				component: HomeLayout 
			}
		]
	},
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
	if (to.name == 'LoginLayout' && isLoggedIn()) {
		next({ path: '/app' })
	}
	else if (!to.meta.allowAnonymous && !isLoggedIn()) {
		next({
			path: '/',
			query: { redirect: to.fullPath }
		})
	}
	else {
		next()
	}  
  })

export default router
