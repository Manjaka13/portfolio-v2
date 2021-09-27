import Vue from "vue";
import VueRouter from "vue-router";
import "styles/index.scss";
import App from "layouts/App.vue";
import routes from "./routes.js";

Vue.use(VueRouter);

// Configure router
const router = new VueRouter({
	routes,
	linkActiveClass: "active",
	mode: "history",
});

new Vue({
	el: "#app",
	render: (h) => h(App),
	router,
	mounted() {
		this.setTime();
	},
	methods: {
		setTime() {
			const date = new Date().toLocaleString("fr-FR", { hour12: false });
			const time = parseInt(date.split(" ")[1].split(":")[0]);
			const limits = [5, 8, 16, 19];
			let tm = null;
			for (let i = 0, j = 0; i < limits.length - 1; i++, j++)
				if (time >= limits[i] && time < limits[i + 1]) {
					tm = j;
					break;
				}
			if (!tm) tm = 3;
			document.body.classList.add("body-time-" + tm);
		},
	},
});
