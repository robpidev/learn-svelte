<script>
    import { page } from '$app/stores';
    const colors = ['red', 'green', 'blue'];
</script>

<nav style:background={$page.data.color ?? 'inherit'}>
    <a href="/kitadvanced/loading/colors" class="link">Home</a>
    {#each colors as color}
        <a href="/kitadvanced/loading/colors/{color}" class="link">{color}</a>
    {/each}

    {#if $page.data.component}
        <svelte:component this={$page.data.component} />
    {/if}
</nav>
<slot />

<style>
    nav {
        /* background: slateblue; */
        padding: 0.5em;
        display: flex;
        gap: 1em;
        margin: 1em;
        border: solid 1px rgba(255, 255, 255, 0.1);
        border-radius: 12px;
    }
    a {
        color: white;
    }
</style>
