<script>
    import { onMount } from 'svelte';
    import Icon from "../Icon/Icon.svelte";
    import Input from "./Input.svelte";
    import Output from './Output.svelte';

    let expanded = false;
    let elements = [];

    const toggleExpand = () => expanded = !expanded;

    onMount(() => {
        init();
    });

    const init = () => {
        print('', Input);
    }

    const print = (content = '', component = Output, editable = true) => {
        elements = [...elements, {
            id: elements.length,
            component: component,
            content: content,
            focus: false,
            editable: editable
        }]
    }

    const selectFocus = () => {
        let last = lastElement();
        elements.pop();
        last.focus = true;
        elements = [...elements, last];
    }

    const lastElement = () => elements[elements.length - 1];

    const handleKeydown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            let last = lastElement();
            elements.pop();
            print(last.content, Input, false);
            print('Hello world');
            print('', Input);
            selectFocus();
        }
    }

</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="cli" class:expanded>
    <div class="header">
        <div class="control">
            <button class="size" on:click={toggleExpand}>
                <Icon name="maximize"/>
            </button>
        </div>
        <p>matssom - cli</p>
    </div>
    <div class="terminal" on:click={selectFocus}>
        {#each elements as element (element.id)}
            <svelte:component 
                this={element.component} 
                bind:currentValue={element.content} 
                editable={element.editable} 
                bind:focus={element.focus}>
            </svelte:component>
        {/each}
    </div>
</div>

<span class:expanded></span>

<style>
    .cli {
        background-color: var(--cli);
        border-radius: var(--border-radius-card);
        width: 70rem;
        height: 45rem;
        overflow: hidden;
        box-shadow: var(--box-shadow-2);
        transition: all .5s ease-in-out;
        font-family: 'Consolas';
    }

    div.expanded {
        position: fixed;
        margin-top: -14rem;
        width: calc(100vw - 4rem);
        height: calc(100vh - 4rem);
        z-index: 10;
    }

    span.expanded {
        height: 45rem;
        width: 70rem;
    }

    .header {
        height: 3rem;
        background-color: var(--cli-bar);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #818181;
        position: relative;
        font-size: 1.4rem;
    }

    .control {
        list-style: none;
        margin: 0;
        padding: 0;
        position: absolute;
        top: 0;
        right: 0;
    }

    .size {
        transition: var(--transition);
        background-color: transparent;
        height: 3rem;
        width: 3.5rem;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .size:hover {
        background-color: var(--shade);
    }

    .terminal {
        height: 100%;
        padding: 1rem;
    }
</style>