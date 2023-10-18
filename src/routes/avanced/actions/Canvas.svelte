<script lang="ts">
    import { onMount } from 'svelte';

    export let color: string;
    export let size: number;

    let previous: { x: number; y: number } | null;

    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D;
    function get_coords(e: PointerEvent) {
        const { clientX, clientY } = e;
        const { left, top } = canvas.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;

        return { x, y };
    }

    onMount(() => {
        context = canvas?.getContext('2d');
        //
        // function resize() {
        //     canvas.width = window.innerWidth;
        //     canvas.height = window.innerHeight;
        // }
        //
        // window.addEventListener('resize', resize);
        // resize();
        //
        // return () => {
        //     window.removeEventListener('resize', resize);
        // };
    });
</script>

<canvas
    height="500px"
    width="1000px"
    bind:this={canvas}
    on:pointerdown={(e) => {
        const { x, y } = get_coords(e);
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, size / 2, 0, 2 * Math.PI);
        context.fill();

        previous = { x, y };
    }}
    on:pointerleave={() => {
        previous = null;
    }}
    on:pointermove={(e) => {
        const { x, y } = get_coords(e);
        if (e.buttons === 1) {
            e.preventDefault();

            context.strokeStyle = color;
            context.lineWidth = size;
            context.lineCap = 'round';
            context.beginPath();
            context.moveTo(previous.x, previous.y);
            context.lineTo(x, y);
            context.stroke();
        }

        previous = { x, y };
    }}
/>

{#if previous}
    <div
        class="preview"
        style="--color: {color}; --size: {size}px; --x: {previous.x}px; --y: {previous.y}px"
    />
{/if}

<style>
    canvas {
        /* position: absolute; */
        top: 0;
        left: 0;
        /* width: 100%; */
        /* height: 100%; */
        background: rgba(0, 0, 0, 0.1);
    }

    .preview {
        position: absolute;
        left: var(--x);
        top: var(--y);

        width: var(--size);
        height: var(--size);
        transform: translate(-50%, -50%);
        background: var(--color);
        border-radius: 50%;
        opacity: 0.5;
        pointer-events: none;
    }
</style>
