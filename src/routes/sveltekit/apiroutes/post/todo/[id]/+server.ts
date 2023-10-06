import * as db from '$lib/server/database'

export async function PUT( { params, request, cookies }) {
  const { done } = await request.json();
  const userid = cookies.get('userid');

  db.toggleTodo(userid, params.id, done);

  return new Response(null, { status: 204 })
}

export async function DELETE({ params, cookies }) {
  const userid = cookies.get('userid');

  db.deleteTodo(userid, params.id);

  return new Response(null, { status: 204 });
}
