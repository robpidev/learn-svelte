<script>
    import { page } from '$app/stores';

    let words = ['how', 'deep', 'does', 'the', 'rabbit', 'hole', 'go'];
    $: depth = $page.params.path.split('/').length;

    $: next =
        depth === words.length
            ? '/kitadvanced/routing'
            : `/kitadvanced/routing/${words.slice(0, depth + 1).join('/')}`;
</script>

<div class="centering">
    <ul>
        {#each words.slice(0, depth) as word}
            <li>{word}</li>
        {/each}
    </ul>
    <a class="link" href={next}>{words[depth] ?? '?'}</a>
</div>

<style>
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
    }
    li {
        font-size: 2em;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 4px;
        padding: 0 1em;
    }
    a {
        font-size: 3em;
    }
</style>
