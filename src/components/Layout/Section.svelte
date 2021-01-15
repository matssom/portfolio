<script>
    import { onMount } from 'svelte';

    export let divider = '', background = '', size='';

</script>

<section class="{divider} {size} {background}">
    <slot />
</section>

<style>
    section {
        padding: var(--gap-huge) 0;
        background-color: var(--back-color);
    }

    .back-color-2 {
        background: var(--back-color-2);
    }

    .back-color-3 {
        background: var(--back-color-3);
    }

    .back-color-4 {
        background: var(--back-color-4);
    }

    .back-color-5 {
        background: var(--back-color-5);
    }

    .tiny {
        padding: 2rem 0;
    }

    .small {
        padding: var(--gap-large) 0;
    }

    .large {
        padding: calc(var(--gap-huge) * 2) 0;
    }

    .both {
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
    }

    .top {
        border-top: 1px solid var(--border-color);
    }

    .bottom {
        border-bottom: 1px solid var(--border-color);
    }
</style>