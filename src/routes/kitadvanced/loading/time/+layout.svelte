<script>
    import { onMount } from 'svelte';

    const path = '/kitadvanced/loading/time';
</script>

<nav>
    <a href="{path}/America/New_York">New York</a>
    <a href="{path}/America/Sao_Paulo">São Paulo</a>
    <a href="{path}/Europe/London">London</a>
    <a href="{path}/Europe/Paris">Paris</a>
    <a href="{path}/Africa/Cairo">Cairo</a>
    <a href="{path}/Asia/Shanghai">Shanghai</a>
    <a href="{path}/Asia/Tokyo">Tokyo</a>
    <a href="{path}/Australia/Sydney">Sydney</a>
    <a href="{path}/America/Los_Angeles">Los Angeles</a>
</nav>

<slot />

<style>
    nav {
        display: flex;
        padding: 0.5em;
        gap: 0.5em;
        flex-wrap: wrap;

        border: solid 1px #333;
        border-radius: 8px;
        margin: 1em;
    }
    a {
        color: white;
        text-decoration: none;
        padding: 0.2em 0.4em;
        transition: color 0.2s;
        background: #333;
        border-radius: 4px;
    }

    a:hover {
        color: slateblue;
    }
</style>
