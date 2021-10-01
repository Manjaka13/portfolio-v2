<template>
	<div :class="'parcoursline' + (reverse ? ' parcoursline--reverse' : '')">
		<div v-if="start" class="start"></div>
		<div class="icon">
			<Icon :icon="icon" />
		</div>
		<div class="date">{{ date }}</div>
		<div v-if="end" class="end"></div>
	</div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default {
	name: "Parcoursline",
	components: {
		Icon: FontAwesomeIcon,
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
		icon: {
			type: String,
			default: "graduation-cap",
		},
		date: {
			type: String,
			default: "????",
		},
	},
};
</script>
