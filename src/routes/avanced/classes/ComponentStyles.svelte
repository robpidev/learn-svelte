<script>
    import Box from './utils/Box.svelte';
</script>

<h1>Component Styles</h1>

<div class="boxes">
    <Box --color="red" />
    <Box --color="green" />
    <Box --color="blue" />
</div>

<style>
    .boxes {
        display: flex;
        gap: 1em;
        width: min-content;
        margin: auto;
    }
</style>
