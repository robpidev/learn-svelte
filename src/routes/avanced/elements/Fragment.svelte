<script>
    import Board from './utils/Board.svelte';
    import { getWinningLine } from './utils/tictactoe';

    let squares = Array(9).fill('');
    let next = '❌';

    $: winningLine = getWinningLine(squares);
</script>

<h2>Fragment</h2>

<div class="container">
    <Board size={3}>
        <svelte:fragment slot="game">
            {#each squares as square, i}
                <button
                    class="square"
                    class:winning={winningLine?.includes(i)}
                    disabled={square}
                    on:click={() => {
                        squares[i] = next;
                        next = next === '❌' ? '⭕' : '❌';
                    }}
                >
                    {square}
                </button>
            {/each}
        </svelte:fragment>

        <div slot="controls">
            <button
                on:click={() => {
                    squares = Array(9).fill('');
                    next = '❌';
                }}
            >
                Reset
            </button>
        </div>
    </Board>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin: 0 auto;
    }

    .square,
    .square:disabled {
        background: white;
        border-radius: 0;
        color: #222;
        opacity: 1;
        padding: 0;
    }

    .winning {
        font-size: 1.2em;
    }

    .container:has(.winning) .square:not(.winning) {
        opacity: 0.8;
    }
</style>
