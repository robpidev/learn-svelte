import CoolComponent from "./CoolComponent.svelte";
import NoCoolComponent from "./NoCoolComponent.svelte";
export function load({ data }) {
    return {
        message: data.message,
        component: data.cool ?  CoolComponent : NoCoolComponent
    }
}
