<script lang="ts">
	import * as config from '$lib/config';
	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'
</script>

<svelte:head>
	<title>Mohammad Tanvir Hasan - Main page</title>
</svelte:head>

<main>
	<!-- Section 1: Intro -->
	<section class="intro">
		<h5>Hi!✋ <br /> I'm Hasan <br />CS student researcher <br /> software developer<br /> currently in the US</h5>
	</section>

	<!-- Section 2: Startup -->
	<section class="startup">
		<h2>🚀 My Startup</h2>
		<p>
			My project focused on renting artificial turfs.
		</p>
		<a href="https://turfhubbd.com" class="btnHub">Turfhub</a>
	</section>

	<!-- Section 3: Projects -->
	<section class="projects">
		<h2>📌 My Projects</h2>
		<div class="cards">
			<div class="card">
				<h3>Corrective Retrieval Augmented Generation</h3>
				<a href="https://tanvir-corrective-rag.streamlit.app//" class="btn">View</a>
			</div>
			<!-- <div class="card">
				<h3>Project 2</h3>
				<p>Brief description of project 2.</p>
				<a href="project2-link" class="btn">View</a>
			</div> -->
		</div>
	</section>
</main>

<style>

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 50px;
		padding: 10px 20px;
	}

	/* Section Styling */
	section {
		width: 100%;
		max-width: 900px;
		padding: 40px;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		background: inherit;

		/* Centering content */
		display: flex;
		justify-content: center; /* Center horizontally */
		align-items: center; /* Center vertically */
		text-align: center; /* Ensure text inside is centered */
	}

	.intro {
		background: inherit;
	}

	.startup {
		background: inherit;
		flex-direction: column;
	}

	.projects {
		background: inherit;
		flex-direction: column;
	}

	h2, h5 {
		color: var(--text-2);
		margin-bottom: 10px;
	}

	p {
		color: var(--text-2);
		margin-bottom: 10px;
	}

	/* Responsive Cards */
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
		margin-top: 20px;
		color: var(--text-2);
	}

	.card {
		padding: 30px;
		background: var(--background);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		text-align: center;
	}

	.card h3 {
		margin-bottom: 10px;
		color: var(--text-2);
	}

	

	.btnHub {
		display: inline-block;
		margin-top: 10px;
		padding: 10px 20px;
		background: #78ea55;
		color: white;
		border-radius: 5px;
		text-decoration: none;
	}

	.btn {
		display: inline-block;
		margin-top: 10px;
		padding: 10px 20px;
		/* background: #007bff; */
		color: var(--text-2);
		border-radius: 5px;
		/* text-decoration: none; */
	}

	.btnHub:hover {
		background: #5b864e;
	}

	.btn:hover {
		/* background: #0056b3; */
	}

	@media (max-width: 768px) {
		main {
			padding: 20px;
		}

		section {
			padding: 30px;
		}

		.cards {
			grid-template-columns: 1fr;
		}
	}
</style>
