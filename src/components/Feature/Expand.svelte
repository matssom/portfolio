<script>
    import Icon from "./Icon.svelte";
    import Card from '../Layout/Card.svelte';
    import Container from '../Layout/Container.svelte';
    import Stack from "../Layout/Stack.svelte";
    import { onMount, onDestroy } from 'svelte'
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let  title = 'expand', 
                image = '#', 
                alt = 'image'

    //DOM elements
    let expand, base, area, hidden

    // Reactive
    let expanded = false
    let focus = false
    let height

    onMount(() => {
        expand.style.height = "40px"
    })

    const handleResize = () => {
        if (expanded) {
            expand.style.height = `${height}px`
        }
    }

    const doExpand = () => {
        focus = true
        expand.style.height = `${height}px`
        expand.setAttribute('area-hidden', "false")
        setTimeout(() => expanded = true, 200)
    } 

    const doClose = () => {
        focus = false
        expand.style.height = `${base}px`
        expand.setAttribute('area-hidden', "true")
        setTimeout(() => expanded = false, 200)
    }

    const unfocus = (event) => {
        dispatch('click', {
			text: 'Hello!'
		});

        let origin = { x: event.clientX, y: event.clientY }
        let moved = false
        const dragDistanceThreshhold = 20

        const drag = (event) => {
            if (Math.sqrt(Math.pow(origin.y - event.clientY, 2) + Math.pow(origin.x - event.clientX, 2)) > dragDistanceThreshhold) {
                moved = true
            }
        }

        window.addEventListener('mousemove', drag)

        const up = () => {
            window.removeEventListener('mousemove', drag)
            window.removeEventListener('mouseup', up)
            if (moved !== true) {
                if (expanded) {
                    area.blur()
                }
            }
        }

        window.addEventListener('mouseup', up)
    }

</script>

<svelte:window on:resize={handleResize}/>

<div class="hover-area" on:mousedown={unfocus} tabindex="0" bind:this={area}>
    <Card padding focus={focus}>
        <article class="expand" bind:this={expand}>
            <div bind:clientHeight={height}>
                <Container padding horizontal size="small">
                    <Stack>
                        <div class="base" bind:clientHeight={base}>
                            <img class="image" src="{image}" alt="{alt}">
                            <h3 class="title">{title}</h3>
                            <div class="toggle">
                                <Icon name="expand"/>
                            </div>
                        </div>
                        <div area-hidden="true" bind:this={hidden}>
                            <slot />
                        </div>
                    </Stack>
                </Container>
            </div>
        </article>
    </Card>
</div>

<style>

    .base {
        position: relative;
        display: flex;
        align-items: center;
        gap: 2rem;

    }

    .image {
        height: 4rem;
        width: 4rem;
    }

    .title {
        letter-spacing: .02em;
        color: var(--primary-heading-color);
        transition: all .2s ease-out;
    }

    .toggle {
        position: absolute;
        top: 50%;
        transform: translateY(-45%);
        right: 0;
        transition: all .1s ease-out;
    }

    .toggle > :global(svg.icon) {
        transition: all .2s ease-out;
        fill: transparent;
    }

    .expand {
        transition: all .2s ease-out;
        overflow: hidden;
    }

    .hover-area:hover .expand {
        cursor: pointer;
    }

    .hover-area:hover .title {
        margin-right: 4rem;
    }

    .hover-area:hover .toggle > :global(svg.icon) {
        fill: var(--icon-color-2);
    }

    .hover-area:focus {
        outline: none;
    }

    .hover-area:focus .toggle > :global(svg.icon) {
        fill: var(--icon-color-2);
    }


</style>