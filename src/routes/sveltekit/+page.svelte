<script lang="ts">
	export let data: any;
</script>

<h1>sveltekit</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/sveltekit/{slug}">{title}</a></li>
	{/each}
</ul>
