<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch('message', {
      text: 'Hello!',
    })
  }
</script>

<style>
  button {
    background: transparent;
    border: 1px solid #b554ff;
    color: white;
    padding: 0.5em 1.2em;
    border-radius: 8px;
    font-size: 1.2em;
    color: #b554ff;
  }

</style>
  
<button on:click={sayHello}>
  Click to say hello
</button>
