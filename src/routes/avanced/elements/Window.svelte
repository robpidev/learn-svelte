<script lang>
    let key;
    let keyCode;

    function handleKeydown(event) {
        key = event.key;
        keyCode = event.keyCode;
    }
</script>

<h2>Window</h2>

<svelte:window on:keydown={handleKeydown} />

<div class="keydown">
    {#if key}
        <kbd> {key === '' ? 'Scpace' : key}</kbd>
        <p>{keyCode}</p>
    {:else}
        <p>Focus this window and press any key</p>
    {/if}
</div>

<style>
    .keydown {
        background: rgba(255, 255, 255, 0.1);
        height: 5em;
        padding: 5em;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        border-radius: 12px;
    }

    kbd {
        border-radius: 4px;
        padding: 0.2em 0.5em;
        font-size: 3em;
        background-color: #eeeeee;
        border-top: 5px solid #f9f9f9;
        border-left: 5px solid #f9f9f9;
        border-right: 5px solid #aaaaaa;
        border-bottom: 5px solid #aaaaaa;
        color: #555;
    }
</style>
