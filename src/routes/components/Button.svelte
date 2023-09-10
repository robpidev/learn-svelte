<script lang="ts">
  export let text = "No name";
</script>

<style>
  button {
    padding: 0.5em 1em;
    border-radius: 6px;
    border: solid 1px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.1em;
  }
</style>

<button on:click>
  {text}
</button>

