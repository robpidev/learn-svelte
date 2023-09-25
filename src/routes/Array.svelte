<script lang="ts">
	let numbers = [1];

	let addNumber = () => (numbers = [...numbers, numbers.length + 1]);
	let popNumber = () => (numbers = numbers.slice(0, -1));
</script>

<div>
	<button on:click={addNumber}> Add a number </button>

	<span>numbers = [{numbers}]</span>

	<button on:click={popNumber}> Pop Number </button>
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		justify-content: center;
	}
	button {
		border: solid 1px rgba(255, 255, 255, 0.5);
		background-color: #6500b3;
		font-family: system-ui;
		font-size: 1.2em;
		border-radius: 6px;
		color: white;
		padding: 0.5rem 1rem;
	}

	span {
		color: #50fffa;
		padding: 0em 1em;
		font-size: 1.5em;
		font-family: system-ui;
	}
</style>
