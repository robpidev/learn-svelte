/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    const response = await fetch('/kitadvanced/hooks/a');

    return {
        // message: `the answer is ${event.locals.answer}`,
        // ip: `the ip is ${event.getClientAddress()}`,
        fetch: await response.text(),
    }
}
