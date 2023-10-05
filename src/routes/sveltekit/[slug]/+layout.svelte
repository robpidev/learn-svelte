<script>
	export let data;
</script>

<div class="layout">
	<main>
		<slot />
	</main>

	<hr />

	<aside>
		<h2>More posts</h2>
		<ul>
			{#each data.summaries as { slug, title }}
				<li>
					<a href="/sveltekit/{slug}">{title}</a>
				</li>
			{/each}
		</ul>
	</aside>
</div>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 2fr 0.1fr 1fr;
		}
	}

	.layout {
		max-width: 1200px;
		padding: 1em;
	}
</style>
