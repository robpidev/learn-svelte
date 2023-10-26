<div class="layout">
    <slot />

    <div class="name">b</div>
</div>

<style>
    .layout {
        display: flex;
        justify-content: center;
        border: solid 1px rgba(255, 255, 255, 0.1);
        margin: 1em;
        border-radius: 12px;
        padding: 1em;
        width: 100%;
        position: relative;
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
