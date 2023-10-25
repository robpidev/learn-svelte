<script>
    import { paths } from './paths';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let seconds = 0;

    onMount(() => {
        const interval = setInterval(() => {
            seconds++;
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<div class="content">
    <slot />

    <br />

    <p>Open this page for {seconds} seconds</p>
    <nav class="paths" data-sveltekit-reload>
        {#each paths as path}
            {#if $page.url.pathname !== path.url}
                <a class="path" href={path.url}>{path.name}</a>
            {/if}
        {/each}
    </nav>
</div>

<style>
    .paths {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        padding: 0px 1em;
        justify-content: center;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding: 1em;
    }
    .path {
        text-decoration: none;
        color: white;
        padding: 0.4em 1em;
        border-radius: 1em;
        border: 1px solid slateblue;
        background-color: rgba(102, 0, 179, 0.3);
    }

    .path:hover {
        background-color: rgba(102, 0, 179, 0.4);
    }

    .path:focus {
        background-color: rgba(102, 0, 179, 0.5);
        box-shadow: 1px 1px 4px rgba(102, 0, 179, 0.5);
    }
    .content {
        max-width: 1200px;
        box-sizing: border-box;
        width: 100%;
    }
    p {
        padding: 0 1em;
    }
</style>
