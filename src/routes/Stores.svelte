<script lang="ts">
    import Title from './components/Title.svelte';
    import Button from './components/Button.svelte';
    import { greeting, name, count, time, elapsed, customCount } from './utils/store';
    // import Card from './components/Card.svelte';
    // import { onDestroy } from 'svelte';
    // let number = 0;

    // const unsubscribe = count.subscribe((value) => {
    // number = value;
    // });

    // onDestroy(unsubscribe);

    // redable
    const formatter = new Intl.DateTimeFormat('es', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
    });

    // derived Stores
</script>

<Title text="Stores: {formatter.format($time)}" />
<span>You are in this page {$elapsed} {$elapsed > 1 ? 'seconds' : 'second'}</span>

<div class="container">
    <div class="cont card">
        <h4>The value es {$count}</h4>
        <div class="buttons">
            <Button text="+" on:click={() => count.update((n) => n + 1)} />
            <Button text="-" on:click={() => count.update((n) => n - 1)} />
            <Button text="Reset" on:click={() => count.set(0)} />
        </div>
    </div>

    <div class="cont card">
        <h4>The value whit custom count es {$customCount}</h4>
        <div class="buttons">
            <Button text="+" on:click={customCount.incremente} />
            <Button text="-" on:click={customCount.decrement} />
            <Button text="Reset" on:click={customCount.reset} />
        </div>
    </div>

    <div class="cont card">
        <h4>Stores bindings</h4>
        <span>{$greeting}</span>
        <div>
            <input type="text" bind:value={$name} />
            <Button on:click={() => ($name += '!')} text="Add !" />
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1em;
    }
    .cont {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card {
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 1rem;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.09);
        margin-top: 1rem;
    }

    input {
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 12px;
        padding: 0.6rem 1rem;
        color: white;
        background: inherit;
        margin: 1em 0;
    }

    input:focus {
        outline: none;
        border: solid 1px #673ab7;
    }
</style>
