<script lang="ts">
    import { createTodoStore } from './todos';

    const todos = createTodoStore([
        { done: false, description: 'write some docs' },
        { done: false, description: 'start writing blog post' },
        { done: true, description: 'buy some milk' },
        { done: false, description: 'mow the lawn' },
        { done: false, description: 'feed the turtle' },
        { done: false, description: 'fix some bugs' }
    ]);

    import { send, receive } from './transitioncrosfade';
</script>

<h1>Todo list</h1>
<input
    class="input"
    type="input"
    placeholder="Add new todo"
    on:keydown={(e) => {
        if (e.key === 'Enter') {
            todos.add(e.currentTarget.value);
            console.log(todos);
            e.currentTarget.value = '';
        }
    }}
/>

<div class="todo-list">
    <ul class="todos">
        <h1>Undone:</h1>
        {#each $todos.filter((todo) => !todo.done) as todo (todo.id)}
            <li in:receive={{ key: todo.id }} out:send={{ key: todo.id }}>
                <label class="todo">
                    <input
                        type="checkbox"
                        checked={todo.done}
                        on:change={(e) => todos.mark(todo, e.currentTarget.checked)}
                    />
                    <span>{todo.description}</span>
                    <button on:click={() => todos.remove(todo)} />
                </label>
            </li>
        {/each}
    </ul>

    <ul class="todos">
        <h2>Donde</h2>
        {#each $todos.filter((todo) => todo.done) as todo (todo.id)}
            <li in:receive={{ key: todo.id }} out:send={{ key: todo.id }}>
                <label class="todo">
                    <input
                        type="checkbox"
                        checked={todo.done}
                        on:change={(e) => todos.mark(todo, e.currentTarget.checked)}
                    />
                    <span>{todo.description}</span>
                    <button on:click={() => todos.remove} />
                </label>
            </li>
        {/each}
    </ul>
</div>

<style>
    .todo-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
    }

    .todos {
        flex-grow: 1;
        padding: 0;
        gap: 0.5em;
    }
    .todo {
        background: rgba(255, 255, 255, 0.1);
        padding: 0.5em 1em;
        border-radius: 8px;
        align-items: center;
        list-style: none;
        border: solid 1px rgba(255, 255, 255, 0.1);
        display: flex;
        gap: 1em;
        transition: background 0.2s, border 0.2s, box-shadow 0.2s;
    }

    .todo:hover {
        border: solid 1px rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    button {
        margin-left: auto;
        background-image: url(./remove.svg);
        aspect-ratio: 1;
        height: 1.2em;
        border: 0;
        background-color: rgba(255, 255, 255, 0);
        /* background: slateblue; */
        opacity: 0.5;
        transition: opacity 0.2s;
    }

    button:hover {
        opacity: 1;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    ul li {
        list-style: none;
    }

    .input {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 0.5em 1em;
        color: white;
        margin-left: 1em;
        border-radius: 8px;
        outline: none;
    }

    .input:focus {
        border: 1px solid slateblue;
    }
</style>
