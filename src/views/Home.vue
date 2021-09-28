<template>
	<div class="home">
		<MobileProfileCard />
		<Title title1="A passionate developer" title2="Let me tell a story" />
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
		<Timelineitem end reverse />

		<Title title1="Next gen technologies" title2="My favourite techs" />
		<p class="paragraph">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis
			iure, similique quae cumque iusto, suscipit omnis expedita illo perspiciatis
			delectus molestiae voluptatibus recusandae soluta est unde aut? Accusamus,
			architecto. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
			Laboriosam officiis iure, similique quae cumque iusto, suscipit omnis
			expedita illo perspiciatis delectus molestiae voluptatibus recusandae soluta
			est unde aut? Accusamus, architecto.
		</p>

		<Tech />

		<!-- <ElementFilter /> -->
	</div>
</template>
ElementFilter ElementFilter
<script>
import Title from "components/Title.vue";
import Timelineitem from "components/Timelineitem.vue";
import Tech from "components/Tech.vue";
import ElementFilter from "components/ElementFilter.vue";
import MobileProfileCard from "components/MobileProfileCard.vue";

export default {
	name: "Home",
	components: {
		Title,
		Timelineitem,
		Tech,
		ElementFilter,
		MobileProfileCard,
	},
};
</script>
