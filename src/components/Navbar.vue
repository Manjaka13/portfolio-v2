<template>
	<nav class="navbar">
		<div class="container">
			<div class="navbar__title">
				<img
					class="logo"
					src="../images/favicon.png"
					alt="Harijaona RAJAONSON's logo"
				/>
				<h1 class="name">H. RAJAONSON</h1>
			</div>
			<ul class="navbar__section">
				<li class="navbar__section-item">
					<a class="link" href="#cover" title="About me">Hari</a>
				</li>
				<li class="navbar__section-item">
					<a class="link" href="#journey" title="A tale of a talented developpeur"
						>Journey</a
					>
				</li>
				<li class="navbar__section-item">
					<a class="link" href="#skills" title="My main skills">My Skills</a>
				</li>
				<li class="navbar__section-item">
					<a class="link" href="#contacts" title="Contact me !">Get in touch</a>
				</li>
			</ul>
			<button class="navbar__trigger" @click="trigger">
				<Icon icon="bars" />
			</button>
		</div>
	</nav>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

export default {
	name: "Navbar",
	components: {
		Icon: FontAwesomeIcon,
	},
	methods: {
		trigger() {
			this.$emit("trigger");
		},
	},
};
</script>
