<template>
	<div :class="'timelineitem' + (reverse ? ' timelineitem--reverse' : '')">
		<Parcoursbox
			:image="item.image"
			:exp="item.exp"
			:title="item.title"
			:content="item.content"
		/>
		<Parcoursline
			:start="start"
			:end="end"
			:reverse="reverse"
			:icon="item.icon"
			:date="item.date"
		/>
		<Parcoursanim :reverse="reverse" :lottie="item.lottie" />
	</div>
</template>

<script>
import Parcoursbox from "components/Parcoursbox.vue";
import Parcoursline from "components/Parcoursline.vue";
import Parcoursanim from "components/Parcoursanim.vue";

export default {
	name: "Timelineitem",
	components: {
		Parcoursbox,
		Parcoursline,
		Parcoursanim,
	},
	props: {
		start: {
			type: Boolean,
			default: false,
		},
		end: {
			type: Boolean,
			default: false,
		},
		reverse: {
			type: Boolean,
			default: false,
		},
		item: {
			type: Object,
			default: null,
		},
	},
};
</script>
