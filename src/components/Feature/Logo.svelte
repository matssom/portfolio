<script>
    export let oposite = false, light = false;
    import { Link } from 'svelte-routing';
    import logo from '../../assets/components/logo/config.js';
    import Icon from '../../assets/icons/logo.svelte'

    export let text = true;

    let iconStyle = oposite ? 'flat' : '';
</script>

<div class="logo" class:oposite>
    <Link to="/">
        <Icon style="{iconStyle}" />
        {#if text}
            <h1 class="headline" class:light>{logo.headline}</h1>
        {/if}
    </Link>
</div>

<style>
    .logo > :global(a) {
        display: flex;
        align-items: center;
        gap: var(--gap-small);
        text-decoration: none;
        transition: var(--transition);
    }

    .logo > :global(a:link) {
        color: var(--text-color-3);
    }

    .logo > :global(a:visited) {
        color: var(--text-color-3);
    }

    .logo:hover > :global(a) {
        color: var(--text-color-3);
    }

    .logo > :global(a) > :global(svg) {
        /* fill: ; */
        height: 2.5em;
        width: 2.5em;
        transition: var(--transition);
    }

    .logo > :global(a:hover) > :global(svg) {
        transition: var(--transition);
        fill: var(--text-color-3);
    }

    .headline {
        font-size: 2rem;
        font-weight: bold;
    }

    .logo.oposite .headline  {
        color: var(--text-color);
    }

    .logo.oposite > :global(a) > :global(svg) {
        fill: var(--back-color);
    }

    .light {
        font-weight: 400;
    }
</style>