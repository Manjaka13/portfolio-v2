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
					<a class="link" href="#0" title="About me">About me</a>
				</li>
				<li class="navbar__section-item">
					<a class="link" href="#0" title="My Skills">My Skills</a>
				</li>
				<li class="navbar__section-item">
					<a class="link" href="#0" title="Projects">Projects</a>
				</li>
				<li class="navbar__section-item">
					<a class="link" href="#0" title="Contacts">Contacts</a>
				</li>
			</ul>
			<button class="navbar__trigger"><Icon icon="bars" /></button>
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
};
</script>
