<script>
    import { Link } from 'svelte-routing';
    import Icon from '../Feature/Icon.svelte';
    import Card from '../Layout/Card.svelte';
    import Stack from '../Layout/Stack.svelte';
    import { onMount, onDestroy } from 'svelte';

    export let  action = '',
                to = '',
                type = 'link',
                order = 'regular',
                icon = '',
                text = '',
                id = 1,
                external = false,
                style = '',
                selected = false,
                notab = false,
                dropdown = false

    id = id;
    let element
    let target = external ? '_blank' : '';
    let rel = external ? 'noopener noreferrer' : '';
    let onlyIcon = text && icon ? '' : 'only-icon';
    let dropdownOpen, dropdownCard
    
    $: currentlyOpen = dropdownOpen
    $: currentlySelected = selected || dropdownOpen;
    $: currentPath = false;
    $: select = currentlySelected || currentPath ? 'selected' : '';

    const addSelect = () => selected = true
    const removeSelect = () => {
        selected = false
        dropdownOpen = false
    }
    const handleKeydown = (event) => {
        if (event.keyCode === 40) {
            if (!dropdownOpen) {
                event.preventDefault()
                dropdownOpen = true
            }
        }
        else if (event.keyCode === 38) {
            if (dropdownOpen) {
                event.preventDefault()
                dropdownOpen = false
            }
        }
    }

    const handleHover = () => {
        dropdownOpen = true
    }

    const handleDehover = () => {
        dropdownOpen = false
    }

    onMount(() => {
        element.addEventListener('focusin', addSelect)
        element.addEventListener('focusout', removeSelect)
        element.addEventListener('keydown', handleKeydown)
        element.addEventListener('mouseover', handleHover)
        element.addEventListener('mouseout', handleDehover)
    })

    onDestroy(() => {
        element.removeEventListener('keydown', handleKeydown)
        element.removeEventListener('focusout', removeSelect)
        element.removeEventListener('focusin', addSelect)
        element.removeEventListener('mouseover', handleHover)
        element.removeEventListener('mouseout', handleDehover)
    })

    const updatePath = ({ location }) => {
        currentPath = location.pathname === to;
    }

</script>

<span class="element" bind:this={element}>
{#if type === 'button'}
    <button on:click={action} class="button clickable {style} {order} {onlyIcon} {select}">
        {#if icon !== '' && order == 'regular'}
            <Icon name={icon}/>
        {/if}
        {#if text}
            <p>{text}</p>
        {/if}
        {#if icon !== '' && order == 'reverse'}
            <Icon name={icon}/>
        {/if}
    </button>
{:else if type === 'route'}
    <div class="route clickable {style} {order} {onlyIcon} {select}">
        <Link to={to} getProps={updatePath}>
            {#if icon !== '' && order == 'regular'}
                <Icon name={icon}/>
            {/if}
            {#if text}
                <p>{text}</p>
            {/if}
            {#if icon !== '' && order == 'reverse'}
                <Icon name={icon}/>
            {/if}
        </Link>
    </div>
{:else}
    <a href={to} tabindex="{notab ? -1 : 0}" class="link clickable {style} {order} {onlyIcon} {select}" target="{target}" rel={rel}>
        {#if icon !== '' && order == 'regular'}
            <Icon name={icon}/>
        {/if}
        {#if text}
            <p>{text}</p>
        {/if}
        {#if icon !== '' && order === 'reverse'}
            <Icon name={icon}/>
        {/if}
    </a>
{/if}
{#if dropdown}
    <div class="dropdown-card {currentlyOpen ? 'dropdown-open' : ''}" bind:this={dropdownCard}>
        <Card padding size="small" shadow >
            <slot />
        </Card>
    </div>
{/if}
</span>

<style>

    /* Clickable ============================================= */
    .clickable, .clickable:hover, .clickable > :global(a) {
        transition: all linear .1s;
        display: inline-flex;
        flex-direction: row;
        gap: var(--gap-small);
        align-items: center;
        height: 3.95rem;
        font-size: 1.6rem;
    }

    .link.clickable {
        height: initial;
        font-size: inherit;
        gap: .5rem;
    }

    /* Button ============================================= */
    .button {
        border: 1px solid var(--border-color);
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
        color: var(--primary-button-text);
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
        color: var(--text-color-3);
    }

    .button.invisible:hover {
        color: var(--link-color);
        background-color: var(--shade);
    }

    .button.invisible:active {
        background-color: var(--shade-2);
    }

    /* Link || Route ============================================= */
    .link:link, .route > :global(a:link) {
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
        color: var(--primary-button-text);
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

    .clickable.regular:not(.only-icon) > :global(svg), .clickable.regular:not(.only-icon) > :global(a) > :global(svg) {
        margin-left: -.5rem;
    }

    .clickable.reverse:not(.only-icon) > :global(svg), .clickable.reverse:not(.only-icon) > :global(a) > :global(svg) {
        margin-right: -.5rem;
    }

    .clickable.regular.invisible > :global(svg), .clickable.regular.invisible > :global(a) > :global(svg) {
        margin-left: 0;
    }

    .clickable.reverse.invisible > :global(svg), .clickable.reverse.invisible > :global(a) > :global(svg) {
        margin-right: 0;
    }

    .clickable > :global(svg), .clickable > :global(a) > :global(svg) {
        display: inline-block;
        width: 1.2em;
        height: 1.2em;
        stroke-width: 0;
        stroke: var(--text-color-2);
        fill: var(--icon-color-2);
    }

    .clickable.link:not(.invisible):not(.primary):not(.secondary) > :global(svg) {
        width: 1.1em;
        height: 1.1em;
        margin: .2rem;
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

    .clickable.button.selected {
        background-color: var(--secondary-color-2);
        outline: none;
    }

    .clickable.link.selected,
    .clickable.route.selected > :global(a) 
    {
        color: var(--link-color-2);
        outline: none;
    }

    .clickable.link.secondary.selected,
    .clickable.route.secondary.selected > :global(a) 
    {
        background-color: var(--secondary-color-2);
    }

    .clickable.link.invisible.selected,
    .clickable.button.invisible.selected,
    .clickable.route.invisible.selected > :global(a) 
    {
        background-color: var(--shade);
        color: var(--link-color);
    }

    .clickable.link.invisible.selected > :global(svg),
    .clickable.button.invisible.selected > :global(svg),
    .clickable.route.invisible.selected > :global(a) > :global(svg) 
    {
        fill: var(--link-color);
    }

    .clickable.link.primary.selected,
    .clickable.button.primary.selected,
    .clickable.route.primary.selected > :global(a) 
    {
        background-color: var(--primary-color-2);
        color: var(--primary-button-text);
    }

    .element {
        position: relative;
    }

    .dropdown-card {
        position: absolute;
        top: 4rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        visibility: hidden;
        opacity: 0;
        transition: all .2s ease-out;
    }

    /* .element:hover > .dropdown-card, */
    .dropdown-open  {
        visibility: visible;
        opacity: 1;
    }

</style>