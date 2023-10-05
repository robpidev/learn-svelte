<nav>
	<a href="/">Home</a>
	<a href="/sveltekit">sveltekit</a>
</nav>

<div class="page">
	<slot />
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
</style>
