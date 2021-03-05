<template>
	<v-row class="pl-2 mr-2">
		<v-col cols="3" v-for="(item, key) in current_feed" :key="key" class="pr-0">
			<v-card class="elevation-0 black white--text">
				<v-card-title>
					{{ item.country }} | {{ item.note }}/10
				</v-card-title>
				<v-card-text class="white--text pb-8">
					<v-row>
						<v-col cols="12" class="font-size--16 white--text pb-1">
							<v-icon class="white--text">
								mdi-arrow-collapse-vertical
							</v-icon>
							<span class="pr-2"> Implosion </span>
							{{ item.implosion }}
							<v-icon :color="get_colors(item.implosion)">
								{{ get_icons(item.implosion) }}
							</v-icon>
						</v-col>
						<v-col cols="12" class="font-size--16 white--text pb-1">
							<v-icon class="white--text">
								mdi-lightning-bolt
							</v-icon>
							<span class="pr-2"> Agression </span>
							{{ item.agression }}
							<v-icon :color="get_colors(item.agression)">
								{{ get_icons(item.agression) }}
							</v-icon>
						</v-col>
					</v-row>
				</v-card-text>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "DashboardFeed",
	props: {
		feed: {
			type: Array
		}
	},
	data() {
		return {
			current_feed: [],
			idx: 0,
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
		this.handle_feed();
		this.start_interval();
	},
	methods: {
		handle_feed() {
			let i = this.idx + 3 > this.feed.length ? this.feed.length - 1 : this.idx + 3;
			this.current_feed = [];
			while (this.idx <= i) {
				this.current_feed.push(this.feed[this.idx]);
				this.idx++;
			}
			if (this.idx >= this.feed.length) this.idx = 0;
		},
		start_interval() {
			setInterval(() => {
				this.handle_feed();
			}, 5000);
		},
		get_icons(n) {
			return (this.map_trends_icons[n[0]].icon);
		},
		get_colors(n) {
			return (this.map_trends_icons[n[0]].color);
		},
	}
}
</script>