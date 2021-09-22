<template>
	<div id="home">
		<Navbar />
		<Cover />
		<div class="container">
			<router-view />
		</div>
		<!-- <router-link to="/">Home</router-link>|<router-link to="/about"
			>About</router-link
		>
		<router-view /> -->
		<Contacts />
	</div>
</template>

<script>
import Navbar from "components/Navbar.vue";
import Cover from "components/Cover.vue";
import Contacts from "components/Contacts.vue";

export default {
	components: {
		Navbar,
		Cover,
		Contacts,
	},
};
</script>

<style lang="scss" scoped>
#home .container {
	margin: auto;
}
</style>
