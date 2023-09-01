<script lang="ts">
	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	let selected = colors[0];
</script>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-family: system-ui;
  }

  .buttons {
    box-sizing: border-box;
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    justify-content: center;
  }

  button {
    background-color: transparent;
    border: solid 1px;
    border-radius: 6px;
    font-size: 1.2em;
    box-sizing: border-box;
    padding: 0.6rem 1.2rem;
    font-family: consolas;
  }

  button:hover {
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 1px 1px 5px 0px rgba(255, 255, 255, 0.15);
  }
</style>

<div class="main">
  <h1 style="color: {selected}">Pick a colour</h1>
  <div class="buttons">
    {#each colors as color, i}
      <button on:click={() => selected = color} style="color: {color}">
        Clickme {i + 1}
      </button>
    {/each}
  </div>
</div>

