<template>
	<div class="mobileprofilecard-container">
		<div class="mobileprofilecard">
			<figure class="mobileprofilecard__figure">
				<img
					class="mobileprofilecard__image"
					src="../images/avatar.jpg"
					alt="Avatar"
				/>
			</figure>
			<h2 class="mobileprofilecard__title">Harijaona RAJAONSON</h2>
			<div class="mobileprofilecard__separator"></div>
			<p class="mobileprofilecard__description">
				I'm a Javascript developer who lives in Madagascar. I have 3 years of
				Freelance experience and more than 6 years in general programming since
				college. I enjoy building pixel perfect apps for the web that I like to be
				fast, secured and scalable.
			</p>
			<div class="mobileprofilecard__current-work">
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
	</div>
</template>

<script>
export default {
	name: "MobileProfileCard",
};
</script>
