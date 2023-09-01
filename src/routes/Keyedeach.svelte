<script lang="ts">
  import Thing from './Thing.svelte';

  let things = [
    { id: 1, name: 'banana' },
    { id: 2, name: 'apple' },
    { id: 3, name: 'uva' }
  ];

  let remove = () => things = things.slice(1);
</script>

<style>
  div {
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
  }
  button {
    border: solid 1px rgba(255, 255, 255, 0.5);
    border-radius: 6px;
    background-color: #fd009b;
    padding: 0.5em 1em;
    font-family: 1.2em;
    color: white;
  }
</style>

<div>
  {#each things as thing (thing.id)}
    <Thing name={thing.name} />
  {/each}

  <button on:click={remove}>
    remove one
  </button>
</div>


