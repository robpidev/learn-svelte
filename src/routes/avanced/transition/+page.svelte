<script lang="ts">
	import Fade from './fade.svelte';
	import Fly from './fly.svelte';
	import Inandout from './inandout.svelte';
</script>

<h1>Transitions</h1>
<section>
	<Fade />
</section>
<section>
	<Fly />
</section>
<section>
	<Inandout />
</section>

<style>
	section {
		position: relative;
		margin-bottom: 1em;
		background: rgba(255, 255, 255, 0.09);
		padding: 1em;
		border-radius: 1em;
		overflow-x: hidden;
	}
</style>
