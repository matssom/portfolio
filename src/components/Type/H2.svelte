<script>
    import Icon from '../Feature/Icon.svelte';

    export let center = false, oposite = false, icon = '';
</script>

<div class:center class="{icon ? 'show-icon' : ''}">
    {#if icon}
        <span class="icon-holder">
            <Icon name="{icon}"/>
        </span>
    {/if}
    <h2 class:oposite>
        <slot />
    </h2>
</div>

<style>
    h2 {
        font-size: 2.8rem;
        letter-spacing: .02em;
        color: var(--primary-heading-color);
    }

    .center {
        text-align: center;
    }

    .oposite {
        color: var(--text-color-0);
    }

    .show-icon {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: min-content max-content;
    }

    .show-icon.center {
        display: block;
    }

    .icon-holder > :global(svg.icon) {
        width: 4rem;
        height: 4rem;
    }
</style>