<script lang="ts">
    import AudioPlayer from './utils/AudioPlayer.svelte';
    import { tracks } from './utils/tracks';
</script>

<h2>Media elements</h2>
<div class="tracks">
    {#each tracks as track}
        <AudioPlayer {...track} />
    {/each}
</div>

<style>
    .tracks {
        display: flex;
        gap: 1em;
        flex-direction: column;

        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 1em;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
    }
</style>
