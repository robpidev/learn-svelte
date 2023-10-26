<div class="layout">
    <slot />

    <div class="name">a</div>
</div>

<style>
    .layout {
        display: flex;
        justify-content: center;
        border: solid 1px rgba(255, 255, 255, 0.1);
        margin: 1em;
        border-radius: 12px;
        padding: 1em;
        position: relative;
        width: 100%;
    }

    .name {
        position: absolute;
        bottom: -13px;
        right: 10px;
        background: inherit;
        padding: 0.2em 0.4em;
        border-radius: 4px;
        background: slateblue;
        border: solid 1px rgba(255, 255, 255, 0.1);
    }
</style>
