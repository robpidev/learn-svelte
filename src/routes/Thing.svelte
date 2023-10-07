<script lang="ts">
    const emojis = {
        apple: '🍎',
        banana: '🍌',
        carrot: '🥕',
        egg: '🥚',
        uva: '🍇'
    };

    export let name: string;
    let emoji: string = emojis[name];
</script>

<span>{emoji} = {name}</span>

<style>
    span {
        border: 1px solid rgba(254, 255, 255, 0.45);
        border-radius: 20px;
        padding: 0.5em 1em;
        vertical-align: middle;
        background-color: #6d00b7;
    }
</style>
