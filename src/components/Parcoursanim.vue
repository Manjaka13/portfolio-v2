<template>
	<div :class="'parcoursanim' + (reverse ? ' parcoursanim--reverse' : '')">
		<iframe class="anim" :src="lottie"></iframe>
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
		lottie: {
			type: String,
			default: "",
		},
	},
};
</script>
