<script lang="ts">
	import { paths } from './paths';
</script>

<slot />

<br />
<hr />
<section class="paths">
	{#each paths as path}
		<a class="path" href="/sveltekit/{path.path}">{path.name}</a>
	{/each}
</section>

<style>
	hr {
		width: 80%;
	}
	.paths {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
	}

	.path {
		text-decoration: none;
		color: white;
		padding: 0.5em 1em;
		border-radius: 1em;
		border: 1px solid purple;
	}
</style>
