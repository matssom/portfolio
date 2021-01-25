<script>
    import Icon from "./Icon.svelte";
    import { createEventDispatcher } from 'svelte'
    import { onMount } from 'svelte'

    const dispatch = createEventDispatcher()

    export let  icon = false,
                alt = "image",
                title = false,
                keywords = [],
                description = "",
                data = {},
                color = {
                    brand: '',
                    tag: '',
                    tagSelected: '',
                    text: ''
                },
                selected = false,
                disabled = false,
                plate = false

    let tag

    onMount(() => {
        if (color.tag) tag.style.backgroundColor = color.tag
        if (color.text) tag.style.color = color.text
    })

    const handleClick = () => dispatch('message', {
        title,
        icon,
        keywords,
        description,
        data,
        color,
        button: tag,
        select: () => selected = true,
        blur: () => selected = false
    })
    
</script>

{#if title}
<button on:click={handleClick} bind:this={tag} class:selected tabindex="{disabled ? '-1' : '0'}">
    <div class="icon-back" class:plate>
        {#if icon}
            <Icon name={icon} {alt} size="medium"/>
        {/if}
    </div>
    <p>{title}</p>
</button>
{/if}

<style>
    button {
        display: flex;
        border: none;
        gap: 1rem;
        align-items: center;
        padding: .5rem 1.5rem .5rem .6rem;
        border-radius: 2rem;
        color: var(--text-color-3);
        background-color: var(--tag-color);
        font-weight: 700;
        transition: .2s all ease-out;
        border: 1px solid var(--tag-color);
    }

    button:focus {
        outline: none;
        border: 1px solid red;
    }

    .selected {
        background-color: var(--expert-color-strong);
        color: white;
    }

    .icon-back {
        background-color: transparent;
        border-radius: 2rem;
        height: 2.2rem;
        widows: 2.2rem;
        overflow: hidden;
        position: relative;
    }

    .selected > .plate {
        background-color: white;
    }
</style>