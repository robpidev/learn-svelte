<script>
    let selection = '';

    function handleSelectionChange(e) {
        selection = document.getSelection();
    }
</script>

<h2>Document</h2>

<svelte:document on:selectionchange={handleSelectionChange} />

<div>
    <h1>Select this text to fire events</h1>
    <p>Seletion: {selection}</p>
</div>
