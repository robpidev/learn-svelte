<script lang="ts">
    export let name = '';
    $: type = name.slice(name.lastIndexOf('.') + 1);
    const icons = [
        { name: 'md', icon: '' },
        { name: 'gif', icon: '󰵸' },
        { name: 'xlsx', icon: '' }
    ];
</script>

<span class="icon">{icons.find((i) => i.name === type)?.icon}</span>
<span>{name}</span>

<style>
    .icon {
        font-family: 'JetBrainsMono Nerd Font';
        margin-right: 0.5em;
        margin-left: 1em;
        color: greenk;
        color: slategray;
    }
</style>
