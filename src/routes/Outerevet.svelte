<script lang="ts">
	import Innerevent from "./Innerevent.svelte";
	import Button from "./components/Button.svelte";
</script>

<style>
  div {
    display: grid;
    background-color: rgba(255, 255, 255, 0.09);
    padding: 1em;
    width: 100%;
    border: solid 1px rgb(255, 255, 255, 0.1);
    border-radius: 8px;
    gap: 1em;
    justify-items: center;
  }

</style>

<div>
  <span>Forwarding Event</span>
  <Innerevent on:message/>
</div>

<div>
  <span>Button component</span>
  <Button text="Say hello" on:click={() => alert("Hola")}/>
</div>
