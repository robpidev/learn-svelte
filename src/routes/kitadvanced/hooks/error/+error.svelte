<script>
    import { page } from '$app/stores';
</script>

<div class="centering">
    <h1>{$page.status}</h1>
    <h2>{$page.error?.message}</h2>
    <p>error code: {$page.error?.code}</p>
</div>
