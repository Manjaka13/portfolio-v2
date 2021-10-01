<template>
	<div class="cover">
		<div :class="'container cover--container cover--' + time">
			<div class="cover__card">
				<figure class="cover__card-figure">
					<img class="cover__card-image" src="../images/avatar.jpg" alt="Avatar" />
				</figure>
				<h2 class="cover__card-title">Harijaona RAJAONSON</h2>
				<div class="cover__card-separator"></div>
				<p class="cover__card-description">
					I'm a Javascript developer who lives in Madagascar. I have 3 years of
					Freelance experience and more than 6 years in general programming since
					college. I enjoy building pixel perfect apps for the web that I like to be
					fast, secured and scalable.
				</p>
				<div class="cover__card-current-work">
					<p class="label">Current company:</p>
					<a class="company" href="https://myagency.mg" title="Company's website">
						<figure class="company-figure">
							<img
								class="company-image"
								src="https://media-exp1.licdn.com/dms/image/C4D0BAQGeiH5-xP0oGA/company-logo_200_200/0/1554826653255?e=1639612800&v=beta&t=SQwoDUZ5sgr7fsWcRRXY1ML1dhMxw7buqYw9CtBIQYs"
								alt="Current company"
							/>
						</figure>
						<p class="company-name">My Agency</p>
					</a>
				</div>
			</div>
			<div class="cover__right-box">
				<div class="cover__date">
					<p class="time">{{ hours }} <pre>{{ dots ? ":" : " " }}</pre> {{ minutes }}</p>
					<p class="label">{{day}}, {{date}} {{month}}. {{year}}</p>
					<div class="separator"></div>
				</div>
				<div class="cover__greetings">
					<p class="label">{{greeting}}</p>
					<button class="home">Download my resume</button>
				</div>
				<ul class="cover__social">
					<li v-for="(s, key) in social" :key="key" class="cover__social-item">
						<a class="cover__social-link" :href="s.link" :title="s.title"><Icon :icon="['fab', s.icon]" /></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {fab} from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export default {
	name: "Cover",
	components: {
		Icon: FontAwesomeIcon
	},
	data() {
		return {
			hours: null,
			minutes: null,
			date: null,
			month: null,
			year: null,
			day: null,
			time: 0,
			greeting: null,
			clockIntervalId: null,
			dotsIntervalId: null,
			dots: true,
			social: [
				{
					icon: "facebook",
					title: "Add me on Facebook !",
					link: "#0"
				},
				{
					icon: "linkedin",
					title: "Follow me on LinkedIn !",
					link: "#0"
				},
				{
					icon: "github",
					title: "Check my repos !",
					link: "#0"
				}
			]
		};
	},
	beforeMount() {
		this.updateClock();
		this.getTime();
	},
	mounted() {
		this.clockIntervalId = setInterval(() => this.updateClock(), 1000);
		this.dotsIntervalId = setInterval(() => {
			this.dots = !this.dots;
		}, 500);
	},
	beforeUnmount() {
		if (this.clockIntervalId) clearInterval(this.clockIntervalId);
		if (this.dotsIntervalId) clearInterval(this.dotsIntervalId);
		this.clockIntervalId = null;
		this.dotsIntervalId = null;
	},
	methods: {
		getTime() {
			const greetings = [
				"This morning, some go for jogging, but I prefer to code.",
				"A beautiful day for a beautiful code !",
				"I think I'm already hungry... Coffee time !",
				"Let's take a pause and appreciate the sunset view",
				"It's not good to code at night, go to bed for now...",
			]
			const date = new Date().toLocaleString("fr-FR", { hour12: false });
			const time = parseInt(date.split(" ")[1].split(":")[0]);
			const limits = [5, 8, 13, 16, 19];
			this.time = null;
			for (let i = 0, j = 0; i < limits.length - 1; i++, j++)
				if (time >= limits[i] && time < limits[i + 1]) {
					this.time = j;
					break;
				}
			if(!this.time)
				this.time = 4;
			this.greeting = greetings[this.time];
		},
		updateClock() {
			const date = new Date();
			const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			const months = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aog", "Sept", "Oct", "Nov", "Dec"];
			this.hours = date.getHours();
			this.hours = this.hours < 10 ? "0" + this.hours : this.hours;
			this.minutes = date.getMinutes();
			this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
			this.date = date.getDate();
			this.date = this.date < 10 ? "0" + this.date : this.date;
			this.month = months[date.getMonth()];
			this.year = date.getFullYear();
			this.day = days[date.getDay()];
		},
	},
};
</script>
