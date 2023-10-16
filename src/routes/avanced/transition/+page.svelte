<script lang="ts">
    import CustomCss from './CustomCSS.svelte';
    import CustomJs from './CustomJS.svelte';
    import Deferred from './Deferred.svelte';
    import Events from './Events.svelte';
    import Fade from './Fade.svelte';
    import Fly from './Fly.svelte';
    import Global from './Global.svelte';
    import InAndOut from './InAndOut.svelte';
    import KeyBlocks from './KeyBlocks.svelte';
</script>

<h1>Transitions</h1>
<section>
    <Fade />
</section>
<section>
    <Fly />
</section>
<section>
    <InAndOut />
</section>
<section>
    <CustomCss />
</section>
<section>
    <CustomJs />
</section>
<section>
    <Events />
</section>
<section>
    <Global />
</section>
<section>
    <KeyBlocks />
</section>
<section>
    <Deferred />
</section>

<style>
    h1 {
        padding: 1em;
    }
    section {
        position: relative;
        margin-bottom: 1em;
        background: rgba(255, 255, 255, 0.09);
        padding: 1em;
        border-radius: 1em;
        overflow-x: hidden;

        @media (max-width: 600px) {
            border-radius: 0px;
        }
    }
</style>
