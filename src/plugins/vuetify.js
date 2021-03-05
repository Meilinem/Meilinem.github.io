import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);

export default new Vuetify({
	// iconfont: 'md',
	iconfont: 'mdi',
	theme: {
		themes: {
			light: {
				primary: '#4855B8',
				secondary: '#1F1F1F',
				tertiary: '#b9b9b9',
				fade_white: "#F2F2F2",
				anchor: '#8c9eff',
				punchy: '#466B32',
				soft_green: '#56AC8A',
				soft_cyan: '#4db6ac',
				soft_red: '#B72A2A',
				soft_yellow: '#ffd54f',
				soft_blue: '#445475',
				pastel_green: '#81C784',
				bg: '#ececec',
				bg_light: "#F7F7F7",
				medium_grey: "#dadada",
				stm_blue: '#5C9093',
				stm_green: "#92955B",
				stm_red: "#AD0000",
				bg_grey: "E0E0E0",
				stm_title: "FF7359"
			},
		},
	},
});