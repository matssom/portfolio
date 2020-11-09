<script>
    import { onMount } from 'svelte';
    import Icon from "../Icon/Icon.svelte";
    import Input from "./Input.svelte";
    import Output from './Output.svelte';

    let expanded = false;
    let elements = [];
    let history = [];

    const toggleExpand = () => expanded = !expanded;
    const commands = {
        clear: () => elements = [],
        history: () => { 
            let str = '';
            for (let part of history) str = `${str}<br>${part}`;
            println(str);
        },
        help: () => {
            println('Commands you can use:', Output, false, "rgb(103, 255, 230)");
            let str = '';
            Object.keys(commands).forEach((key) => {
                str = `${str}<br>${key}`;
            });
            println(str);
        }
    }

    onMount(() => {
        init();
    });

    const init = () => {
        println('Welcomt to my CLI. Navigate to get information about me.');
        print('Type ')
        print('`help`', Output, false, "rgb(103, 255, 230)");
        print(' to get started.')
        println('', Input);
    }

    const print = (content = '', component = Output, editable = true, color = "#ffffff", inline = true) => {
        let props = {
            currentValue: content
        };
        if (component == Input) {
            props.focus = false;
            props.editable = editable;
        } else if (component == Output) {
            props.inline = inline;
            props.color = color;
        }
        
        elements = [...elements, {
            id: elements.length,
            component: component,
            content: content,
            focus: false,
            editable: editable,
            inline: inline,
            color: color,
            props: props
        }]
    }

    const println = (content, component, editable, color) => {
        print(content, component, editable, color, false);
    }

    const selectFocus = () => {
        let last = lastElement();
        elements.pop();
        last.focus = true;
        elements = [...elements, last];
    }

    const lastElement = () => elements[elements.length - 1];

    const execute = (command = '') => {
        let split = command.split(' ');
        try {
            commands[split[0]](split);
            history.push(command);
        } catch (e) {
            print('(⊙_☉)', Output, false, "rgb(103, 255, 230)")
            print(' - Error: Command not found');
        }
    }

    const handleKeydown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            let last = lastElement();
            elements.pop();
            println(last.content, Input, false);
            execute(last.content);
            println('', Input);
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
                bind:focus={element.focus}
                inline={element.inline}
                color={element.color} 
            />
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
        font-size: 1.4rem;
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
        height: calc(100% - 3rem);
        overflow-y: scroll;
        padding: 1rem;
    }

    .terminal > :global(*) {
        padding-bottom: 1.5rem;
    }
</style>