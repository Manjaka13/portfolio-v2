<template>
	<div class="contacts">
		<div class="container">
			<h2 class="contacts__title">Let's talk</h2>
			<div class="contacts__separator"></div>
			<form class="contacts__form" @submit.prevent="submitForm">
				<div class="contacts__group">
					<input class="contacts__input" type="text" placeholder="Your name" />
					<div class="contacts__icon">
						<Icon class="icon" icon="user" />
					</div>
				</div>
				<div class="contacts__group">
					<input class="contacts__input" type="email" placeholder="Your email" />
					<div class="contacts__icon">
						<Icon class="icon" icon="envelope" />
					</div>
				</div>
				<textarea
					class="contacts__message"
					placeholder="Enter your message here"
				></textarea>
				<button v-if="!loading" class="contacts__submit" type="submit">
					Send message
				</button>
				<Spinner v-else />
			</form>
			<p class="contacts__caption">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<Copyright />
		</div>
	</div>
</template>

<script>
import Spinner from "components/Spinner.vue";
import Copyright from "components/Copyright.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);

export default {
	name: "Contacts",
	components: {
		Icon: FontAwesomeIcon,
		Copyright,
		Spinner,
	},
	data() {
		return {
			loading: false,
		};
	},
	methods: {
		submitForm() {
			this.loading = true;
		},
	},
};
</script>
