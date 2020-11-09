<script>
    export let col = 3;

    let split = `split-${col}`;
</script>

<div class="split {split}">
    <slot />
</div>

<style>
    .split {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
        gap: var(--gap-huge) var(--gap-large);
        margin: 0 auto;
    }

    .split-3 {
        max-width: 110rem;
    }

    .split-2 {
        max-width: 90rem;
    }

    @media (max-width: 53.75em) {

    }

    @media (max-width: 73.438em) {

    }
</style>