<script lang="ts">
	import { elasticOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	let value = tweened(0, {
		duration: 1500,
		easing: elasticOut
	});
</script>

<span>Tweeneds</span>

<progress class="progress" value={$value} max="100" />

<div class="buttons">
	{#each [0, 25, 50, 75, 100] as progress}
		<button on:click={() => value.set(progress)}>{progress}%</button>
	{/each}
</div>

<style>
	.progress {
		width: 100%;
		margin: 1em 0;
		height: 20px;
	}

	.buttons {
		display: flex;
		gap: 1em;
	}

	button {
		width: 60px;
		color: white;
		background: inherit;
		border: solid 1px slateblue;
		border-radius: 6px;
		padding: 0.5em 1em;
		box-sizing: border-box;
		transition: box-shadow 0.2s, background 0.2s, color 0.2s;
	}

	button:hover {
		color: slateblue;
		box-shadow: 2px 2px 2px rgba(255, 255, 255, 0.2);
	}

	button:active {
		background: slateblue;
		color: white;
	}
</style>
