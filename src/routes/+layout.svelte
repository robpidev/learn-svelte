<script lang="ts">
    import { page } from '$app/stores';
    let numbers = [1, 20];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        console.log('number: ', number);
    }
</script>

<nav>
    <a href="/" aria-current={$page.url.pathname === '/'}>Home</a>
    <a href="/avanced" aria-current={$page.url.pathname.includes('/avanced')}>avanced</a>
    <a href="/sveltekit" aria-current={$page.url.pathname.includes('/sveltekit')}>sveltekit</a>
</nav>

<div class="page">
    <slot />
</div>

<style>
    .page {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;

        @media (max-width: 600px) {
            padding: 0px;
        }
        gap: 1em;
    }

    nav {
        display: flex;
        padding: 0.4em;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.09);
    }

    nav a {
        color: white;
        text-decoration: none;
        padding: 0.3em 0.6em;
        transition: background 0.2s;
        border-radius: 5px;
    }

    nav a:hover {
        /* color: slateblue; */
        background: slateblue;
    }

    nav a[aria-current='true'] {
        font-style: italic;
    }
</style>
