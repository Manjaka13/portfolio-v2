<template>
	<div class="home">
		<MobileProfileCard />
		<div id="journey"></div>
		<Title title1="A passionate developer" title2="Let me tell a story" />
		<p class="paragraph">
			I have some experience in the software engineering. Here let me tell you a
			tale, a of a passionate developer in the world of programmation. Everything I
			have done since then is to learn again and again, trying to build apps
			successfully by myself though tutorials. Yeah I'm self taught, I didn't had
			the opportunity to finish my studies but I swear I'm more than skilled to do
			the job !<br />
			Nowadays, a bunch of new technologies are released every year and programming
			languages evolve rapidly with new features. So, learning and mastering
			quickly new frameworks or libraries is a key for a successfull developer.
			These tools are meant to ease the development process, to build better apps
			with less code and more structurated patterns.
		</p>

		<Timeline />

		<div id="skills"></div>
		<Title title1="Next gen technologies" title2="My favourite techs" />
		<p class="paragraph">
			As a developer, I already achieved many personal and professional projects to
			make use of the skills I listed previously. These skills helped me a lot to
			realize such refined applications. Some of them could appear simple, but the
			logic behind the stack it uses is the major part of it is hidden from the
			public eye. If you want to know more about, I invite you to take a look at my
			Github repositories.
		</p>

		<Tech />

		<!-- <ElementFilter /> -->
	</div>
</template>

<script>
import Title from "components/Title.vue";
import Tech from "components/Tech.vue";
import ElementFilter from "components/ElementFilter.vue";
import MobileProfileCard from "components/MobileProfileCard.vue";
import Timeline from "components/Timeline.vue";

export default {
	name: "Home",
	components: {
		Title,
		Timeline,
		Tech,
		ElementFilter,
		MobileProfileCard,
	},
};
</script>
