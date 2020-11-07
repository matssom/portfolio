<script>
    export let oposite = false, center = false, size = 'medium';
</script>

<p class:oposite class:center class="{size}">
    <slot />
</p>

<style>
    p {
        font-size: 1.8rem;
        line-height: 1.6em;
        color: var(--text-color-2);
    }

    .small {
        font-size: 1.5rem;
    }

    .medium {
        font-size: 1.6rem;
    }

    .large {
        font-size: 1.8rem;
    }

    .oposite {
        color: var(--text-color);
    }

    .center {
        text-align: center;
    }
</style>