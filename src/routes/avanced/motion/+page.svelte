<script lang="ts">
    import Spring from './spring.svelte';
    import Tweened from './tweened.svelte';
</script>

<h1>Motion</h1>
<hr />

<br />
<section>
    <Tweened />
</section>
<section>
    <Spring />
</section>

<style>
    section {
        position: relative;
        margin-bottom: 1em;
        background: rgba(255, 255, 255, 0.09);
        padding: 1em;
        border-radius: 1em;

        @media (max-width: 600px) {
            border-radius: 0px;
        }
    }
</style>
