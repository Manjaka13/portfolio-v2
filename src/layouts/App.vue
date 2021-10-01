<template>
	<div id="home">
		<Navbar @trigger="trigger" />
		<Menu :opened="menuOpened" @close="trigger" />
		<div id="cover"></div>
		<Cover />
		<div class="container">
			<router-view />
		</div>
		<!-- <router-link to="/">Home</router-link>|<router-link to="/about"
			>About</router-link
		>
		<router-view /> -->
		<div id="contacts"></div>
		<Contacts />
	</div>
</template>

<script>
import Navbar from "components/Navbar.vue";
import Cover from "components/Cover.vue";
import Contacts from "components/Contacts.vue";
import Menu from "components/Menu.vue";

export default {
	components: {
		Navbar,
		Cover,
		Contacts,
		Menu,
	},
	data() {
		return {
			menuOpened: false,
		};
	},
	methods: {
		trigger() {
			this.menuOpened = !this.menuOpened;
		},
	},
};
</script>

<style lang="scss" scoped>
#home .container {
	margin: auto;
}
</style>
