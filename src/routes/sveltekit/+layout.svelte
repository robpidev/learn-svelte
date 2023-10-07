<script lang="ts">
    import { paths } from './paths';
    import { page } from '$app/stores';
</script>

<slot />

<br />
<hr />
<section class="paths">
    {#each paths as path}
        {#if !$page.url.pathname.includes(path.path)}
            <a class="path" href="/sveltekit/{path.path}">{path.name}</a>
        {/if}
    {/each}
</section>

<style>
    hr {
        width: 90%;
    }

    .paths {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        padding: 0px 1em;
        justify-content: center;
    }

    @media (max-width: 640px) {
        hr {
            width: 100%;
        }
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
</style>
