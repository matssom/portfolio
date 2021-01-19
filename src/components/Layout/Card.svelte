<script>
    export let  shadow = false,
                border = false,
                padding = false,
                focus = false,
                size = 'medium',
                background = ''
</script>

<div class="card {background} {size}" class:focus class:shadow class:border class:padding>
    <slot />
</div>

<style>
    .card {
        border-radius: .5rem;
        background-color: var(--card-color);
        transition: all .2s ease-out;
    }

    .shadow {
        box-shadow: var(--box-shadow);
        background-color: var(--card-color-2);
    }

    .border {
        border: 1px solid var(--border-color);
    }

    .padding {
        padding: 1.4rem;
    }

    .small {
        padding: .8rem;
    }

    .back-color-2 {
        background-color: var(--back-color-2);
    }

    .back-color-3 {
        background-color: var(--back-color-3);
    }

    .back-color-4 {
        background-color: var(--back-color-4);
    }

    .back-color-5 {
        background: var(--back-color-5);
    }

    .focus {
        background-color: var(--proficient-color);
    }
</style>