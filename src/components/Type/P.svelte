<script>
    export let oposite = false, center = false, size = 'medium', placeholder = false

    $: lines = placeholder

</script>

{#if placeholder === false}
    <p class:oposite class:center class="{size}">
        <slot />
    </p>
{:else}
    {#each Array(lines) as _, i}
        <div class="placeholder-line"></div>
    {/each}
{/if}

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

    .placeholder-line {
        background-color: var(--back-color-2);
        min-width: 35rem;
        width: 100%;
        height: 1.8rem;
        border-radius: var(--border-radius-button);
    }
</style>