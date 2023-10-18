<script lang="ts">
    import tippy from 'tippy.js';
    import 'tippy.js/dist/tippy.css';
    // import 'tippy.js/themes/material.css';
    interface Options {
        content: string;
        theme: string;
    }

    let content = 'Hello';

    function tooltip(node: HTMLElement, options: Options) {
        const tooltip = tippy(node, options);

        return {
            update(options: Options) {
                tooltip.setProps(options);
            },
            destroy() {
                tooltip.destroy();
            }
        };
    }
</script>

<h1>Adding Parameters</h1>

<label>
    <input type="text" bind:value={content} />
    <button use:tooltip={{ content, theme: 'material' }}>Hover me</button>
</label>

<style>
    input {
        background: inherit;
        border: 1px solid #aaa;
        border-radius: 8px;
        padding: 0.5em 1em;
        color: white;
        outline: none;
    }

    input:focus {
        border: solid 1px slateblue;
    }

    button {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.4);
        color: white;
        padding: 0.5em 1em;
        border-radius: 8px;
    }

    button:hover {
        background: slateblue;
        border: solid 1px slateblue;
    }
</style>
