<script lang="ts">
    import { fly, slide } from 'svelte/transition';
    import { enhance } from '$app/forms';

    export let data: { todos: { id: string; description: string }[] };
    export let form: { error?: string; description?: string };

    // custom enhance

    let creating = false;
    let deleting: string[] = [];
</script>

<h1>Todos</h1>

<form
    action="?/create"
    method="POST"
    use:enhance={() => {
        creating = true;

        return async ({ update }) => {
            await update();
            creating = false;
        };
    }}
>
    <label>
        Add a ToDo:
        <input
            value={form?.description ?? ''}
            autocomplete="off"
            name="description"
            type="text"
            disabled={creating}
        />
    </label>
</form>

<ul class="todos">
    {#each data.todos as todo}
        <li in:fly={{ y: 20 }} out:slide class="todo">
            <form
                action="?/delete"
                method="POST"
                use:enhance={() => {
                    deleting = [...deleting, todo.id];
                    return async ({ update }) => {
                        await update();
                        deleting = deleting.filter((id) => id !== todo.id);
                    };
                }}
            >
                <input type="hidden" name="id" value={todo.id} />
                <span>{todo.description}</span>
                <button
                    class={deleting.includes(todo.id) ? 'btn-none' : 'btn-remove'}
                    aria-label="Mark  as complete"
                />
            </form>
        </li>
    {/each}
</ul>

{#if creating}
    <span class="saving">saving...</span>
{:else if form?.error}
    <span class="error">{form.error}</span>
{/if}

<style>
    .saving {
        color: green;
    }
    .todos {
        flex-direction: column;
        gap: 0.5em;
        display: flex;
        list-style: none;
    }
    .todo {
        background-color: rgba(255, 255, 255, 0.1);
        padding: 0.5em 1em;
        border-radius: 6px;
        user-select: none;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: scale 0.2s, box-shadow 0.2s;
    }

    .todo form {
        display: flex;
        gap: 2em;
        justify-content: space-between;
    }
    .btn-remove,
    .btn-none {
        border: none;
        background: url(./remove.svg) no-repeat 50% 50%;
        background-size: 1em 1em;
        aspect-ratio: 1;
        opacity: 0.5;
        transition: opacity 0.2s;
    }

    .btn-none {
        opacity: 0.2;
    }

    .btn-remove:hover {
        opacity: 1;
    }

    .todo:hover {
        box-shadow: 2px 2px 9px rgba(255, 255, 255, 0.08);
        /* scale: 1.01; */
    }

    input {
        border-radius: 6px;
        border: solid 1px rgba(255, 255, 255, 0.1);
        padding: 0.5em 1em;
        color: white;
        margin: 1em;
        background-color: inherit;
        outline: none;
    }

    input:focus {
        border: 1px solid slateblue;
    }

    .error {
        color: orange;
    }
</style>
