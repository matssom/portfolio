<script>
    export let center = false, oposite = false;
</script>

<h1 class:center class:oposite>
    <slot />
</h1>

<style>
    h1 {
        font-size: 3.8rem;
        letter-spacing: .02em;
        color: var(--primary-color-3);
    }

    .center {
        text-align: center;
    }

    .oposite {
        color: var(--text-color-0);
    }
</style>