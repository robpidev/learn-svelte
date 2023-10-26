<script>
    import { page } from '$app/stores';

    let color = $page.params.color;
</script>

<div class="color" style="--color: #{color}">
    <span>#{color}</span>
</div>

<style>
    .color {
        width: 100%;
        display: flex;
        background-color: var(--color);
        display: flex;
        justify-content: center;
        max-width: 1200px;
        border-radius: 12px;
        @media (max-width: 600px) {
            border-radius: 0;
        }
    }

    span {
        mix-blend-mode: soft-light;
        color: black;
        font-size: 4em;
    }
</style>
