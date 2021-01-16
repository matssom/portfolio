<script>
    export let center = false, size = 'medium', fixed = false;
</script>

<div class="flow {size}" class:center class:fixed>
    <slot />
</div>

<style>
    .flow {
        display: flex;
        flex-wrap: wrap;
        gap: var(--gap-medium);
    }

    .large {
        gap: var(--gap-large)
    }

    .fixed > :global(*) {
        max-width: 35rem;
    }
    
    .fixed.large > :global(*) {
        max-width: 45rem;
    }

    .center {
        justify-content: center;
    }

    @media (max-width: 56em) {
        .fixed > :global(*) {
            max-width: 100%;
        }
    }
</style>