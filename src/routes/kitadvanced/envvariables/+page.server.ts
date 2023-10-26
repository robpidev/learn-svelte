// import { PASSPHRASE } from "$env/static/private";
import { env } from "$env/dynamic/private";
import { redirect, fail } from "@sveltejs/kit";

export function load ({ cookies }) {
    if (cookies.get('allowed')) {
        throw redirect(303, 'envvariables/welcome');
    }
}

export const actions = {
    default: async ({ request, cookies }) => {

        console.log("hola")
        const data = await request.formData();


        if (data.get("passphrase") === env.PASSPHRASE) {
            cookies.set('allowed', 'true', {
                path: '/',
            })

            throw redirect(303, 'envvariables/welcome');
        }

        return fail(403, {
            incorrect: true
        })
    }
}
