export function trapFocus(node:HTMLElement) {
    const previus = document.activeElement;

    function focusable() {
        return Array.from(node.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));       return Array.from(node.querySelector('button, [href], input', 'select', 'textarea', ))
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key !== 'Tab') return;

        const current = document.activeElement;

        const elements = focusable();
        const first = elements.at(0);
        const last = elements.at(-1)

        if (event.shiftKey && current === first) {
            last.focus();
            event.preventDefault();
        }

        if (!event.shiftKey && current === last) {
            first.focus();
            event.preventDefault();
        }
    }


    focusable()[0]?.focus();

    node.addEventListener('keydown', handleKeydown);

    return {
        destroy() {
            node.removeEventListener('keydown', handleKeydown);
            previus?.focus();
        }
    }

}
