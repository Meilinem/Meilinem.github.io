<template>
	<v-card v-if="in_model">
		<v-card-title class="justify-end">
			<v-btn icon @click="in_model = false"><v-icon>mdi-close</v-icon></v-btn>
		</v-card-title>
		<v-card-text>
			<v-card tile class="elevation-0 grey lighten-4">
				<v-card-title>
					<v-row>
						<v-col cols="1" class="pr-0">
							<v-badge inline :color="alert.color" class="pr-2"/>
						</v-col>
						<v-col cols="9" class="pl-0">
							{{ alert.title }}
						</v-col>
						<v-col cols="2" class="text-right">
							{{ alert.type }}
						</v-col>
					</v-row>
				</v-card-title>
				<v-card-text>
					<v-row>
						<v-col cols="12">
							<div>
								<span class="semibold--text font-size--16"> {{ alert.author }} </span>
								/
								<span class="semibold--text font-size--16"> {{ alert.location }} </span>
							</div>
							<div>
								<span class="font-size--16"> {{ alert.date }} </span>
								/
								<span class="font-size--16"> {{ alert.time }} </span>
							</div>
						</v-col>
					</v-row>
				</v-card-text>
			</v-card>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: "DashboardFeedDialog",
	props: {
		alert: {
			type: Object
		},
		model: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			in_model: false,
		}
	},
	watch: {
		model(val) {
			console.log("HEY HEY HEY");
			this.in_model = val;
		},
		in_model(val) {
			if (!val) this.$emit("closed");
		}
	}
}
</script>