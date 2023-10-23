<script>
    import { createEventDispatcher } from 'svelte';
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'clear', 0, 'submit'];
    export let value = '';
    const dispatch = createEventDispatcher();
</script>

{@debug value}
<div>
    {#each numbers as number}
        {#if typeof number === 'number'}
            <button on:click={() => (value += number)}>{number}</button>
        {:else if number === 'clear'}
            <button class={value === '' ? 'key' : ''} on:click={() => (value = '')}> Clear </button>
        {:else}
            <button class={value === '' ? 'key' : ''} on:click={() => dispatch('submit')}>
                Submit
            </button>
        {/if}
    {/each}
</div>

<style>
    div {
        display: grid;
        grid-template-columns: repeat(3, 5em);
        gap: 0.5em;
    }

    button {
        background: rgba(255, 255, 255, 0.1);
        color: white;
    }

    button:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .key {
        opacity: 0.5;
    }
</style>
