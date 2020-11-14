<script>
    import { onMount, onDestroy } from 'svelte';
    import Icon from "../Feature/Icon.svelte";
    import Input from "./Input.svelte";
    import Output from './Output.svelte';

    import { path, fs, dir, history, elements } from '../../store/cli.js';

    let expanded = false;
    
    const getComponent = (type) => { return type === 'input' ? Input : Output; }
    const toggleExpand = () => expanded = !expanded;
    
    const commands = {
        clear: (commands, next) => { $elements = []; next() },
        start: () => { $elements = []; $path = ['root']; $history = []; init(); selectFocus(); },
        history: (commands, next) => { 
            let str = '';
            for (let part of $history) str = `${str}<br>${part}`;
            println(str);
            next();
        },
        help: (cmds, next) => {
            println('Commands you can use:', 'output', false, "rgb(103, 255, 230)");
            let str = '';
            Object.keys(commands).forEach((key) => {
                str = `${str}<br>${key}`;
            });
            println(str);
            next();
        },
        cd: (commands, next) => {
            if (commands.length === 2) {
                let paths = commands[1].split('/').filter(p => p !== '');
                let oldPath = $path;
                for (let p of paths) {
                    let next = nextDir(p);
                    if (next) {
                        $path = next;
                    } else if (p === '..') {
                        if ($path.length > 1) $path = $path.slice(0, -1);
                    } else if (p === '~') {
                        $path = ['root'];
                        break;
                    } else {
                        print(`Error: `, 'output', false, '#ff772e');
                        print(`\`${commands[1]}\``, 'output', false, 'rgb(103, 255, 230)');
                        print(` is not a valid path`, 'output', false, '#ff772e');
                        $path = oldPath;
                        break;
                    }
                }
            } else {
                print('Current path: ', 'output', false, 'rgb(103, 255, 230)');
                print($path.toString().replaceAll(',','/'));
            }
            next();
        },
        ls: (commands, next) => {
            if ($dir.dir) {
                Object.keys($dir.dir).forEach(key => {
                    print(`${key}    `, 'output', false, "rgb(103, 255, 230)");
                } );
            }
            if ($dir.file) {
                for(let file of $dir.file) {
                    print(`${file}    `);
                }
            }
            next();
        }
    }

    const nextDir = (nextDir) => {
        if ($dir.dir && $dir.dir[nextDir]) {
            return [...$path, nextDir];
        }
        return false;
    }

    onMount(() => {
        if ($elements.length <= 1) {
            $elements = [];
            init();
        }
    });

    const init = () => {
        println('Welcome to my CLI. Navigate to get information about me.');
        print('Type ')
        print('`help`', 'output', false, "rgb(103, 255, 230)");
        print(' to get started.')
        println('', 'input');
    }

    const print = (content = '', component = 'output', editable = true, color = "#ffffff", inline = true) => {
        let props = {
            currentValue: content
        };
        if (component === 'input') {
            props.focus = false;
            props.editable = editable;
        } else if (component === 'output') {
            props.inline = inline;
            props.color = color;
        }
        
        $elements = [...$elements, {
            id: $elements.length,
            component: component,
            content: content,
            focus: false,
            editable: editable,
            inline: inline,
            color: color,
            props: props,
            path: [...$path]
        }]
    }

    const println = (content, component, editable, color) => {
        print(content, component, editable, color, false);
    }

    const selectFocus = () => {
        let last = lastElement();
        $elements.pop();
        last.focus = true;
        $elements = [...$elements, last];
    }

    const lastElement = () => $elements[$elements.length - 1];

    const execute = (command = '', next) => {
        let split = command.split(' ');
        split = split.map(e => e.trim());
        try {
            commands[split[0]](split, next);
            $history = [...$history, command];
        } catch (e) {
            console.log(e);
            print('(⊙_☉) - Error: Command not found', 'output', false, "#ff772e");
            next();
        }
    }

    const handleKeydown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            let last = lastElement();
            $elements.pop();
            println(last.content, 'input', false);
            execute(last.content, addInput);
        }
    }

    const addInput = () => {
        println('', 'input');
        selectFocus();
    }

</script>

<div class="cli" class:expanded on:keydown={handleKeydown}>
    <div class="header">
        <div class="control">
            <button class="size" on:click={toggleExpand}>
                <Icon name="maximize"/>
            </button>
        </div>
        <p>matssom - cli</p>
    </div>
    <div class="terminal" on:click={selectFocus}>
        {#each $elements as element (element.id)}
            <svelte:component 
                this={getComponent(element.component)} 
                bind:currentValue={element.content} 
                editable={element.editable} 
                bind:focus={element.focus}
                inline={element.inline}
                color={element.color}
                path={element.path}
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
        max-width: 100%;
        max-height: 100vh;
        overflow: hidden;
        box-shadow: var(--box-shadow-2);
        transition: all .5s ease-in-out;
        font-family: 'Consolas';
        font-size: 1.4rem;
    }

    .size {
        display: none;
    }

    @media (min-width: 40.625em) {
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

    .terminal::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }

    .terminal::-webkit-scrollbar
    {
        width: 6px;
        background-color: #F5F5F5;
    }

    .terminal::-webkit-scrollbar-thumb
    {
        background-color: #52748d;
    }
</style>