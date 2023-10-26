<script>
    import { env } from '$env/dynamic/public';
</script>

<h2>Dynamic Publico</h2>

<p>
    De la misma forma que las variables dinamicas privadas, se accede mediante <code
        >import env from '$env/dynamic/public</code
    >
</p>

<div
    class="box"
    style:background={env.PUBLIC_THEME_BACKGROUND}
    style:color={env.PUBLIC_THEME_FOREGROUND}
>
    <span class="text">Hola mundo</span>
</div>

<style>
    .box {
        padding: 1em;
        border-radius: 6px;
    }
</style>
