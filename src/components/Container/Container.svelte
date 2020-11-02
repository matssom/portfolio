<script>
    export let padding = false;
</script>

<div class="container" class:padding>
    <slot/>
</div>

<style>
    .container {
        max-width: 100rem;
        margin: 0 auto;
    }

    .padding {
        padding: 1.4rem;
    }
</style>
