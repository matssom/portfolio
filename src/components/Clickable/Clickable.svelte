<script>
    import { Link } from 'svelte-routing';
    import Icon from '../Icon/Icon.svelte';

    export let  action = '',
                to = '',
                type = 'link',
                order = 'regular',
                icon = '',
                text = '',
                id = 1,
                external = false,
                style = '';

    let target = external ? '_blank' : '';
    let rel = external ? 'noopener noreferrer' : '';
    id = id;
    let onlyIcon = text ? '' : 'only-icon';
</script>

{#if type === 'button'}
    <button on:click={action} class="button clickable {style} {order} {onlyIcon}">
        {#if icon !== '' && order == 'regular'}
            <Icon name={icon}/>
        {/if}
        {#if text}
            <div>{text}</div>
        {/if}
        {#if icon !== '' && order == 'reverse'}
            <Icon name={icon}/>
        {/if}
    </button>
{:else if type === 'route'}
    <div class="route clickable {style} {order} {onlyIcon}">
        <Link to={to}>
            {#if icon !== '' && order == 'regular'}
                <Icon name={icon}/>
            {/if}
            {#if text}
                <div>{text}</div>
            {/if}
            {#if icon !== '' && order == 'reverse'}
                <Icon name={icon}/>
            {/if}
        </Link>
    </div>
{:else}
    <a href={to} class="link clickable {style} {order} {onlyIcon}" target="{target}" rel={rel}>
        {#if icon !== '' && order == 'regular'}
            <Icon name={icon}/>
        {/if}
        {#if text}
            <div>{text}</div>
        {/if}
        {#if icon !== '' && order === 'reverse'}
            <Icon name={icon}/>
        {/if}
    </a>
{/if}

<style>

    /* Clickable ============================================= */
    .clickable, .clickable:hover, .clickable > :global(a) {
        transition: all linear .1s;
        display: flex;
        flex-direction: row;
        gap: var(--gap-small);
        align-items: flex-end;
        height: 3.95rem;
    }

    .link.clickable {
        height: initial;
    }

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
        /* display: inline-block; */
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

    .link.secondary, .route.secondary > :global(a) {
        padding: 1rem 2rem;
        border-radius: var(--border-radius-button);
        background-color: var(--secondary-color);
        color: var(--link-color);
    }

    .link.secondary:hover, .route.secondary > :global(a:hover) {
        background-color: var(--secondary-color-2);
        color: var(--link-color-hover);
        text-decoration: none;
    }

    .link.secondary:active, .route.secondary > :global(a:active) {
        color: var(--link-color-active);
        background-color: var(--secondary-color-3);
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
        color: var(--text-color-3);
    }

    .link.invisible:visited , .route.invisible > :global(a:visited) {
        color: var(--text-color-3);
    }

    .link.invisible:hover, .route.invisible > :global(a:hover) {
        background-color: var(--shade);
        text-decoration: none;
        color: var(--link-color);
    }

    .link.invisible:active, .route.invisible > :global(a:active) {
        background-color: var(--shade-2);
    }

    /* Handeling icons */
    .clickable.regular.link, .clickable.regular.button, .clickable.regular > :global(a) {
        padding-left: 1.5rem;
    }

    .clickable.reverse.link, .clickable.regular.button, .clickable.reverse > :global(a) {
        padding-right: 1.5rem;
    }

    .clickable.regular.link.only-icon, .clickable.regular.button.only-icon, .clickable.reverse.only-icon > :global(a) {
        padding-left: 1rem;
    }

    .clickable.reverse.link.only-icon, .clickable.reverse.button.only-icon, .clickable.reverse.only-icon > :global(a) {
        padding-right: 1rem;
    }

    .clickable > :global(svg), .clickable > :global(a) > :global(svg) {
        display: inline-block;
        width: 1.2em;
        height: 1.2em;
        stroke-width: 0;
        stroke: var(--text-color-2);
        fill: var(--icon-color-2);
    }

    .clickable.invisible:hover > :global(svg), .clickable.invisible:hover > :global(a) > :global(svg) {
        fill: var(--link-color);
    }

    .clickable.only-icon:hover > :global(svg), .clickable.only-icon:hover > :global(a) > :global(svg) {
        fill: var(--text-color-3);
    }

    .clickable.primary > :global(svg), .clickable.primary > :global(a) > :global(svg) {
        fill: var(--icon-color);
        width: 1.1em;
        height: 1.1em;
    }
</style>