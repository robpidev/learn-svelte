<script>
    import { enhance } from '$app/forms';
</script>

<div class="container">
    <form method="POST" use:enhance>
        <button> Login </button>
    </form>
</div>

<style>
    button {
        background: inherit;
        color: white;
        transition: background 0.2s;
    }

    button:hover {
        background: slateblue;
    }

    .container {
        padding: 1em;
        width: max-content;
    }
</style>
