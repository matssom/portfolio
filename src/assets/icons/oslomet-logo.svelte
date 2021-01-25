<script>
    export let size = 'small'
</script>

<symbol id="oslomet-logo" viewBox="0 0 800 800">
    <path fill="#ffd500" d="M114.423 5.455H685.58V576.61H114.423z"/>
    <path d="M400 138.187l231.41 231.41-74.28 74.279L400 286.746l-157.13 157.13-74.28-74.279L400 138.187z"/>
</symbol>

<svg class="icon {size}"><use xlink:href="#oslomet-logo"></use></svg>

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