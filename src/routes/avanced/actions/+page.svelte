<script lang="ts">
    import UseDirective from './UseDirective.svelte';
    import AddingParamers from './AddingParameters.svelte';
</script>

<h1>Actions</h1>
<section>
    <UseDirective />
</section>
<section>
    <AddingParamers />
</section>

<style>
    h1 {
        padding: 0em 1em;
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
