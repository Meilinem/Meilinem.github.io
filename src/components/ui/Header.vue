<template>
	<v-card tile style="z-index: 10000">
		<v-row no-gutters>
			<v-col cols="1" class="align-self-center pl-3 d-flex">
				<img class="logo" src="@/assets/logo_bleu.png"/>
			</v-col>
			<v-col cols="4" class="align-self-center d-flex">
				<v-tabs>
					<v-tab grow v-for="(item, key) in header_tab" :key="key" @click="set_location(item)">
						{{ item.name }}
						<v-icon v-if="item.icon" class="ml-3" color="indigo lighten-3">
							{{ item.icon }}
						</v-icon>
					</v-tab>
					<v-divider vertical class="mt-2"/>
					<v-tab>
						Mozambique
					</v-tab>
				</v-tabs>
			</v-col>
			<v-col cols="1" class="align-self-center d-flex">
				<v-btn fab dark x-small class="elevation-0" color="indigo">
					<v-icon>
						mdi-plus
					</v-icon>
				</v-btn>
			</v-col>
			<v-spacer/>
			<v-col cols="2" class="align-self-center d-flex">
				<v-menu offset-y>
					<template v-slot:activator="{ on }">
						<v-list-item v-on="on">
							<v-list-item-content>
								<v-list-item-title class="semibold--text">
									Anna MARTIN
								</v-list-item-title>
							</v-list-item-content>
							<v-list-item-avatar>
								<v-avatar
								color="indigo"
								size="50">
									<span class="white--text">
										AM
									</span>
								</v-avatar>
							</v-list-item-avatar>
						</v-list-item>
					</template>
					<v-card>
						<v-list-item>
							<v-list-item-avatar>
								<v-icon color="indigo">
									mdi-cog
								</v-icon>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title class="normal--text">
									Paramètres
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-list-item @click="deconnect()">
							<v-list-item-avatar>
								<v-icon color="indigo">
									mdi-power
								</v-icon>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title class="normal--text">
									Deconnexion
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-card>
				</v-menu>
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			header_tab: [
				{
					"name": "Tableau de bord",
					"icon": "mdi-monitor",
					"location": "dashboard",
				},
				{
					"name": "Alertes",
					"icon": "",
					"location": "alert"
				}
			]
		}
	},
	methods : {
		set_location(item) {
			for (let i in this.$store.state.location) {
				this.$store.state.location[i] = false;
			}
			this.$store.state.location[item.location] = true;
		},
		deconnect() {
			console.log("DECONNEXION");
		}
	}
}
</script>

<style scoped>
	.logo {
		max-width: 40%;
		max-height: 40%;
	}
</style>