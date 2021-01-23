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

    .small {
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

    @media (max-width: 53.75em) {
        .section {
            gap: 2rem;
        }
    }
</style>