<script>
    import Card from './utils/Card.svelte';
</script>

<h2>Slots</h2>
<div class="main">
    <Card>
        <span>Robert Torres</span>
        <span>President</span>
        <span slot="telephone"><small>314 159 262</small></span>
        <span slot="company">
            Frektal
            <br />
            <small>Maths and Physics</small>
        </span>
    </Card>
</div>

<style>
    .main {
        display: grid;
        place-items: center;
        height: 350px;
        background: url(./utils/wood.svg);
        border-radius: 8px;
    }

    small {
        font-size: 0.5em;
    }
</style>
