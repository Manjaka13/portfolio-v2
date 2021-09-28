<template>
	<div :class="opened ? 'menu menu--opened' : 'menu'" @click="close">
		<div class="menu__box">
			<ul class="menu__list">
				<li class="menu__list-item">
					<a class="link" href="#0" title="About me">About me</a>
				</li>
				<li class="menu__list-item">
					<a class="link" href="#0" title="My Skills">My Skills</a>
				</li>
				<li class="menu__list-item">
					<a class="link" href="#0" title="Projects">Projects</a>
				</li>
				<li class="menu__list-item">
					<a class="link" href="#0" title="Contacts">Contacts</a>
				</li>
			</ul>
			<iframe
				class="menu__fish"
				src="https://embed.lottiefiles.com/animation/50416"
			></iframe>
		</div>
		<div class="menu__balancing">
			<div class="menu__cat">
				<iframe src="https://embed.lottiefiles.com/animation/68349"></iframe>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Menu",
	props: {
		opened: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		close() {
			this.$emit("close");
		},
	},
};
</script>
