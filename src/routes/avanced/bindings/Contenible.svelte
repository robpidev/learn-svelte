<script lang="ts">
    let html = '<p>Write some text!</p>';
</script>

<h2>Contenibles Bindings</h2>

<div bind:innerHTML={html} contenteditable />

<pre>{html}</pre>

<style>
    [contenteditable] {
        padding: 0.5em 1em;
        border: 1px solid #aaa;
        border-radius: 8px;
        outline: none;
    }

    [contenteditable]:focus {
        border: 1px solid slateblue;
    }
</style>
