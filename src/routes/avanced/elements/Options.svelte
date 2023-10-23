<script>
    import Todo from './utils/Todo.svelte';
    let todos = [
        { id: 1, done: true, text: 'wash the car' },
        { id: 2, done: false, text: 'take the dog for a walk' },
        { id: 3, done: false, text: 'mow the lawn' }
    ];

    function toggle(toggledTodo) {
        todos = todos.map((todo) => {
            if (todo === toggledTodo) {
                return {
                    id: todo.id,
                    text: todo.text,
                    done: !todo.done
                };
            }

            return todo;
        });
    }
</script>

<h2>Options</h2>

<div class="centered">
    <h3>Todos</h3>
    <ul class="todos">
        {#each todos as todo (todo.id)}
            <Todo {todo} on:change={() => toggle(todo)} />
        {/each}
    </ul>
</div>

<style>
    .centered {
        max-width: 20em;
        margin: 0 auto;
    }

    .todos {
        display: flex;
        gap: 0.2em;
        flex-direction: column;
    }
</style>
