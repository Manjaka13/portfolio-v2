<template>
	<div class="timeline">
		<div class="container">
			<Timelineitem
				v-for="(item, key) in timelineData"
				:key="key"
				:start="key === 0"
				:end="key === timelineData.length - 1"
				:reverse="key % 2 != 0"
				:item="item"
			/>
		</div>
	</div>
</template>

<script>
import image from "../images/0.png";
import Timelineitem from "./Timelineitem.vue";

export default {
	name: "Timeline",
	components: {
		Timelineitem,
	},
	data() {
		return {
			timelineData: [
				{
					title: "Highschool",
					content:
						"In my years in the highschool I already started programming. Once I graduated I knew I will study software engineering to follow this dream. I were not the most brilliant though, but I had one clear goal in my mind, becoming software developer.",
					exp: "3 years",
					image: image,
					icon: "graduation-cap",
					date: "2011",
					lottie: "https://embed.lottiefiles.com/animation/37296",
				},
				{
					title: "College",
					content:
						"You know, I love programming as much as I play games. Well, understanding complex abstraction is hard but needed when it comes to computer science. Wit what I learned everyday, I first created games !",
					exp: "4 years",
					image: image,
					icon: "pencil-alt",
					date: "2014",
					lottie: "https://embed.lottiefiles.com/animation/37296",
				},
				{
					title: "Freelancing",
					content:
						"I dropped studies, my parents weren't rich, and we had money issues from time to time. Now I had to leave creating games, studies, and started working in the web development as a freelance worker. It was a brand new world for me.",
					exp: "3 years",
					image: image,
					icon: "palette",
					date: "2017",
					lottie: "https://embed.lottiefiles.com/animation/37296",
				},
				{
					title: "MyAgency",
					content:
						"Freelancing was over, I dedicated 1 year learning React and the Javascript ecosystem. Then decided to apply for a job as front end developer. I were picked from 53 other candidates, I knew my freelancing experience were a big plus, I'm close to master front end techs...",
					exp: "6 months",
					image: image,
					icon: "laptop",
					date: "2021",
					lottie: "https://embed.lottiefiles.com/animation/37296",
				},
			],
		};
	},
};
</script>
