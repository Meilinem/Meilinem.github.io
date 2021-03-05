<template>
	<v-main>
		<Header/>
		<component :is="get_component()"/>
	</v-main>
</template>

<script>
	import Header from "@/components/ui/Header.vue"
	import Dashboard from "@/components/dashboard/Dashboard.vue"
	import Alert from "@/components/alert/Alert.vue"

	export default {
		name: 'AppLayout',
		components: {
			Header,
			Dashboard,
			Alert
		},
		data() {
			return {
				map_component: {
					"dashboard": Dashboard,
					"alert": Alert
				}
			}
		},
		methods: {
			get_component() {
				for (let i in this.$store.state.location) {
					if (this.$store.state.location[i]) return this.map_component[i];
				}
			}
		}
	}
</script>
