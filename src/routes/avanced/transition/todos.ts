import { writable } from "svelte/store";
interface Todo {
    id: number;
    done: boolean;
    description: string;
}

export function createTodoStore(inital: {done: boolean, description: string}[]) {
    let uid = 1;

    const todos = inital.map(({done, description}) => {
        return {
            id: uid++,
            done,
            description
        }        
    })

    const { subscribe, update } = writable(todos);

    return {
        subscribe,

        add: description => {
            const todo = {
                id: uid++,
                done: false,
                description
            }

            update($todos => [...$todos, todo])
        },

        remove: todo => {
            update($todos => $todos.filter(t => t.id !== todo.id))
        },

        mark: (todo, done) => {
            update($todos => [...$todos.filter((t) => t !== todo), { ...todo, done}])
        }
    }
}
