<script>

    import Stack from "../Layout/Stack.svelte";
    import Clickable from "./Clickable.svelte";
    import Card from '../Layout/Card.svelte';
    import { clickOutside } from '../../directives/clickOutside.js';

    export let  order = 'regular',
                text = '',
                id = 1,
                style = '',
                selected = false,
                notab = false,
                structure = [
                    [
                        {
                            id: 1,
                            text: 'dropdown element',
                            icon: 'expand',
                            type: 'route',
                            to: '/'
                        }
                    ]
                ]

    
    // DOM elements
    let clickable, card

    // Reactive
    let open, inFocus

    // Handlers
    const handleClick = (event) => {
        open = !open
        if (!open) inFocus = false
    }
    const handleClickOutside = () => open = false

</script>

<span class="clickable" bind:this={clickable} use:clickOutside on:click_outside={handleClickOutside}>
    <Clickable type="button" action={handleClick} icon="arrow-down" {inFocus} {order} {text} {id} {style} {selected} {notab}/>

    <div class="dropdown-card {open ? 'dropdown-open' : ''}" bind:this={card}>
        <div class="dropdown-space">
            <div class="dropdown-arrow"></div>
        </div>
        <Card padding size="small" shadow >
            <div class="container col-{structure.length}">
                {#each structure as col}
                    <ul class="col">
                        <Stack size="small">
                            {#each col as clickable (clickable.id)}
                                <li>
                                    <Clickable expand type="{clickable.type}" style="invisible" icon="{clickable.icon}" text="{clickable.text}" to="{clickable.to}"/>
                                </li>
                            {/each}
                        </Stack>
                    </ul>
                {/each}
            </div>
        </Card>
    </div>
</span>

<style>
    .container {
        display: grid;
        grid-template-columns: max-content;
        gap: 0 var(--gap-small);
    }

    .col-2 {
        grid-template-columns: max-content max-content;
    }

    .col-3 {
        grid-template-columns: max-content max-content max-content;
    }

    .col-4 {
        grid-template-columns: max-content max-content max-content max-content;
    }

    .col {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    .clickable {
        position: relative;
    }

    .dropdown-card {
        position: absolute;
        top: 4rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
        visibility: hidden;
        opacity: 0;
        transition: all .2s ease-out;
    }

    .dropdown-open  {
        visibility: visible;
        opacity: 1;
        z-index: 1000;
    }

    .dropdown-space {
        position: absolute;
        top: -1.3rem;
        height: 1.3rem;
        width: 100%;
    }

    .dropdown-arrow {
        position: absolute;
        width: 1.5rem;
        height: 1rem;
        top: .3rem;
        background-color: white;
        box-shadow: var(--box-shadow);
        left: 50%;
        transform: translateX(-50%);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
</style>