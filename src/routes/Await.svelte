<script lang="ts">
  import { randomNumber } from "./utils/utils";
  let promise = randomNumber();

  let handleclick = () => promise = randomNumber();
</script>

<style>
  div {
    display: flex;
    gap: 1em;
    align-items: center;
  }

  button {
    color: white;
    background-color: rebeccapurple;
    padding: 0.6em 1.2em;
    font-size: 1.2em;
    border: solid 1px rgba(255, 255, 255, 0.5);
    border-radius: 6px;
    align-items: center;
    justify-items: center;
  }

  .loading {
    height: 3em;
    width: 3em;
    border: 2px solid cyan;
    animation: loading 2s infinite;
    border-radius: 6px;
  }

  @keyframes loading {
    0% {
      border-color: cyan;
      transform: rotate(0deg);
    }
    25% {
      border-color: purple;
      transform: rotate(90deg);
    }
    50% {
      border-color: orange;
      transform: rotate(180deg);
    }
    75% {
      border-color: green;
      transform: rotate(270deg);
    }
    100% {
      border-color: orange;
      transform: rotate(360deg);
    }
  }

  .error {
    color: red;
  }

  .done {
    color: green;
  }
</style>

<div>
  
  {#await promise}
    <div class="loading"></div>
  {:then number} 
  <button on:click={handleclick}>
    Give me a number 😊
  </button>
   <span class="done">The number is: {number}</span>
  {:catch error}
  <button on:click={handleclick}>
    Give me a number 🙄
  </button>
   <span class="error">{error}</span>
  {/await}
</div>
