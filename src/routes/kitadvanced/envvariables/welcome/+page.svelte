<script>
    import { enhance } from '$app/forms';
</script>

<div>
    <h1>Welcome to sesame</h1>
    <form method="POST" use:enhance>
        <button style:background="slateblue" style:color="white">logout</button>
    </form>
</div>

<style>
    div {
        display: flex;
        padding: 1em;
        align-items: center;
        flex-direction: column;
    }
</style>
