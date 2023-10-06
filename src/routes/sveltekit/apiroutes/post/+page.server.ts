import * as db from "$lib/server/database"

export function load( {cookies} ) {
  const id = cookies.get('userid');

  if (!id){
    cookies.set('userid', crypto.randomUUID(), { path: '/' })
  }

  return {
    todos: db.getTodos(id) ?? []
  }
}
