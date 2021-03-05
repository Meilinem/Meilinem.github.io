<template>
	<v-row class="pa-0" no-gutters>
		<v-col cols="7">
			<DashboardMap v-if="!alert_dialog"/>
			<DashboardFeed :feed="trends" v-if="!alert_dialog"/>
			<DashboardFeedDialog :alert="alert" :model="alert_dialog" v-on:closed="alert_dialog = false"/>
		</v-col>
		<v-col cols="5">
			<v-card tile style="height: 94vh">
				<v-row no-gutters>
					<v-col cols="12">
						<v-card-title class="font-size--18">
							<v-icon class="pr-3 black--text" size="35">
								mdi-chevron-right
							</v-icon>
							Alertes
						</v-card-title>
						<v-divider class="mx-10 black"/>
						<v-card-text>
							<v-card flat tile class="pa-0" v-for="(item, key) in alerts" :key="key" :color="item.bg">
								<v-card-title class="text-uppercase font-size--16 pb-0">
									<v-badge inline :color="item.color" class="pr-2"/>
									{{ item.title }}
								</v-card-title>
								<v-card-text>
									<v-row>
										<v-col cols="9">
											<div>
												<span class="semibold--text font-size--16"> {{ item.author }} </span>
												/
												<span class="semibold--text font-size--16"> {{ item.location }} </span>
											</div>
											<div>
												<span class="font-size--16"> {{ item.date }} </span>
												/
												<span class="font-size--16"> {{ item.time }} </span>
											</div>
										</v-col>
										<v-col cols="3" class="text-right">
											<v-btn color="indigo" class="elevation-0" tile @click="open_dialog_alert(item)">
												<span class="white--text">
													Voir plus
												</span>
											</v-btn>
										</v-col>
									</v-row>
								</v-card-text>
							</v-card>
						</v-card-text>
					</v-col>
					<v-col cols="12">
						<v-card-title class="font-size--18">
							<v-icon class="pr-3 black--text" size="35">
								mdi-chevron-right
							</v-icon>
							Tendances
						</v-card-title>
						<v-divider class="mx-10 black"/>
						<v-card-text>
							<v-row no-gutters>
								<v-col cols="12">
									<v-card flat tile v-for="(item, key) in trends" :key="key" :color="item.bg">
										<v-card-title class="py-0">
											{{ item.country }}
										</v-card-title>
										<v-card-text class="pt-0 pb-2">
											<v-row no-gutters>
												<v-col cols="5" class="font-size--16 black--text" style="border-right: solid 1px">
													<span class="grey lighten-4 pa-1">
														<v-icon class="black--text">
															mdi-arrow-collapse-vertical
														</v-icon>
														<span class="pr-2"> Implosion </span>
														{{ item.implosion }}
														<v-icon :color="get_colors(item.implosion)">
															{{ get_icons(item.implosion) }}
														</v-icon>
													</span>
												</v-col>
												<v-col cols="5" class="font-size--16 black--text" style="border-right: solid 1px">
													<v-icon class="black--text">
														mdi-lightning-bolt
													</v-icon>
													<span class="pr-2"> Agression </span>
													{{ item.agression }}
													<v-icon :color="get_colors(item.agression)">
														{{ get_icons(item.agression) }}
													</v-icon>
												</v-col>
												<v-col cols="2" class="font-size--16 pl-2 black--text">
													{{ item.note }}/10
												</v-col>
											</v-row>
										</v-card-text>
									</v-card>
								</v-col>
							</v-row>
						</v-card-text>
					</v-col>
				</v-row>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
import DashboardMap from "@/components/dashboard/DashboardMap.vue"
import DashboardFeed from "@/components/dashboard/DashboardFeed.vue"
import DashboardFeedDialog from "@/components/dashboard/DashboardFeedDialog"

export default {
	name: "Dashboard",
	components: {
		DashboardMap,
		DashboardFeed,
		DashboardFeedDialog
	},
	data() {
		return {
			alert: {},
			alert_dialog: false,
			alerts: [
				{
					"title": "Agression sur la place de Machin",
					"author": "Monier Gertrude",
					"type": "RSS",
					"location": "Corée du Nord",
					"date": "12 nov. 2020",
					"time": "12:30",
					"color": "red",
					"bg": ""
				},
				{
					"title": "Terrorisme",
					"author": "Monier Gertrude",
					"type": "Twitter",
					"location": "Corée du Nord",
					"date": "12 nov. 2020",
					"time": "12:30",
					"color": "orange darken-3",
					"bg": ""
				},
				{
					"title": "Kidnapping enfant",
					"author": "Monier Gertrude",
					"type": "RSS",
					"location": "Corée du Nord",
					"date": "12 nov. 2020",
					"time": "12:30",
					"color": "amber",
					"bg": ""
				}
			],
			trends: [
				{
					"country": "Mozambique",
					"implosion": "+1",
					"agression": "-0.25",
					"note": "7",
					"bg": ""
				},
				{
					"country": "Libye",
					"implosion": "+1",
					"agression": "-0.25",
					"note": "6.5",
					"bg": ""
				},
				{
					"country": "Kenya",
					"implosion": "+1",
					"agression": "-0.25",
					"note": "7.1",
					"bg": ""
				},
				{
					"country": "Irak",
					"implosion": "+1",
					"agression": "-0.25",
					"note": "8",
					"bg": ""
				},
				{
					"country": "Afghanistan",
					"implosion": "+1",
					"agression": "-0.25",
					"note": "8.2",
					"bg": ""
				}
			],
			map_trends_icons: {
				"+": {
					"icon": "mdi-arrow-top-right",
					"color": "red"
				},
				"-": {
					"icon": "mdi-arrow-bottom-right",
					"color": "green"
				},
				"": {
					"icon": "mdi-arrow-right",
					"color": "blue"
				}
			}
		}
	},
	created() {
		this.set_bg_color(this.alerts);
		// this.set_bg_color(this.trends);
	},
	methods: {
		get_icons(n) {
			return (this.map_trends_icons[n[0]].icon);
		},
		get_colors(n) {
			return (this.map_trends_icons[n[0]].color);
		},
		set_bg_color(dict) {
			for (let i in dict) {
				dict[i].bg = (i % 2 === 0 || i === 0) ? "lighten-4 grey" : "white";
			}
		},
		open_dialog_alert(item) {
			this.alert = item;
			this.alert_dialog = true;
		}
	}
}
</script>