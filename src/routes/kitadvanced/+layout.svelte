<script>
    import { paths } from './paths';
</script>

<div class="content">
    <slot />

    <br />

    <div class="paths">
        {#each paths as path}
            <a class="path" href={path.url}>{path.name}</a>
        {/each}
    </div>
</div>

<style>
    .paths {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        padding: 0px 1em;
        justify-content: center;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding-top: 1em;
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
</style>
