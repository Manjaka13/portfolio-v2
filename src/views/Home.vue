<template>
	<div class="home">
		<Title
			title1="A tale of a passionate developer"
			title2="Let me tell you a story."
		/>
		<p class="paragraph">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis
			iure, similique quae cumque iusto, suscipit omnis expedita illo perspiciatis
			delectus molestiae voluptatibus recusandae soluta est unde aut? Accusamus,
			architecto. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
			Laboriosam officiis iure, similique quae cumque iusto, suscipit omnis
			expedita illo perspiciatis delectus molestiae voluptatibus recusandae soluta
			est unde aut? Accusamus, architecto.
		</p>

		<Timelineitem start />
		<Timelineitem reverse />
	</div>
</template>

<script>
import Title from "components/Title.vue";
import Timelineitem from "components/Timelineitem.vue";

export default {
	name: "Home",
	components: {
		Title,
		Timelineitem,
	},
};
</script>
