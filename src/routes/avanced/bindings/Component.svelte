<script>
    import Keypad from './utils/Keypad.svelte';
    let pin = '';
    $: view = pin ? pin.replace(/\d(?!$)/g, '🦀') : 'Enter your pin';

    function handleSubmit() {
        alert(`submitted ${pin}`);
    }
</script>

<h2>Component Binding</h2>

<div class="cont">
    <div class="pin">{view}</div>
    <Keypad bind:value={pin} on:submit={handleSubmit} />
</div>

<style>
    .cont {
        margin: auto;
        width: max-content;
        border: solid 1px rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.02);
        padding: 1em;
        border-radius: 6px;
    }
    .pin {
        background: rgba(255, 255, 255, 0.1);
        padding: 0.5em 1em;
        margin-bottom: 1em;
        border-radius: 8px;
    }
</style>
