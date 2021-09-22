<template>
	<div class="tech">
		<div class="tech__list">
			<Techitem />
			<Techitem />
			<Techitem />
			<Techitem />
		</div>
		<button class="tech__plus" title="View the full list">
			<Icon class="icon" icon="ellipsis-h" /> <span class="text">View more</span>
		</button>
	</div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import Techitem from "components/Techitem.vue";

library.add(faEllipsisH);

export default {
	name: "Tech",
	components: {
		Techitem,
		Icon: FontAwesomeIcon,
	},
};
</script>
