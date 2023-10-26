<script>
    const colors = ['red', 'green', 'blue'];
</script>

<h2>Universal Load Functions</h2>
<p>
    for this type use
    <code>+page.ts</code>
    ( <code>+layout.ts</code> ) and not
    <code>+page.server.ts</code>
    (<code>+layout.server.ts</code>). Example: select a color
</p>

<div class="centering">
    <ul>
        {#each colors as color}
            <li>
                <a href="loading/colors/{color}" style="color: {color}" class="link">{color}</a>
            </li>
        {/each}
    </ul>
</div>

<style>
    ul {
        display: flex;
        justify-content: center;
        gap: 1em;
    }
</style>
