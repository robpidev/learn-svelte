<script lang="ts">
    import { elasticOut } from 'svelte/easing';
    import { fade } from 'svelte/transition';

    let visible = true;

    function spin(node: HTMLElement, { duration = 2000 }) {
        return {
            duration,
            css: (t: number) => {
                const eased = elasticOut(t);

                return `
                    transform: scale(${eased}) rotate(${eased * 1080}deg);
                    color: hsl(
                    ${Math.trunc(t * 360)},
                    ${Math.min(100, 1000 * (1 - t))}%,
                    ${Math.min(50, 500 * (1 - t))}%
                    );
                `;
            }
        };
    }
</script>

<h1>Custom CSS</h1>

<label>
    visible
    <input type="checkbox" bind:checked={visible} />
</label>

<div class="anim">
    {#if visible}
        <div class="centered" in:spin={{ duration: 8000 }} out:fade>
            <span>Transitions!</span>
        </div>
    {/if}
</div>

<style>
    .anim {
        display: flex;
        justify-content: center;
        /* background: slateblue; */
        height: 300px;
        overflow: hidden;
    }
    .centered {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 300px;
        width: 300px;
        /* background: purple; */
    }

    span {
        font-size: 2.5em;
    }
</style>
