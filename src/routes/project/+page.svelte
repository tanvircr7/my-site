<script lang="ts">
	import * as config from '$lib/config'

	let { data } = $props()

	// console.log(data.stuff)
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.stuff as post}
			<li class="post">
				<a href={post.link} class="title">{post.title}</a>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: var(--size-7);

		.post {
			max-inline-size: var(--size-content-3);

			&:not(:last-child) {
				border-bottom: 1px solid var(--border);
				padding-bottom: var(--size-7);
			}

			.title {
				font-size: var(--font-size-fluid-1);
				text-transform: capitalize;
			}

			/* .date {
				color: var(--text-2);
			} */

			.description {
				margin-top: var(--size-3);
			}
		}
	}
</style>