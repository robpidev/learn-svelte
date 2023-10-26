import { redirect } from "@sveltejs/kit";

export const actions = {
    default: ({ cookies, url }) => {
        cookies.delete('logged_in', {path: '/'});
        throw redirect(303, 'home')
    }
}
