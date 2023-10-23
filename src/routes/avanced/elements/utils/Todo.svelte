<svelte:options immutable={true} />

<script lang="ts">
    import { afterUpdate } from 'svelte';
    import flash from './flash';

    export let todo: { id: string; done: boolean; text: string };

    let element: HTMLElement;

    afterUpdate(() => {
        flash(element);
    });
</script>

<li bind:this={element}>
    <label>
        <input type="checkbox" checked={todo.done} on:change />
        {todo.text}
    </label>
</li>

<style>
    label {
        display: flex;
        gap: 1em;
        border: solid 1px #404040;
        padding: 0.5em 1em;
        border-radius: 6px;
        transition: background-color 0.2s;
    }

    label:hover {
        background-color: #404040;
    }
</style>
