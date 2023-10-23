<script lang="ts">
    import HandleFetch from './HandleFetch.svelte';
    import RequestEventObject from './RequestEventObject.svelte';
    import Handle from './Handle.svelte';
    import HandleError from './HandleError.svelte';
    export let data: any;
</script>

<h1>Hooks</h1>
<section>
    <Handle />
</section>
<section>
    <RequestEventObject {...data} />
</section>
<section>
    <HandleFetch {...data} />
</section>
<section>
    <HandleError />
</section>
