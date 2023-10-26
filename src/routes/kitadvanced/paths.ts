const path = '/kitadvanced/';

interface Path {
    url: string;
    name: string;
}
export const paths: Path [] = [
    { url: path + "hooks", name: "Hooks" },
    { url: path + "linkoptions", name: "Link options" },
    { url: path + "routing", name: "Advanced routing" },
    { url: path + "loading", name: "Advanced loading" },
]
