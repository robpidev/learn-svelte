<script lang="ts">
    export let form: any;
</script>

<h2>Estatic private</h2>
<p>
    Las variables de entorno - como las claves API y las credenciales de la base de datos - se puede
    agregar a un
    <code>.env</code> archivo, y estan disponibles para su solicitud y se puede acceder mediante
    <code>$env/static/private</code>. Ejemplo: usamos en <code>.env</code> la clave
    <code>PASSPHRASE="open sesame"</code>
    y la saremos para acceder a una pagina
</p>

<div class="centering">
    <form method="POST">
        <label>
            enter the passphrase:
            <input type="text" name="passphrase" autocomplete="off" />
        </label>
    </form>
</div>

{#if form?.incorrect}
    <p class="error">Incorrect passphrase</p>
{/if}

<style>
    .error {
        color: orangered;
    }
</style>
