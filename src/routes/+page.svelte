<script lang="ts">
	import Array from './Array.svelte';
	import Counter from './Counter.svelte';
	import Each from './Each.svelte';
	import Image from './Image.svelte';
	import Keyedeach from './Keyedeach.svelte';
	import Await from './Await.svelte';
	import Eventdom from './Eventdom.svelte';
	import Bind from './Bind.svelte';
	import Lifecicles from './Lifecicles.svelte';
</script>

<div class="page">
	<div class="title">
		<span class="page-title">Learn Svelte</span>
	</div>
	<main>
		<section>
			<Image src="file.png" />
		</section>
		<section>
			<Counter />
		</section>
		<section>
			<Array />
		</section>
		<section>
			<Each />
		</section>
		<section>
			<Keyedeach />
		</section>
		<section>
			<Await />
		</section>
		<section>
			<Eventdom />
		</section>
		<section>
			<Bind />
		</section>
		<section>
			<Lifecicles />
		</section>
	</main>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px;
		@media (max-width: 600px) {
			padding: 0px;
		}
		gap: 1em;
	}
	.page-title {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 2em;
		font-weight: bold;
		background-color: #6a009d;
		border-radius: 6px;
		padding: 0px 0.5em 0.1em 0.5em;
		margin: 1em;
	}

	main {
		border-radius: 8px;
		width: 100%;
		/* border: solid 1px white; */
		max-width: 1200px;
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1em 1em;
		@media (max-width: 600px) {
			border-radius: 0px;
		}

		background-color: rgba(255, 255, 255, 0.07);
		border-radius: 6px;
	}
</style>
