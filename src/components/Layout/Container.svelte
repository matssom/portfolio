<script>
    export let padding = false, size = 'medium', vertical = false, horizontal = false, narrow = false, center = false;
</script>

<div class="container {size}" class:narrow class:padding class:vertical class:horizontal class:center>
    <slot/>
</div>

<style>
    .container {
        width: 100%;
        max-width: 115rem;
        margin: 0 auto;
    }

    .container.narrow {
        max-width: 90rem;
    }

    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .padding.small {
        padding: var(--gap-small);
    }

    .padding.medium {
        padding: var(--gap-medium);
    }

    .padding.large {
        padding: var(--gap-large);
    }

    .padding.huge {
        padding: var(--gap-huge);
    }

    @media (max-width: 37.5em) {
        .padding.medium {
            padding: var(--gap-small);
        }

        .padding.large {
            padding: var(--gap-medium);
        }

        .padding.huge {
            padding: var(--gap-large);
        }
    }

    .padding.vertical {
        padding-left: 0;
        padding-right: 0;
    }

    .padding.horizontal {
        padding-top: 0;
        padding-bottom: 0;
    }
</style>
