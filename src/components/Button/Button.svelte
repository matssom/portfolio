<script>
    export let  text = 'Confirm', 
                primary = false, 
                invisible = false;
</script>

<button class="button" class:primary class:invisible>
    {text}
    <slot />
</button>

<style>
    .button {
        border: 1px solid #eee;
        background-color: white;
        margin: 0;
        padding: 1rem 2rem;
        border-radius: .3rem;
        transition: all linear .1s;
    }

    .button:hover {
        transition: all linear .1s;
    }

    .primary {
        background-color: var(--primary-color);
        color: var(--text-color);
    }

    .primary:hover {
        background-color: var(--primary-color-2);
    }

    .invisible {
        background-color: transparent;
        border: none;
        padding: 1rem;
    }

    .invisible:hover {
        background-color: var(--back-hover);
    }
</style>