
interface Todo {
  id: string,
  description: string,
  done: boolean,
}

const db = new Map();

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

  const todos = db.get(userid);

  if (todos.find((todo: Todo) => todo.description === description)) {
    throw new Error('Todo already exists');
  }

  todos.push({
    id: crypto.randomUUID(),
    description,
    done: false
  })
}

export function deleteTodo(userid: string, todoId: string) {
  const todos = db.get(userid);
  const index = todos.findIndex((todo: Todo) => todo.id === todoId)

  if (index != -1) {
    todos.splice(index, 1);
  }
}
