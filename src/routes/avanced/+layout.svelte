<script lang="ts">
	import { paths } from './paths';
</script>

<div class="content">
	<slot />

	<div class="paths">
		{#each paths as path}
			<a href={path.url}>{path.name}</a>
		{/each}
	</div>
</div>

<style>
	.content {
		max-width: 1200px;
		width: 100%;
	}
	.paths {
		border-top: 1px solid rgb(255, 255, 255, 0.1);
		display: flex;
		padding: 1em 0;
		gap: 1em;
		flex-grow: 1;
		flex-wrap: wrap;
		margin: 3em 0;
	}

	a {
		border: 1px solid slateblue;
		padding: 0.3em 0.6em;
		border-radius: 12px;
		text-decoration: none;
		color: white;
	}
</style>
