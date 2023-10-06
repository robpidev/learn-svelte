<script lang="ts">
	let number: Number;

	async function roll() {
		const response = await fetch('/sveltekit/apiroutes/roll');
		number = await response.json();
	}
</script>

<button on:click={roll}>Roll the dice</button>

<a href="/sveltekit/apiroutes/post">Post todo list</a>
{#if number !== undefined}
	<p>You rolled a {number}</p>
{/if}
