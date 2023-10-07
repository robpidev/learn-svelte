<script lang="ts">
    import { navigating } from '$app/stores';
</script>

<h1>Hello from stores</h1>

{#if $navigating}
    <p>
        navigating to {$navigating.to?.url.pathname}
    </p>
{:else}
    <p>
        <a href="/sveltekit/stores/navigating">navigating</a>
    </p>
{/if}

<style>
    p {
        color: green;
    }
</style>
