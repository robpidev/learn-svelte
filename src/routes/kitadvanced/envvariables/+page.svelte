<script>
    import DynamicPrivate from './DynamicPrivate.svelte';
    import StaticPrivate from './StaticPrivate.svelte';
    import PublicStatic from './PublicStatic.svelte';
    import DynamicPublic from './DynamicPublic.svelte';
    export let form;
</script>

<h1>Environment Variables</h1>
<section>
    <StaticPrivate {form} />
</section>
<section>
    <DynamicPrivate />
</section>
<section>
    <PublicStatic />
</section>
<section>
    <DynamicPublic />
</section>
