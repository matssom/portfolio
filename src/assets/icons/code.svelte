<script>
    export let size = 'small'
</script>

<symbol id="code" viewBox="0 0 24 24">
    <path d="M16.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM7.293 5.293l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path>
</symbol>

<svg class="icon {size}"><use xlink:href="#code"></use></svg>

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