<script>
    import { Link } from 'svelte-routing';
    import Icon from '../Feature/Icon.svelte';
    import { onMount, onDestroy } from 'svelte';

    export let  action = '',                // Controls the action on click if type is button.
                to = '',                    // Controls where the link goes if type is 'route' or 'link'. For routes, start with a '/'. For links, provide relative or static path.
                type = 'link',              // Controls the clickable type: 'link', 'button', 'route'
                order = 'regular',          // Spesifiec what is displayed first, text or icon (if icon or text is present)
                icon = '',                  // Displays icon specified by title (uses Icon.svelte)
                text = '',                  // Text value in the button
                id = 1,                     // Id of the button in a list of buttons (not actually used by component)
                style = '',                 // 4 different styles: 'primary', 'secondary', 'invisible' and leave blank for default (link)
                external = false,           // Controls if links open in a new tab or not
                selected = false,           // Controls if element is selected or not
                notab = false,              // Controls if you are able to tab to element or not
                expand = false,             // Let clickable expand to fill remaining horizontal space
                inFocus = false             // Used to override focus


    // Options
    id = id;
    let target = external ? '_blank' : '';
    let rel = external ? 'noopener noreferrer' : '';
    let onlyIcon = text && icon ? '' : 'only-icon';
    
    // DOM elements
    let clickable

    // Reactive

    let hovered, currentPath
    $: currentlySelected = selected || inFocus || hovered || currentPath;
    $: select = currentlySelected ? 'selected' : '';

    // Handlers
    let handleFocus, handleBlur, handleHover, handleDehover

    onMount(() => { 
        clickable.addEventListener('focusin', function handleFocus() { inFocus = true })
        clickable.addEventListener('focusout', function handleBlur() { inFocus = false })
        clickable.addEventListener('mouseenter', function handleHover() { hovered = true })
        clickable.addEventListener('mouseleave', function handleDehover() { hovered = false })
    })

    onDestroy(() => {
        clickable.removeEventListener('focusin', handleFocus)
        clickable.removeEventListener('focusout', handleBlur)
        clickable.removeEventListener('mouseenter', handleHover)
        clickable.removeEventListener('mouseleave', handleDehover)
    })

    // Update current path
    const updatePath = ({ location }) => {
        currentPath = location.pathname === to;
    }

</script>

<span bind:this={clickable}>
    {#if type === 'button'}
    <button on:click={action} class="button clickable {style} {order} {onlyIcon} {select}" class:expand>
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
        <div class="route clickable {style} {order} {onlyIcon} {select}" class:expand>
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
        <a href={to} tabindex="{notab ? -1 : 0}" class="link clickable {style} {order} {onlyIcon} {select}" class:expand target="{target}" rel={rel}>
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

    .expand,
    .expand > :global(a) {
        width: 100%;
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

    .button.primary {
        background-color: var(--primary-color);
        color: var(--primary-button-text);
        border: none;
    }

    .button.invisible {
        background-color: transparent;
        border: none;
        padding: 1rem;
        color: var(--text-color-3);
    }
    

    /* Link || Route ============================================= */
    .link:link, .route > :global(a:link) {
        text-decoration: none;
        color: var(--link-color);
    }

    .link:visited, .route > :global(a:visited) {
        color: var(--link-color);
    }

    .link.secondary, .route.secondary > :global(a) {
        padding: 1rem 2rem;
        border-radius: var(--border-radius-button);
        background-color: var(--secondary-color);
        color: var(--link-color);
    }

    .link.primary, .route.primary > :global(a) {
        padding: 1rem 2rem;
        border-radius: var(--border-radius-button);
        background-color: var(--primary-color);
        color: var(--primary-button-text);
    }

    .link.invisible:link , .route.invisible > :global(a:link) {
        padding: 1rem;
        border-radius: var(--border-radius-button);
        color: var(--text-color-3);
    }

    .link.invisible:visited , .route.invisible > :global(a:visited) {
        color: var(--text-color-3);
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

    .clickable.link.selected:not(.invisible):not(.primary):not(.secondary) {
        outline: 2px solid gray;   
    }

    .clickable.selected.link:not(.invisible):not(.primary):not(.secondary):hover, 
    .clickable.selected.route:not(.invisible):not(.primary):not(.secondary) > :global(a:hover) {
        text-decoration: underline;
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

    .clickable.button:active {
        background-color: var(--secondary-color-3);
        color: var(--link-color-active);
    }

    .clickable.button.primary:active {
        background-color: var(--primary-color-3);
    }

    .clickable.button.invisible:active {
        background-color: var(--shade-2);
    }

    .clickable.link:active, .route > :global(a:active) {
        color: var(--link-color-3);
    }

    .clickable.link.secondary:active, .clickable.route.secondary > :global(a:active) {
        color: var(--link-color-active);
        background-color: var(--secondary-color-3);
    }

    .clickable.link.primary:active, .clickable.route.primary > :global(a:active) {
        background-color: var(--primary-color-3);
    }

    .clickable.link.invisible:active, .clickable.route.invisible > :global(a:active) {
        background-color: var(--shade-2);
    }

</style>