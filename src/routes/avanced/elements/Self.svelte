<script>
    import Folder from './utils/Folder.svelte';
    import { files } from './utils/data';
</script>

<h2>
    <pre>svelte:self</pre>
</h2>

<Folder name="Home" {files} expanded />
