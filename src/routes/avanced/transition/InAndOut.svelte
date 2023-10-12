<script lang="ts">
    import { fly, fade } from 'svelte/transition';
    let visible = false;
</script>

<h1>Ind and Out</h1>

<label>
    visible
    <input type="checkbox" bind:checked={visible} />
</label>
{#if visible}
    <p in:fly={{ x: 400, duration: 1000 }} out:fade>Flies in, fades out</p>
{/if}
