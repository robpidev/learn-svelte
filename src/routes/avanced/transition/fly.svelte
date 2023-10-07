<script lang="ts">
	import { fly } from 'svelte/transition';
	let visible = true;
</script>

<h1>Fly</h1>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

{#if visible}
	<p transition:fly={{ x: 400, duration: 1000 }}>Fades in and out</p>
{/if}
