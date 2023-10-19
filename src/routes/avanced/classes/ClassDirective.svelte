<script>
    let flipped = false;
</script>

<h2>Class Directive</h2>

<div class="container">
    Flip the card
    <button
        class="card-container"
        class:flipped
        on:click={() => (flipped = !flipped)}
        style:--bg-1="palegoldenrod"
        style:--bg-2="back"
        style:--bg-3="goldenrod"
    >
        <div class="front">
            <span class="symbol">♠</span>
        </div>
        <div class="back">
            <div class="pattern" />
        </div>
    </button>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 1em;
        /* height: 500px; */
        align-items: center;
        perspective: 100vh;
        overflow: hidden;
    }

    .card-container {
        position: relative;
        aspect-ratio: 2.5 / 3.5;
        height: 30em;
        background: rgba(255, 255, 255, 0.1);
        /* background: slateblue; */
        transform: rotateY(180deg);
        transform-style: preserve-3d;
        /* padding: 0; */
        user-select: none;
        cursor: pointer;
        transition: transform 0.4s;
        margin-bottom: 5em;
    }

    .flipped {
        transform: rotateY(0);
    }

    .front,
    .back {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        backface-visibility: hidden;
        border-radius: 6px;
        /* border: 1px solid rgba(255, 255, 255, 0.1); */
        /* border: solid 1px green; */
        box-sizing: border-box;
        padding: 1em;
    }

    .front {
        background: url(./utils/svelte-logo.svg) no-repeat 17em 25.5em,
            url(./utils/svelte-logo.svg) no-repeat 1em 1em;
        background-size: 3em 3em, 3em 3em;
    }

    .back {
        transform: rotateY(180deg);
    }

    .symbol {
        font-size: 20em;
        color: white;
        line-height: 0;
    }

    .pattern {
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.4);
        background-image: radial-gradient(rgba(255, 255, 255, 0.3) 0.9em, transparent 1em),
            repeating-radial-gradient(
                var(--bg-1) 0,
                var(--bg-3) 0.3em,
                transparent 0.4em,
                transparent 2em,
                rgba(255, 255, 255, 0.3) 2.1em,
                rgba(255, 255, 255, 0.3) 2.6em,
                transparent 2em,
                transparent 2em
            );
        background-size: 3em 3em, 9em 9em;
        background-position: 0 0;
        border-radius: 6px;
    }
</style>
