<script>
    export let small = false, center = false
</script>

<h2 class:small class:center>
    <slot />
</h2>

<style>
    h2 {
        font-size: 2rem;
        font-weight: 400;
        line-height: 2.6rem;
        letter-spacing: .02em;
        color: var(--text-color-2);
    }

    .small {
        font-size: 1.5rem;
    }

    .center {
        text-align: center;
    }
</style>