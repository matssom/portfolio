<script>
    export let col = 3, free = false, noheading = false;

    let split = `split-${col}`;
</script>

<div class="split {split}" class:free class:noheading>
    <slot />
</div>

<style>
    .split {
        display: grid;
        gap: var(--gap-huge) var(--gap-large);
        margin: 0 auto;
        justify-content: center;
    }

    .noheading {
        gap: var(--gap-medium) var(--gap-large);
    }

    .split-3 {
        max-width: 110rem;
    }

    .split-2 {
        max-width: 90rem;
        grid-template-columns: 1fr;
    }

    @media (min-width: 53.75em) {
        .split-3 {
            grid-template-columns: repeat(2, 40rem);
        }

        .split-2 {
            grid-template-columns: repeat(2, 40rem);
        }
        
        .free {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (min-width: 73.438em) {
        .split-3 {
            grid-template-columns: repeat(3, 35rem);
        }

        .split-3.free {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>