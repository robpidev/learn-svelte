import { crossfade } from "svelte/transition";
import { quintIn } from "svelte/easing";

export const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),

    fallback(node, params) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;

        return {
            duration: 600,
            easing: quintIn,
            css: (t) => `
                transform: ${transform} scale(${t});
                opacity: ${t};
            `
        };
    }
})
