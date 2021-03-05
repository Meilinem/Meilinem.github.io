<template>
	<v-row no-gutters class="bg" style="height: 100%">
		<v-col cols="12" class="align-self-center">
			<v-row class="justify-center">
				<v-col cols="5">
					<v-card class="elevation-0">
						<v-card-title class="justify-center font-size--120 letter-spacing--6 font-franklin stm_blue--text medium--text text-uppercase py-10" style="height: 100px">
							Istya
						</v-card-title>
						<v-card-text class="px-10 py-8">
							<v-text-field rounded filled label="Identifiant *" input type="text" v-model="email"/>
							<v-text-field
							:append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
							:type="show_password ? 'text' : 'password'"
							@click:append="show_password = !show_password"
							rounded filled
							label="Mot de passe *"
							v-model="password"/>
							<div class="soft_red--text medium--text text-center font-size--16">{{ msg }}</div>
						</v-card-text>
						<v-card-actions class="justify-center pb-8">
							<v-row class="text-center">
								<v-col cols="12">
									<v-btn large class="elevation-0 stm_blue" style="width: 172px" @click="login()">
										<span class="white--text large px-5 font-size--16">
											Connexion
										</span>
									</v-btn>
								</v-col>
								<v-col cols="12" class="pt-0">
									<v-btn text class="elevation-0" style="width: 172px">
										<span class="grey--text medium--text font-size--13">
											Télécharger l'app
										</span>
									</v-btn>
								</v-col>
							</v-row>
						</v-card-actions>
						<v-snackbar v-model="snackbar" :timeout="timeout">
							{{ text }}
							<template v-slot:action="{ attrs }">
							<v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
								Close
							</v-btn>
							</template>
						</v-snackbar>
					</v-card>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
import { loginUser } from '../../utils/authentification'

export default {
	name: "LoginLayout",
	data() {
		return {
			email: "",
			password: "",
			msg: "",
			show_password: false,
			snackbar: false,
			text: 'Email ou mot de passe invalide',
			timeout: 2500,
		}
	},
	snackbar: () => ({
      
    }),
	methods: {
		async login() {
			if(this.email != "" && this.password != "") {
				await loginUser()
				//await loginUser(this.username, this.password)
				this.$router.push('/app')
            } else {
				this.snackbar = true
                console.log("A username and password must be present");
            }
		}
	}
}
</script>