<script lang="ts">
    import Title from './components/Title.svelte';
    import { beforeUpdate, afterUpdate } from 'svelte';

    let messages = [
        { text: 'Hello', sender: 'me' },
        { text: 'Hello', sender: 'you' },
        { text: 'How are you', sender: 'me' },
        { text: 'Fine', sender: 'you' },
        { text: 'What about you?', sender: 'me' },
        { text: 'Nothing much', sender: 'you' }
    ];

    let message = '';
    function send() {
        if (!message) return;
        messages = [...messages, { text: message, sender: 'me' }];
        messages = [...messages, { text: message, sender: 'you' }];
        message = '';
    }

    let div: HTMLDivElement;
    let autoScroll = false;

    beforeUpdate(() => {
        if (div) {
            const scrollableDistance = div.scrollHeight - div.offsetHeight;
            autoScroll = div.scrollTop > scrollableDistance - 500;
        }
    });

    afterUpdate(() => {
        if (autoScroll) {
            div.scrollTo(0, div.scrollHeight);
        }
    });

    // tick

    import { tick } from 'svelte';

    let text = 'Select some text and hit the tab key to toggle uppercase';
    async function handleKeydown(event: KeyboardEvent) {
        if (event.key !== 'Tab') return;

        event.preventDefault();

        const { selectionStart, selectionEnd, value } = this;
        const selection = value.slice(selectionStart, selectionEnd);

        const replacement = /[a-z]/.test(selection)
            ? selection.toUpperCase()
            : selection.toLowerCase();

        text = value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

        await tick();
        this.selectionStart = selectionStart;
        this.selectionEnd = selectionEnd;
    }
</script>

<Title text="Lifecicles" />
<br />
<div class="chat">
    <div class="messages" bind:this={div}>
        {#each messages as message}
            <span class={message.sender === 'me' ? 'msend' : 'mrecived'}>{message.text}</span>
        {/each}
    </div>
    <form class="send" on:submit|preventDefault={send}>
        <input class="ipt-message" type="text" bind:value={message} />
        <input class="btn-send" type="button" on:click={send} value="send" />
    </form>
</div>

<br />
<textarea on:keydown={handleKeydown} value={text} name="" id="" cols="30" rows="10" />

<style>
    .chat {
        position: relative;
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.05);
        height: 500px;
        width: 90%;
        max-width: 600px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .send {
        position: absolute;
        width: 100%;
        bottom: 0px;
        display: flex;
        padding: 1em;
        gap: 12px;
        box-sizing: border-box;
    }

    .btn-send {
        border-radius: 21px;
        height: 42px;
        width: 42px;
        background: #673ab755;
        border: solid 1px #673ab7;
        color: white;
    }

    .ipt-message {
        background: rgba(255, 255, 255, 0.03);
        border: solid 1px rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        box-sizing: border-box;
        color: white;
        padding: 0em 1.5em;
        height: 40px;
        flex: 1;
    }

    .ipt-message:focus,
    textarea:focus {
        outline: none;
        border: solid 1px #673ab7;
        caret-color: #673ab7;
    }

    .messages {
        position: relative;
        display: flex;
        flex-direction: column;
        /* background: green; */
        margin: 0 0 calc(40px + 1.5em) 0;
        flex: 1;
        gap: 1em;
        padding: 1.5em;
        overflow-y: auto;
    }

    .messages::-webkit-scrollbar {
        width: 4px;
    }

    .messages::-webkit-scrollbar-thumb {
        background-color: #673ab7;
        border-radius: 5px;
    }

    span {
        width: max-content;
        padding: 0.5em 1em;
    }

    .mrecived {
        border-radius: 0px 12px 12px 12px;
        background: rgba(255, 255, 255, 0.05);
    }

    .msend {
        border-radius: 12px 12px 0px 12px;
        align-self: flex-end;
        background: #673ab7;
    }

    textarea {
        box-sizing: border-box;
        background: inherit;
        padding: 1em;
        width: 90%;
        max-width: 600px;
        border-radius: 12px;
        resize: none;
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
</style>
