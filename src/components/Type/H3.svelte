<script>
    export let center = false, oposite = false;
</script>

<h3 class:center class:oposite>
    <slot />
</h3>

<style>
    h3 {
        font-size: 2.3rem;
        letter-spacing: .02em;
        font-family: 'Overpass';
        color: var(--text-color-3);
    }

    .center {
        text-align: center;
    }

    .oposite {
        color: var(--text-color-0);
    }
</style>