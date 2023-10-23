
export async function handle({ event, resolve }) {


    if (event.url.pathname === '/ping') {
        return new Response('pong')
    }

    event.locals.answer = 42;
    return await resolve(event, {
        transformPageChunk: ({html}) => html.replace(
            '<body',
            '<body style="color: #ddd"'
        )
    });
    
}

export async function handleFetch({ event, request, fetch }) {

    const url = new URL(request.url);
    if (url.pathname === '/kitadvanced/hooks/a')
    {
        return await fetch('/kitadvanced/hooks/b')
    }
    return await fetch(request);
}

export function handleError({ event, error }) {
    console.error(error.stack);

    return {
        message: 'everithing is fine',
        code: 'DRAKENFOR'
    }
}
