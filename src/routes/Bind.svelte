<script lang="ts">
	import Title from './components/Title.svelte';
	let operations = [
		{ id: 1, name: 'sumar', sign: '+' },
		{ id: 2, name: 'restar', sign: '-' },
		{ id: 3, name: 'multiplicar', sign: '×' },
		{ id: 4, name: 'dividir', sign: '÷' }
	];

	let op = (a: number, b: number, sign: string) => {
		switch (sign) {
			case '+':
				return a+b;
			case '-':
				return a - b;
			case '×':
				return a * b;
			case '÷':
				return a / b;
			default:
				return 0;
		}
	};

	let selected: { id: number; name: string; sign: string };

	let a = 1;
	let b = 2;
	let yes = false;

	// card 2
	let scoops = 1;
	let flavours: string[] = [];

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
</script>

<Title text="Binds" />

<div class="content">
	<form class="card">
		<select bind:value={selected}>
			{#each operations as operation}
				<option value={operation}>{operation.name}</option>
			{/each}
		</select>
		<br />

		<label for="">
			<input class="number" type="number" bind:value={a} min="0" max="10" />
			<input type="range" class="range" bind:value={a} min="0" max="10" />
		</label>
		<br />

		<label for="">
			<input class="number" type="number" bind:value={b} min="0" max="10" />
			<input class="range" type="range" bind:value={b} min="0" max="10" />
		</label>
		<br />

		<label for="">
			<input type="checkbox" bind:checked={yes} />
			Show sum result
		</label>
		{#if yes}
			<p>{a} {selected.sign} {b} = {op(a, b, selected.sign)}</p>
		{/if}
	</form>

	<div class="card selection">
		<h4>Size</h4>
		{#each [1, 2, 3] as number}
			<label for="">
				<input type="radio" name="scoops" value={number} bind:group={scoops} />
				{number}
				{number === 1 ? 'scoop' : 'scoops'}
			</label>
		{/each}

		<h4>Flavours</h4>
		<!-- {#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour} -->
		<!--   <label for=""> -->
		<!--     <input type="checkbox" name="flavours" value={flavour} bind:group={flavours}> -->
		<!--     {flavour} -->
		<!--   </label> -->
		<!-- {/each} -->

		<select multiple bind:value={flavours}>
			{#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
				<option>{flavour}</option>
			{/each}
		</select>

		{#if flavours.length === 0}
			<p>Please select at least one flavour</p>
		{:else if flavours.length > scoops}
			<p>Can not order more flavours than scoops!</p>
		{:else}
			<p>
				You ordered {scoops}
				{scoops === 1 ? 'scoop' : 'scoops'}
				of {formatter.format(flavours)}
			</p>
		{/if}
	</div>
</div>

<style>
	.card {
		background-color: rgba(255, 255, 255, 0.09);
		padding: 1em;
		border-radius: 8px;
		border: solid 1px rgba(255, 255, 255, 0.1);
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 1em;
	}
	.number {
		border: solid 1px rgba(150, 0, 255, 0.1);
		border-radius: 6px;
		background-color: rgba(255, 255, 255, 0.09);
		color: white;
		padding: 0.5em;
	}

	.content {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.selection {
		align-items: flex-start;
		/* background: purple; */
	}
</style>
