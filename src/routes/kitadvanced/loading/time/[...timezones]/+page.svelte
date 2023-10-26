<script>
    import { onMount } from 'svelte';
    import { invalidate } from '$app/navigation';

    export let data;

    onMount(() => {
        const interval = setInterval(() => {
            invalidate('data:now');
            // alternativamente invallida todo lo que dependa de esta
            // carga
            // invalidateAll();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<h2>
    {new Intl.DateTimeFormat([], {
        timeStyle: 'full',
        timeZone: data.timezone
    }).format(new Date(data.now))}
</h2>
