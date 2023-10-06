import * as db from '$lib/server/database';
import { json } from '@sveltejs/kit';

export async function POST({ request, cookies}) {
  const { description } = await request.json();


  const uid = cookies.get('userid')

  try {
    const { id } = db.createTodo(uid, description);
    return json({ id }, { status: 201 });
  } catch (error) {
    return json({ id: null, error: error.message }, { status: 500 });
  }
}
