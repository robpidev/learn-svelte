<script>
    const paths = ['home', 'about', 'account', 'app'];
</script>

<h2>Route Groups</h2>
<p>
    Control access to different parts of your app with for create a group use:action
    <code>(namegroup)</code>.
</p>

<p>For this exaple app and account need login an hombe and aboun not</p>

<div class="centering">
    <ul>
        {#each paths as path}
            <a href="routing/app/{path}" class="link">{path}</a>
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
