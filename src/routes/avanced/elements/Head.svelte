<script>
    const themes = ['dark', 'white', 'purple'];
    let selected = 'dark';
</script>

<h2>Head</h2>

<select bind:value={selected}>
    {#each themes as theme}
        <option value={theme}>{theme}</option>
    {/each}
</select>

<svelte:head>
    <link rel="stylesheet" href="/css/{selected}.css" />
</svelte:head>

<div class="card">
    <span>The theme selected es {selected}</span>
</div>

<style>
    .card {
        border: solid 1px rgba(255, 255, 255, 0.1);
        padding: 1rem;
        border-radius: 12px;
        margin-top: 1em;
        color: var(--fg);
        background: var(--bg);
    }
</style>
