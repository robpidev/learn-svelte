<script>
    let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<h2>Window Binding</h2>

<div>
    <span>depth: {y}px</span>
</div>

<style>
    div {
        height: 5em;
        padding: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    span {
        background: rgba(255, 255, 255, 0.1);
        font-size: 2em;
        font-family: monospace;
        padding: 1em;
        border-radius: 12px;
    }
</style>
