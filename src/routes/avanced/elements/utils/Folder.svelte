<script>
    import File from './File.svelte';

    export let expanded = false;
    export let name = '';
    export let files = [];

    function toggle() {
        expanded = !expanded;
    }
</script>

<button class:expanded on:click={toggle}>
    <span class="folder_icon">
        {#if expanded}
            
        {:else}
            
        {/if}
    </span>
    {name}
</button>

{#if expanded}
    <ul>
        {#each files as file}
            <li>
                {#if file.files}
                    <svelte:self {...file} />
                {:else}
                    <File {...file} />
                {/if}
            </li>
        {/each}
    </ul>
{/if}

<style>
    button {
        display: flex;
        background: rgb(255, 255, 255, 0);
        padding: 0.2em 1em;
        width: 100%;
        color: white;
        border: none;
        border-radius: 0;
        align-items: left;
    }

    button:hover {
        background: rgb(255, 255, 255, 0.1);
    }
    .folder_icon {
        padding-right: 1em;
        color: white;
        font-family: 'JetBrainsMono Nerd Font';
    }

    ul {
        margin-left: 1em;
        border-left: 1px solid rgb(255, 255, 255, 0.1);
    }

    li {
        padding: 0.2em 0;
    }
</style>
