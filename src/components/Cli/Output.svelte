<script>
    export let currentValue = '';

    let split = currentValue.split('<br>');
</script>

<div>
    {#each split as value}
        {#if value != ''}
            <p>{value}</p>
        {/if}
    {/each}
</div>

<style>
    p {
        color: white;
    }
</style>