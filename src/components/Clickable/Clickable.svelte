<script>
    import { Link } from 'svelte-routing';
    export let  action = '',
                to = '',
                type = 'link', // link/button/route
                // icon = '',
                // external = false,
                style = ''; //primary, secondary, invisible
</script>

{#if type === 'button'}
    <button on:click={action} class="button transition {style}">
        <slot />
    </button>
{:else if type === 'route'}
    <div class="route transition {style}" >
        <Link to={to}>
            <slot />
        </Link>
    </div>
{:else}
    <a href={to} class="link transition {style}">
        <slot />
    </a>
{/if}

<style>

    /* Button ============================================= */
    .button {
        border: 1px solid #eee;
        background-color: var(--secondary-color);
        margin: 0;
        padding: 1rem 2rem;
        border-radius: var(--border-radius-button);
        color: var(--link-color);
    }

    .button:hover {
        background-color: var(--secondary-color-2);
        color: var(--link-color-hover);
    }

    .button:active {
        background-color: var(--secondary-color-3);
        color: var(--link-color-active);
    }

    .transition, .transition:hover {
        transition: all linear .1s;
    }

    .button.primary {
        background-color: var(--primary-color);
        color: var(--text-color);
        border: none;
    }

    .button.primary:hover {
        background-color: var(--primary-color-2);
    }

    .button.primary:active {
        background-color: var(--primary-color-3);
    }

    .button.invisible {
        background-color: transparent;
        border: none;
        padding: 1rem;
    }

    .button.invisible:hover {
        background-color: var(--shade);
    }

    .button.invisible:active {
        background-color: var(--shade-2);
    }

    /* Link || Route ============================================= */
    .link:link, .route > :global(a:link) {
        display: inline-block;
        text-decoration: none;
        color: var(--link-color);
    }

    .link:visited, .route > :global(a:visited) {
        color: var(--link-color);
    }

    .link:hover, .route > :global(a:hover) {
        text-decoration: underline;
    }

    .link:active, .route > :global(a:active) {
        color: var(--link-color-3);
    }

    .link.primary, .route.primary > :global(a) {
        padding: 1rem 2rem;
        border-radius: var(--border-radius-button);
        background-color: var(--primary-color);
        color: var(--text-color);
    }

    .link.primary:hover, .route.primary > :global(a:hover) {
        background-color: var(--primary-color-2);
        text-decoration: none;
    }

    .link.primary:active, .route.primary > :global(a:active) {
        background-color: var(--primary-color-3);
    }

    .link.invisible:link , .route.invisible > :global(a:link) {
        padding: 1rem;
        border-radius: var(--border-radius-button);
    }

    .link.invisible:hover, .route.invisible > :global(a:hover) {
        background-color: var(--shade);
        text-decoration: none;
    }

    .link.invisible:active, .route.invisible > :global(a:active) {
        background-color: var(--shade-2);
    }
</style>