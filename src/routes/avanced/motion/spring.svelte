<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { spring } from 'svelte/motion';

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.1
		}
	);
	let size = spring(10, {
		stiffness: 0.1,
		damping: 0.1
	});

	let svg: SVGElement;
	function move(e: MouseEvent) {
		coords.set({ x: e.clientX - svgx, y: e.clientY - svgy });
	}

	let svgx: any;
	let svgy: any;

	afterUpdate(() => {
		svgx = svg.getBoundingClientRect().x;
		svgy = svg.getBoundingClientRect().y;
	});
</script>

<span>Spring</span>
<br />
<svg
	bind:this={svg}
	on:mousemove={move}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(10)}
>
	<circle cx={$coords.x} cy={$coords.y} r={$size} fill="slateblue" />
</svg>

<div class="controls">
	<label>
		stiffness
		<input bind:value={coords.stiffness} type="range" min="0.1" max="1" step="0.01" />
	</label>
	<label>
		damping
		<input bind:value={coords.damping} type="range" min="0" max="1" step="0.01" />
	</label>
</div>

<style>
	svg {
		margin-top: 1em;
		/* position: relative; */
		background: rgba(255, 255, 255, 0.09);
		width: 100%;
		height: 500px;
		border-radius: 0.5em;
	}
</style>
