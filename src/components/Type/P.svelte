<script>
    export let oposite = false, center = false;
</script>

<p class:oposite class:center>
    <slot />
</p>

<style>
    p {
        font-size: 1.8rem;
        line-height: 1.6em;
        color: var(--text-color-2);
    }

    .oposite {
        color: var(--text-color);
    }

    .center {
        text-align: center;
    }
</style>