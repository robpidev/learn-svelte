<script lang="ts">
    import Canvas from './Canvas.svelte';
    import { trapFocus } from './actions';
    let showMenu = true;
    let selected = '';
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'pink', 'white', 'black'];
    let size = 1;
</script>

<h1>The use Directive</h1>
<div class="canvas-container">
    <Canvas color={selected} {size} />
    <button class="btn-menu" on:click={() => (showMenu = !showMenu)}>
        {showMenu ? 'close' : 'open'}
    </button>

    {#if showMenu}
        <div
            class="modal-background"
            on:click|self={() => {
                showMenu = false;
            }}
            on:keydown={(e) => {
                if (e.key === 'Escape') {
                    showMenu = false;
                }
            }}
        >
            <div class="menu" use:trapFocus>
                <div class="colors">
                    {#each colors as color}
                        <button
                            class="color"
                            aria-label={color}
                            aria-current={selected === color}
                            style="--color: {color}"
                            on:click={() => (selected = color)}
                        />
                    {/each}
                </div>
                <label>
                    small
                    <input type="range" bind:value={size} min="1" max="50" />
                    large
                </label>
            </div>
        </div>
    {/if}
</div>

<style>
    .canvas-container {
        position: relative;
        border: solid 1px rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        width: max-content;
        margin: auto;
        /* background: slateblue; */
        /* overflow: hidden; */
        justify-content: center;
        align-items: center;
    }

    .btn-menu {
        position: absolute;
        top: 1em;
        left: 1em;
        border-radius: 8px;
        border: solid 1px rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.1);
        padding: 0.5em 1em;
        color: white;
        z-index: 1;
    }

    .btn-menu:hover {
        background: slateblue;
    }

    .modal-background {
        top: 0;
        left: 0;
        display: flex;
        position: absolute;
        background: rgba(255, 255, 255, 0.1);
        height: 100%;
        width: 100%;
        /* top: 0; */
        align-items: center;
        justify-content: center;
    }

    .menu {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 1em;
        top: 10px;
    }

    .colors {
        display: flex;
        gap: 1em;
    }

    .color {
        aspect-ratio: 1;
        border-radius: 50%;
        border: solid 1px var(--color);
        background: var(--color, #fff);
        height: 30px;
    }

    .color[aria-current='true'] {
        transform: translate(1px, 1px);
        box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.2);
    }

    .menu label {
        display: flex;
        width: 100%;
        margin: 1em 0 0 0;
    }

    .menu input {
        flex: 1;
    }
</style>
