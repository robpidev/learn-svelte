<script lang="ts">
    import RedThing from './utils/RedThing.svelte';
    import BlueThing from './utils/BlueThing.svelte';
    import GreenThing from './utils/GreenThing.svelte';

    let color = '';

    const options = ['red', 'blue', 'green'];
</script>

<h2>Svelte component</h2>
<select bind:value={color} on:change={() => console.log(color)}>
    #{#each options as option}
        <option value={option}>{option}</option>
    {/each}
</select>
<!---->
<!-- {#if color === 'red'} -->
<!--     <RedThing /> -->
<!-- {:else if color === 'blue'} -->
<!--     <BlueThing /> -->
<!-- {:else if color === 'green'} -->
<!--     <GreenThing /> -->
<!-- {/if} -->

<svelte:component this={color === 'red' ? RedThing : color === 'blue' ? BlueThing : GreenThing} />
