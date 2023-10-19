<script>
    import FilterableList from './utils/FilterableList.svelte';
    import { colors } from './utils/colors';
</script>

<h2>Slot Props</h2>

<FilterableList data={colors} field="name" let:item={row}>
    <!-- chechinkg for slots disable -->
    <!-- <header slot="header" class="row"> -->
    <!--     <span class="color" /> -->
    <!--     <span class="name">name</span> -->
    <!--     <span class="hex">hex</span> -->
    <!--     <span class="rgb">rgb</span> -->
    <!--     <span class="hsl">hsl</span> -->
    <!-- </header> -->
    <!---->
    <div class="row row-color">
        <span class="color" style="background-color: {row.hex};" />
        <span class="name">{row.name}</span>
        <span class="hex">{row.hex}</span>
        <span class="rgb">{row.rgb}</span>
        <span class="hsl">{row.hsl}</span>
    </div>
</FilterableList>

<style>
    .row {
        display: flex;
        gap: 1em;
        align-items: center;
    }

    .row * {
        flex: 1;
    }

    .color {
        flex: 0.2;
    }

    header {
        font-weight: bold;
    }

    .color {
        width: 1em;
        height: 1em;
        border-radius: 0.1em;
    }

    .rgb,
    .hsl {
        @media (max-width: 540px) {
            display: none;
        }
    }

    .row-color {
        transition: background 0.2s;
        border-radius: 5px;
        padding: 0.5em;
        margin-right: 0.1em;
        border: solid 1px rgba(255, 255, 255, 0);
    }

    .row-color:hover {
        background: rgba(255, 255, 255, 0.2);
        border: solid 1px rgba(255, 255, 255, 0.2);
    }
</style>
