
interface Todo {
  id: string,
  description: string,
  done: boolean,
}

const db: Map<string, Todo[]> = new Map();

export function getTodos(userid: string) {
  if(!db.get(userid)) {
    db.set(userid, [{
      id: crypto.randomUUID(),
      description: 'Learn Sveltekit',
      done: false
    }]);
  }

  return db.get(userid)
}

export function createTodo(userid: string, description: string) {

  if (description === '') {
    throw new Error('You must provide a description for the todo');
  }

  const todos = db.get(userid) ?? [];

  if (todos.find((todo: Todo) => todo.description === description)) {
    throw new Error('Todo already exists');
  }

  const id = crypto.randomUUID();

  todos.push({
    id,
    description,
    done: false
  })

  return { id };
}

export function toggleTodo(userid: string, todoId: string, done: boolean) {
  const todos = db.get(userid) ?? [];
  // change todo.done
  todos.find((todo: Todo) => todo.id === todoId).done = done;
}

export function deleteTodo(userid: string, todoId: string) {
  const todos = db.get(userid) ?? [];
  const index = todos.findIndex((todo: Todo) => todo.id === todoId)

  if (index != -1) {
    todos.splice(index, 1);
  }
}

