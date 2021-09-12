<template>
	<div id="home">
		<Navbar />
		<Cover />
		<!-- <router-link to="/">Home</router-link>|<router-link to="/about"
			>About</router-link
		>
		<router-view /> -->
	</div>
</template>

<script>
import Navbar from "components/Navbar.vue";
import Cover from "components/Cover.vue";

export default {
	components: {
		Navbar,
		Cover,
	},
};
</script>
