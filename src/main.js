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
});
