<template>
	<div class="techitem">
		<figure class="techitem__illustration" :style="'background: ' + color">
			<img class="techitem__image" :src="image" alt="Technology illustration" />
		</figure>
		<h4 class="techitem__title">{{ title }}</h4>
		<h5 v-if="projects" class="techitem__projects">
			{{ projects }} {{ projects > 1 ? "projects" : "project" }}
		</h5>
		<p class="paragraph techitem__content">
			{{ content }}
		</p>
		<button v-if="projects && projects > 0" class="techitem__viewprojects">
			{{ title }} projects
		</button>
	</div>
</template>

<script>
export default {
	name: "Techitem",
	props: {
		title: {
			type: String,
			default: "",
		},
		image: {
			type: String,
			default: "",
		},
		projects: {
			type: Number,
			default: null,
		},
		content: {
			type: String,
			default: "",
		},
		color: {
			type: String,
			default: "",
		},
	},
};
</script>
