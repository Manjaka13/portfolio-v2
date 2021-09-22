<template>
	<div :class="'parcoursanim' + (reverse ? ' parcoursanim--reverse' : '')">
		<iframe
			class="anim"
			src="https://embed.lottiefiles.com/animation/37296"
		></iframe>
	</div>
</template>

<script>
export default {
	name: "Parcoursanim",
	props: {
		reverse: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
