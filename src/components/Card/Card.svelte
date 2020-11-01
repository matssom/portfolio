<script>
    export let  shadow = false,
                border = false,
                padding = false;
</script>

<div class="card" class:shadow class:border class:padding>
    <slot />
</div>

<style>
    .card {
        border-radius: .5rem;
        background-color: var(--back-color);
    }

    .shadow {
        box-shadow: var(--box-shadow);
        background-color: transparent;
    }

    .border {
        border: 1px solid var(--border-color);
    }

    .padding {
        padding: 1.4rem;
    }
</style>