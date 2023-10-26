<script>
    import { enhance } from '$app/forms';
</script>

<div class="container">
    <slot />
    <form method="POST" action="logout" use:enhance>
        <button> Log out </button>
    </form>
</div>

<style>
    .container {
        padding: 1em;
        width: max-content;
    }

    button {
        background: inherit;
        color: white;
        transition: background 0.2s;
    }

    button:hover {
        background: slateblue;
    }
</style>
