<script lang="ts">
    import { onMount } from 'svelte';
    import { messages } from './loading-messages';
    import { typewriter } from './transition';

    let i = -1;
    onMount(() => {
        const inveral = setInterval(() => {
            i += 1;
            i %= messages.length;
        }, 2500);
        return () => {
            clearInterval(inveral);
        };
    });
</script>

<h1>Key Blocks</h1>

<h2>Loading...</h2>
<div>
    {#key i}
        <code in:typewriter={{ speed: 5 }}>
            {messages[i] || ''}
        </code>
    {/key}
</div>

<style>
    div {
        height: 2em;
        margin: auto;
        background: rgba(0, 0, 0, 0.1);
        padding: 0.5em 1em 0.2em 1em;
        border-radius: 8px;
    }

    code {
        font-family: monospace;
    }
</style>
