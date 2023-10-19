const path = '/avanced/';

interface Path {
    url: string;
    name: string;
}

export const paths: Path[] = [
    { url: path + 'motion', name: 'Motion' },
    { url: path + 'transition', name: 'Transitions' },
    { url: path + 'actions', name: 'Actions' },
    { url: path + 'bindings', name: 'Bindings' },
    { url: path + 'classes', name: 'Classes and Style'},
    { url: path + 'composition', name: 'Component composotion'},
]
