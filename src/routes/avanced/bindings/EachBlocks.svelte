<script>
    import { fly } from 'svelte/transition';
    let todos = [
        { done: false, text: 'finish Svlete tutorial' },
        { done: false, text: 'build an app' },
        { done: false, text: 'world domination' }
    ];

    function add() {
        todos = todos.concat({
            done: false,
            text: ''
        });
    }

    function clear() {
        todos = todos.filter((t) => !t.done);
    }

    $: remaining = todos.filter((t) => !t.done).length;
</script>

<h2>Each blocks Bindings</h2>
<div class="center">
    <h1>Todos</h1>
    <ul class="todos">
        {#each todos as todo}
            <li class:done={todo.done} in:fly={{ y: 20 }} out:fly={{ x: 400 }}>
                <input type="checkbox" bind:checked={todo.done} />
                <input type="texo" bind:value={todo.text} placeholder="What needs to be done?" />
            </li>
        {/each}
    </ul>

    <p>{remaining} remaining</p>

    <div class="buttons">
        <button on:click={add}>Add new</button>
        <button on:click={clear}>Clear completed</button>
    </div>
</div>

<style>
    .center {
        border: solid 1px rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 1em;
        display: flex;
        flex-direction: column;
        /* width: 100%; */
        align-items: center;
    }

    .todos {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    input {
        border-color: rgba(255, 255, 255, 0);
    }

    input:focus {
        border: solid 1px slateblue;
    }

    .todos li {
        padding: 0.5em 1em;
        /* width: min-content; */
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 6px;
        background: #454545;
    }

    button {
        background: inherit;
        color: white;
    }

    button:hover {
        background: slateblue;
    }

    .done {
        opacity: 0.6;
    }
</style>
