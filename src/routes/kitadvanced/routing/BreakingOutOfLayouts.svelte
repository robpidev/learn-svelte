<h2>Breaking out of Layouts</h2>
<p>
    Sirve para romper el layout simplemente poniendo un <code>@</code>
    donde se quiere romper el layout <code>+page@b.svelte</code>
</p>
<div class="centering">
    <ul>
        <li>
            <a href="routing/layout" class="link">layout</a>
        </li>
        <li>
            <a href="routing/layout/a" class="link">layout/a</a>
        </li>
        <li>
            <a href="routing/layout/a/b" class="link">layout/a/b</a>
        </li>
        <li>
            <a href="routing/layout/a/b/c" class="link">layout/a/b/c</a>
        </li>
    </ul>
</div>

<style>
    ul {
        display: flex;
        gap: 1em;
        justify-content: center;
    }
</style>
