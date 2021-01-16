<script>
    export let size = 'medium';
</script>

<div class="stack {size}">
    <slot />
</div>

<style>
    .stack {
        display: flex;
        flex-direction: column;
    }

    .medium {
        gap: var(--gap-small);
    }

    .medium {
        gap: var(--gap-medium);
    }

    .large {
        gap: var(--gap-large);
    }

    .huge {
        gap: var(--gap-huge);
    }

    .section {
        gap: var(--gap-section);
    }
</style>