<template>
	<div :class="opened ? 'menu menu--opened' : 'menu'" @click="close">
		<div class="menu__box">
			<ul class="menu__list">
				<li class="menu__list-item">
					<a class="link" href="#cover" title="About me">Hari</a>
				</li>
				<li class="menu__list-item">
					<a class="link" href="#journey" title="A tale of a talented developpeur"
						>Journey</a
					>
				</li>
				<li class="menu__list-item">
					<a class="link" href="#skills" title="My main skills">My Skills</a>
				</li>
				<li class="menu__list-item">
					<a class="link" href="#contacts" title="Contact me !">Get in touch</a>
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
