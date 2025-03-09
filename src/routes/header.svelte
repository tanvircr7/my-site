<script lang="ts">
	import Toggle from './toggle.svelte'
	import * as config from '$lib/config'
</script>

<nav>
	<!-- <a href="/" class="title">
		<b>{config.title}</b>
	</a> -->

	<div class="links">
		<div>
			<a href="/">Hasan</a>
		</div>
		<div>
			<a href="/project">Projects</a>
		</div>
		<div>
			<a href="/blog">Blog</a>
		</div>
		<div>
			<a href="/contact">Contact</a>
		</div>
		<!-- <div>
			<a href="/rss.xml" target="_blank">RSS</a>
		</div> -->
	</div>

	<Toggle  />
	<!-- <div style="width: 40px; height: 30px; background: 1e1e1e; border-radius: 5px;"></div> -->
</nav>

<style>
	nav {
		display: flex;
		align-items: center; /* Center vertically */
		justify-content: center; /* Center horizontally */
		/* width: 100%; Ensure it takes full width */
		padding-block: var(--size-2);
		/* border-color: black;
		border-width: 10px; */

		@media (min-width: 768px) {
			/* Keep centering for larger screens */
			justify-content: center;
			padding-left: 50px;
		}
	}

	.links {
		/* display: flex; */
		/* gap: var(--size-7); */
		/* list-style: none; */
		margin-block: var(--size-7);
		/* margin-left: 50px; */
		

		/* border-color: black;
		border-width: 10px; */

		
		align-items: center; /* Vertically center the links */
		justify-content: center; /* Horizontally center the links */

		@media (min-width: 768px) {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
			align-items: center; /* Ensure vertical centering on larger screens */
			justify-content: center; /* Keep horizontal centering */
		}
	}

	.links {
		display: flex;
		gap: var(--size-7);
		list-style: none;
		margin-block: var(--size-7);
		align-items: center; /* Vertically center the links */
		justify-content: center; /* Horizontally center the links */
		flex-grow: 1; /* Ensure the links take up all available space */
	}

	a {
		color: inherit;
		text-decoration: none;
	}
	.hidden {
		display: none;
	}
</style>
