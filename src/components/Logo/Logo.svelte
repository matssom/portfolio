<script>
    import { Link } from 'svelte-routing';
    import logo from '../../assets/components/logo/config.js';
    import Icon from '../../assets/icons/logo.svelte'
</script>

<div class="logo">
    <Link to="/">
        <Icon />
        <h1 class="headline">{logo.headline}</h1>
    </Link>
</div>

<style>
    .logo > :global(a) {
        padding: 0 1rem;
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
</style>