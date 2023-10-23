<script>
    const options = ['h1', 'h2', 'h3', 'p', 'marquee'];
    let selected = options[0];
</script>

<h2>Element</h2>
<select bind:value={selected}>
    {#each options as option}
        <option value={option}>{option}</option>
    {/each}
</select>
<!---->
<!-- {#if selected === 'h1'} -->
<!--     <h1>I'm a <code>&lt:h1&gt;</code> element</h1> -->
<!-- {/if} -->

<svelte:element this={selected}>
    I'm a <code>&lt;{selected}&gt;</code> element
</svelte:element>

<style>
    code {
        background: #404040;
        border-radius: 8px;
        padding: 0.2em;
    }
</style>
