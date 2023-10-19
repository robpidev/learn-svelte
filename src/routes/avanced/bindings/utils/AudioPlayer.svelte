<script lang="ts">
    export let src: string;
    export let title: string;
    export let artist: string;

    let time = 0;
    let duration = 0;
    let paused = true;

    function format(time: number) {
        if (isNaN(time)) return '...';

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
    }
</script>

<div class="player" class:paused>
    <audio
        {src}
        bind:currentTime={time}
        bind:duration
        bind:paused
        on:ended={() => {
            time = 0;
        }}
    />
    <button
        class="play"
        aria-label={paused ? 'play' : 'pause'}
        on:click={() => (paused = !paused)}
    />

    <div class="info">
        <div class="description">
            <strong>{title}</strong>/
            <span>{artist}</span>
        </div>
    </div>

    <span class="reproduced">{format(time)}</span>

    <div class="time">
        <div
            class="slider"
            on:pointerdown={(e) => {
                const div = e.currentTarget;

                function seek(e) {
                    const { left, width } = div.getBoundingClientRect();
                    let p = (e.clientX - left) / width;
                    if (p < 0) p = 0;
                    if (p > 1) p = 1;

                    time = p * duration;
                }

                seek(e);

                window.addEventListener('pointermove', seek);

                window.addEventListener(
                    'pointerup',
                    () => {
                        window.removeEventListener('pointermove', seek);
                    },
                    { once: true }
                );
            }}
        >
            <div class="progress" style="--progress: {time / duration}%" />
        </div>
    </div>

    <span class="duration">{duration ? format(duration) : '--:--'}</span>
</div>

<style>
    .player {
        color: #aaa;
        width: 100%;
        display: grid;
        column-gap: 1em;
        grid-template-columns: 40px 2em auto 40px;
        align-items: center;
        grid-template-areas:
            'play info info .'
            'play reproduced time duration';
    }

    .player:not(.paused) {
        color: #fff;
        filter: drop-shadow(0.5em 0.5em 1em rgba(255, 255, 255, 0.3));
    }

    .play {
        grid-area: play;
    }

    .info {
        overflow: hidden;
        grid-area: info;
    }

    .reproduced {
        grid-area: reproduced;
    }

    .time {
        grid-area: time;
    }

    .duration {
        grid-area: duration;
    }

    button {
        aspect-ratio: 1;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: 50%;
        background-color: skyblue;
    }

    [aria-label='pause'] {
        background-image: url(./pause.svg);
    }

    [aria-label='play'] {
        background-image: url(./play.svg);
    }

    .description {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.2;
    }

    .slider {
        flex: 1;
        height: 0.5em;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 0.25em;
        overflow: hidden;
    }

    .progress {
        width: calc(100 * var(--progress));
        /* width: 50%; */
        height: 100%;
        background: slateblue;
    }
</style>
