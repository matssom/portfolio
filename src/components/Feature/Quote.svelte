<script>
    import Icon from './Icon.svelte';
    import Stack from '../Layout/Stack.svelte';

    import P from '../Type/P.svelte';
</script>

<div class="quote">
    <div class="image">
        <slot name="image">
            <img alt="profile" src="./assets/quote/profile.jpg"/>
        </slot>
        <div class="icon-holder">
            <Icon name="quote" />
        </div>
    </div>
    <Stack>
        <slot name="quote">
            <h4>This is an empty quote with no meaning yet.</h4>
        </slot>
        <slot name="author">
            <P>Unknown author</P>
        </slot>
    </Stack>
</div>

<style>
    .quote {
        display: grid;
        grid-template-columns: 15rem minmax(25rem, 1fr);
        gap: var(--gap-medium) var(--gap-large);
        align-items: center;
        max-width: 52.5rem;
    }

    .quote :global(*) {
        font-size: 2rem;
        font-weight: 400;
        color: var(--text-color-3);
    }

    .quote :global(p) {
        font-size: 1.6rem;
        color: var(--text-color-2);
    }

    .image {
        position: relative;
    }

    .icon-holder {
        background-color: var(--back-color-4);
        box-shadow: var(--box-shadow);
        position: absolute;
        bottom: -1rem;
        right: -1rem;
        border-radius: var(--border-radius-card);
        padding: .7rem 1.3rem .1rem 1.3rem;
    }

    .icon-holder > :global(svg) {
        height: 2.8rem;
        width: 2.8rem;
        fill: var(--back-color-2);
    }

    .image :global(img) {
        border-radius: var(--border-radius-card);
    }

    @media (max-width: 62.5em) {
        .icon-holder {
            padding: .6rem 1rem 0 1rem;
        }

        .icon-holder > :global(svg) {
            width: 2rem;
            height: 2rem;
        }
    }

    @media (max-width: 31.25em) {
        .quote {
            grid-template-columns: 35rem;
            text-align: center;
        }

        .quote :global(img) {
            border-radius: 50%;
            width: 12rem;
            margin: 0 auto;
        }

        .icon-holder {
            position: static;
            background-color: transparent;
            box-shadow: none;
            padding: 2rem 1rem 0 1rem;
        }

        .icon-holder > :global(svg) {
            width: 2rem;
            height: 2rem;
            fill: var(--text-color-2);
        }
    }

</style>