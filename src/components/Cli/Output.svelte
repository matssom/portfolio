<script>
    import { onMount } from 'svelte';
    export let currentValue = '', inline = false, color = "#ffffff", focus = false, editable = false, path = false;

    let split = currentValue.split('<br>');
    let text;

    focus = focus;
    editable = editable;
    path = path;

    onMount(() => { 
        text.style.color = color;
    });

</script>

<div class:inline bind:this={text}>
    {#each split as value}
        {#if value != ''}
            <p>{value}</p>
        {/if}
    {/each}
</div>

<style>
    p {
        line-height: 1.3em;
        white-space: pre;
    }

    .inline {
        display: inline-block;
    }
</style>