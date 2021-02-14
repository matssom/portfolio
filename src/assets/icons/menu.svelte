<script>
    export let size = 'small'
</script>

<symbol id="menu" viewBox="0 0 24 24">
    <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
</symbol>

<svg class="icon {size}"><use xlink:href="#menu"></use></svg>

<style>
    .icon {
        display: inline-block;
        width: 1.1em;
        height: 1.1em;
        stroke-width: 0;
        stroke: var(--text-color-2);
        fill: var(--text-color-2);
    }

    .medium {
        height: 2.2rem;
        width: 2.2rem;
    }

    .large {
        height: 4rem;
        width: 4rem;
    }
</style>