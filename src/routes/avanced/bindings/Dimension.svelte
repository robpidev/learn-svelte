<script>
    let w = 0;
    let h = 0;
    let size = 42;
    let text = 'edit this text';
</script>

<h2>Dimension</h2>

<label>
    <input type="range" bind:value={size} min="0" max="100" />
    font size ({size}px)
</label>

<br />

<div bind:clientWidth={w} bind:clientHeight={h}>
    <span style="font-size: {size}px" contenteditable>{text}</span>
    <span class="size">
        {w} x {h}
    </span>
</div>
<br />
<br />

<style>
    div {
        position: relative;
        display: inline-block;
        padding: 0.5em;
        background: hsla(15, 100%, 50%, 0.1);
        border: 1px solid hsl(15, 100%, 50%);
    }
    .size {
        line-height: 1;
        position: absolute;
        right: -1px;
        bottom: -1.4em;
        background: orangered;
        padding: 0.2em 0.4em;
        white-space: pre;
    }
</style>
