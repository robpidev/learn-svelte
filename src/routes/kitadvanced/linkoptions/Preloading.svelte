<script lang="ts">
    import { navigating } from '$app/stores';
    let previus: any;
    let start: any;
    let end: any;

    $: if ($navigating) {
        start = Date.now();
        end = null;
        previus = $navigating;
    } else {
        end = Date.now();
    }
</script>

<h2>Preloading</h2>

<div>
    <a class="link" href="/kitadvanced/linkoptions/slowa" data-sveltekit-preload-data> Slow a </a>
    <a class="link" href="/kitadvanced/linkoptions/slowb"> Slow b </a>
</div>

{#if previus && end}
    <p>
        navigated from {previus.from.url.pathname}
        to {previus.to.url.pathname}
        in <strong>{end - start}ms</strong>
    </p>
{/if}
