<template>
	<div class="title-box">
		<h2 class="title1">{{ title1 }}</h2>
		<h3 class="title2">{{ title2 }}</h3>
		<div class="separator"></div>
	</div>
</template>

<script>
export default {
	name: "Title",
	props: {
		title1: {
			type: String,
			default: "Some title",
		},
		title2: {
			type: String,
			default: "A big title here",
		},
	},
};
</script>
