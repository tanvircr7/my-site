<script lang="ts">
	import * as config from '$lib/config'
    import { contactLinks } from '$lib/config';
</script>

<section>
    <ul class="posts">
		{#each Object.entries(contactLinks) as [name, link]}
            <li>🔗 <a href={link} target="_blank">{name}</a></li>
		{/each}
	</ul>
</section>

<style>
	section {
		padding-block: var(--size-7);
		/* border-top: 1px solid var(--border); */
        
        /* Centering content */
		display: flex;
		justify-content: center; /* Center horizontally */
		align-items: center; /* Center vertically */
		text-align: center; /* Ensure text inside is centered */
        

		li {
			color: var(--text-2);
		}
	}
</style>