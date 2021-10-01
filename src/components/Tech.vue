<template>
	<div class="tech">
		<div class="tech__list">
			<Techitem
				v-for="(item, key) in shown > 4
					? technologies
					: technologies.filter((t, key) => key < 4)"
				:key="key"
				:title="item.title"
				:content="item.content"
				:image="item.image"
				:color="item.color"
				:projects="item.projects"
			/>
		</div>
		<button
			v-if="shown <= 4"
			class="tech__plus"
			title="View the full list"
			@click="showMore"
		>
			<Icon class="icon" icon="ellipsis-h" /> <span class="text">View more</span>
		</button>
	</div>
</template>

<script>
import html5 from "../images/html5.png";
import css3 from "../images/css3.png";
import sass from "../images/sass.png";
import nextjs from "../images/nextjs.png";
import react from "../images/react.jpg";
import javascript from "../images/javascript.png";
import vuejs from "../images/vuejs.png";
import typescript from "../images/typescript.png";

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
	data() {
		return {
			shown: 4,
			technologies: [
				{
					title: "React",
					content:
						"Call me papa React, I love this library at least as much as playing games. I spent one whole year learning it and it still has many secrets that has yet to be discovered.",
					image: react,
					color: "rgb(32, 32, 32)",
					projects: 9,
				},
				{
					title: "NextJS",
					content:
						"An SSR technology extension to react, this framework is used in many many maaaaany websites and web apps out there, so I just learnt it okey ? No more questions please ;)",
					image: nextjs,
					color: "black",
					projects: 4,
				},
				{
					title: "Javascript",
					content:
						"Vanilla Javascript is a bunch of code jam that is still needed when comes with modern frameworks, although there are better solutions, I sometimes still love play with pure Javascript code.",
					image: javascript,
					color: "rgb(238, 202, 0)",
					projects: 15,
				},
				{
					title: "Typescript",
					content:
						"As a superset of Javascript, it's adding types to a consistent scalable code and avoid suprises ! I like to use it when a big project is coming in.",
					image: typescript,
					color: "rgb(25, 46, 108)",
					projects: 1,
				},
				{
					title: "VueJS",
					content:
						"What a powerfull tool we have here, one of the most easiest and scalable front end frameworks I learnt. Everything you see here now is displayed with VueJS.",
					image: vuejs,
					color: "rgb(126, 255, 100)",
					projects: 4,
				},
				{
					title: "HTML 5",
					content:
						"The foundation of the web, HTML is the most used techologies above all in the web, a markup language that has evolved though the years along with the internet.",
					image: html5,
					color: "rgb(230, 75, 35)",
					projects: 16,
				},
				{
					title: "CSS3",
					content:
						"What is HTML without CSS ? A shit that has no name. Styling beautiful and user friendly interfaces for websites and applications, that what the CSS power does !",
					image: css3,
					color: "rgb(67, 124, 213)",
					projects: 16,
				},
				{
					title: "SASS",
					content:
						"I know a lot of CSS lovers, but SASS is considerably speeding styles production and enforces better codebase when it comes to designing apps from scratch.",
					image: sass,
					color: "rgb(174, 59, 160)",
					projects: 7,
				},
			],
		};
	},
	methods: {
		showMore() {
			this.shown = this.technologies.length;
		},
	},
};
</script>
