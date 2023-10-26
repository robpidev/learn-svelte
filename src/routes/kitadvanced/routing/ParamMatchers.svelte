<script>
    let colors = ['ff3e00', 'dd00dd', '00dd00', 'pruple'];
</script>

<h2>Param Matchers</h2>

<p>
    This works with
    <code>/src/params/filename.ts</code>
    and <code>.../[path=filename]/...</code>
    . In this example words with a regex.
</p>

<div class="centerign">
    <ul>
        {#each colors as color}
            <li><a href="routing/colors/{color}" class="link">{color}</a></li>
        {/each}
    </ul>
</div>

<style>
    ul {
        display: flex;
        gap: 1em;
        justify-content: center;
    }
</style>
