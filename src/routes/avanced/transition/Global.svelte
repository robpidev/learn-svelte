<script lang="ts">
    import { fly } from 'svelte/transition';
    let showItems = true;
    let i = 5;
    // 15 number items
    let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
</script>

<h1>Global Transitions</h1>

<label>
    <input type="checkbox" bind:checked={showItems} />
    Show items
</label>

<label>
    <input type="range" bind:value={i} max="10" />
    Number of items
</label>

<div class="items">
    {#if showItems}
        {#each items.slice(0, i) as item}
            <div class="item" transition:fly|global={{ x: 400, duration: 400 }}>
                {item}
            </div>
        {/each}
    {/if}
</div>

<style>
    .items {
        display: flex;
        flex-direction: column;
        gap: 0.3em;
        height: 21.1em;
        max-width: 500px;
        margin: auto;
        margin-top: 1em;
        /* overflow hidden; */
    }

    .item {
        background: rgba(255, 255, 255, 0.1);
        padding: 0.2em 1em;
        border-radius: 0.4em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: background 0.2s;
    }

    .item:hover {
        background: rgba(255, 255, 255, 0.2);
    }
</style>
