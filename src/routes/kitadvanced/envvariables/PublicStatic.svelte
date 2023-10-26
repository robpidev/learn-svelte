<script>
    import { PUBLIC_THEME_BACKGROUND, PUBLIC_THEME_FOREGROUND } from '$env/static/public';
</script>

<h2>Public static</h2>

<p>
    Estean expuestas de forma segura al navegador y se inicia con
    <code>PUBLIC_</code>. Ejemplo:
</p>

<div class="box" style:background={PUBLIC_THEME_BACKGROUND} style:color={PUBLIC_THEME_FOREGROUND}>
    <span class="text">Hola mundo</span>
</div>

<style>
    .box {
        padding: 1em;
        border-radius: 6px;
    }
</style>
