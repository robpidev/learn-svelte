<script lang="ts">
	export let data: { todos: { id: string; description: string; done: boolean }[] };
</script>

<h1>Todo from Post</h1>

<label>
	Add a todo:
	<input
		type="text"
		on:keydown={async (e) => {
			if (e.key === 'Enter') {
				const input = e.currentTarget;
				const description = input.value;

				const response = await fetch('/sveltekit/apiroutes/post/todo', {
					method: 'POST',
					body: JSON.stringify({ description }),
					headers: {
						'Content-Type': 'aplication/json'
					}
				});

				const { id, error } = await response.json();

				if (id != null) {
					data.todos = [...data.todos, { id, description }];
					input.value = '';
				} else {
					alert(error);
				}
			}
		}}
	/>
</label>

<ul class="todos">
	{#each data.todos as todo}
		<li class="todo">
			<label class="">
				<div>
					<input
						type="checkbox"
						checked={todo.done}
						on:change={async (e) => {
							const done = e.currentTarget.checked;

							await fetch('/sveltekit/apiroutes/post/todo/' + todo.id, {
								method: 'PUT',
								body: JSON.stringify({ done }),
								headers: {
									'Content-Type': 'Aplication/json'
								}
							});
						}}
					/>
					<span>{todo.description}</span>
				</div>
				<button
					class="btn-remove"
					aria-label="Mark as complete"
					on:click={async (e) => {
						await fetch('/sveltekit/apiroutes/post/todo/' + todo.id, {
							method: 'DELETE'
						});

						data.todos = data.todos.filter((t) => t !== todo);
					}}
				/>
			</label>
		</li>
	{/each}
</ul>

<style>
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

	.todo label {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 2em;
		justify-content: space-between;
	}
	.btn-remove
	/* .btn-none */ {
		border: none;
		background: url(./remove.svg) no-repeat 50% 50%;
		background-size: 1em 1em;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
	}
	/**/
	/* .btn-none { */
	/* 	opacity: 0.2; */
	/* } */
	/**/
	/* .btn-remove:hover { */
	/* 	opacity: 1; */
	/* } */
	/**/
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
</style>
