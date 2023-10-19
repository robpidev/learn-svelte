<script>
    export let data = [];
    export let field = '';

    let search = '';

    $: regex = search ? new RegExp(search, 'i') : null;
    $: matches = (item) => (regex ? regex.test(item[field]) : true);
</script>

<div class="list">
    <label>
        Filter:
        <input bind:value={search} />
    </label>

    {#if $$slots.header}
        <div class="header">
            <slot name="header" />
        </div>
    {/if}

    <div class="content">
        {#each data.filter(matches) as item}
            <slot {item} />
        {/each}
    </div>
</div>

<style>
    .list {
        display: flex;
        flex-direction: column;
        height: 500px;
        gap: 1em;
    }

    .header {
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        padding-top: 1em;
    }

    .content {
        flex: 1;
        overflow: auto;
        padding-top: 1em;
        gap: 0.5em;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
        background: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: slateblue;
        border-radius: 4px;
        /* outline: 1px solid slategrey; */
    }
</style>
