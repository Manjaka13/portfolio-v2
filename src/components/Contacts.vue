<template>
	<div class="contacts">
		<h2 class="contacts__title">Let's talk</h2>
		<div class="contacts__separator"></div>
		<form class="contacts__form">
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
		</form>
	</div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);

export default {
	name: "Contacts",
	components: {
		Icon: FontAwesomeIcon,
	},
};
</script>
