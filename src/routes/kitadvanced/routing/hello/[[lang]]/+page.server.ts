const greetings = {
    en: 'hello!',
    fr: 'bonjour!',
    de: 'hallo!',
    es: "Hola!",
}

export function load ({ params }) {
    return {
        greeting: greetings[params.lang ?? 'es'],
    }
}
