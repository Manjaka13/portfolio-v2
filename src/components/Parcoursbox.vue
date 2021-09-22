<template>
	<div class="parcoursbox">
		<figure class="parcoursbox__illustration">
			<img class="parcoursbox__image" :src="image" alt="Journey illustration" />
			<p class="parcoursbox__exp">{{ exp }}</p>
		</figure>
		<div class="parcoursbox__content">
			<h4 class="parcoursbox__title">{{ title }}</h4>
			<p class="paragraph parcoursbox__text">{{ content }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Parcoursbox",
	props: {
		image: {
			type: String,
			default: "",
		},
		exp: {
			type: String,
			default: "",
		},
		title: {
			type: String,
			default: "",
		},
		content: {
			type: String,
			default: "",
		},
	},
};
</script>
