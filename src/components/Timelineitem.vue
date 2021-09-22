<template>
	<div :class="'timelineitem' + (reverse ? ' timelineitem--reverse' : '')">
		<Parcoursbox
			:image="image"
			exp="Série D"
			title="Baccalauréat"
			content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque cupiditate cumque rem, impedit maiores ipsam corrupti neque provident veritatis. Nostrum, enim excepturi. Deleniti magnam quos exercitationem vel quas beatae cupiditate."
		/>
		<Parcoursline :start="start" :reverse="reverse" />
		<Parcoursanim :reverse="reverse" />
	</div>
</template>

<script>
import image from "../images/0.png";
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
		reverse: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			image,
		};
	},
};
</script>
