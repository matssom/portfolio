<script>
    import { onDestroy } from 'svelte';
    export let location;
    export let update;

    update(location.pathname);
    onDestroy(() => {
        update('');
    });
</script>