// export async function load({ fetch }) {
export async function load({ depends }) {
// export async function load({ depends })

    // con this function active the invalidate
    // and change the data
    depends('data:now');
    // const response = await fetch('/kitadvanced/loading/time/api/now');
    // const now = await response.json();

    return {
        now: Date.now()
    };
}
