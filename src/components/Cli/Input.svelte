<script>
    import { onMount } from 'svelte';
    import Bracket from '../../assets/icons/right-bracket.svelte';

    export let handleSubmit, editable = true, currentValue = '', focus = false;

    let path = ['root', 'users'];
    let type;

    $: if (focus && type) {
        type.focus();
        focus = false;
    }

</script>

<div class="input">
    <ul class="dir">
        {#each path as p (p)}
            <li class="dir-element">
                <span>{p}</span>
                <Bracket />
            </li>
        {/each}
    </ul>
    {#if editable}
        <span class="type focusable" contenteditable="true" bind:this={type} bind:textContent={currentValue}>
            {currentValue}
        </span>
    {:else}
        <span class="type">
            {currentValue}
        </span>
    {/if}
</div>

<style>
    .input {
        display: flex;
        color: white;
    }

    .dir {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
    }

    .dir-element {
        display: flex;
        align-items: center;
        /* color: rgb(103, 255, 230); */
        color: #95E965;
    }

    .dir-element > :global(svg) {
        /* fill: rgb(250, 44, 44); */
        fill: #ff772e;
        height: 1.4em;
        width: 1.4em;
    }

    .type {
        padding: 1px;
        border: 1px solid transparent;
    }

    .type.focusable:focus {
        outline: none;
        /* border: 1px solid white; */
        border-radius: .2rem;
    }
</style>