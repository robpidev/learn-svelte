<script lang="ts">
  let count = 0;
  $: double = count * 2;

  let add = () => count += 1;

  $: if (count >= 10) {
    alert("The cound is > 10");
    count = 0;
  }

</script>
<style>
  button {
    background-color: #6500b3;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: solid 1px rgba(255, 255, 255, 0.5);
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    padding: 0.5em 1em;
    color: white;
    widows: 100%;
  }

  button:hover {
    box-shadow:0px 0px 5px 1px rgba(255, 255, 255, 0.2);
  }

  span {
    color: #50fffa;
    padding: 0em 1em;
    font-size: 1.5em;
    font-family: system-ui;
  }

  .error {
    color: yellow;
  }

  .good {
    color: green;
  }

  .wrong {
    color: red;
  }

  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: center;
  }
</style>


<div>
  <span>
    Double Clicks: {double}
  </span>

  {#if count > 5}
    <span class="error">
      {count} is greater than 10
    </span>
  {:else if 1 <= count && count < 10}
    <span class="good">
      {count} is between 0 and 10
    </span>
  {:else}
    <span class="wrong">
      {count} is zero
    </span>
  {/if}
  
  <button on:click={add}>
    Clicks: {count} {count === 1 ? 'time' : 'times'}
  </button>
</div>

