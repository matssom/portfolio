<script>
    export let center = false;
</script>

<div class="flow" class:center>
    <slot />
</div>

<style>
    .flow {
        display: flex;
        flex-wrap: wrap;
        gap: var(--gap-medium);
    }
    
    .center {
        justify-content: center;
    }
</style>