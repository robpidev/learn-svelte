<div>
    <header>
        <slot name="telephone" />
        <slot name="company" />
    </header>
    <slot />
    <footer>
        <slot name="address">(address)</slot>
    </footer>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: min(2vh, 2.3vh, 1.5rem);
        font-family: 'Silian Rail';
        height: 50%;
        aspect-ratio: 3.5 / 2;
        background: url(./paper.svg) no-repeat 50% 50%;
        background-size: cover;
        border-radius: 6px;
        filter: drop-shadow(0.1em 0.1em 0.1em rgba(0, 0, 0, 0.2));
        padding: 6px;
        font-variant: small-caps;
        text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.2), 1px 1px 2px white;
        color: hsl(40, 20%, 35%);
        line-height: 1.2;
    }

    header,
    footer {
        width: 100%;
        display: flex;
        flex: 1;
        gap: 1em;
    }

    header {
        justify-content: center;
    }

    footer {
        font-size: 0.7em;
        justify-content: center;
        align-items: end;
    }
</style>
