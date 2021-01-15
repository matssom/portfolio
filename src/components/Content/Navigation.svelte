<script>
    import Card from '../Layout/Card.svelte';
    import Clickable from '../Feature/Clickable.svelte';
    import Logo from '../Feature/Logo.svelte';
    import { onMount } from 'svelte';
    import { elements } from '../../assets/components/navigation/config.js'

    import { watchResize } from 'svelte-watch-resize';

    let mobile = false;
    let nav;
    let acceptableWidth = 0;

    onMount(() => {
        for (let i = 0; i < nav.children.length; i++) {
            acceptableWidth += nav.children[i].clientWidth;
        }
        acceptableWidth += 50;
    });

    const handleResize = (node) => {
        mobile = node.clientWidth <= acceptableWidth;
    }

</script>

<Card padding>
    <div use:watchResize={handleResize}>
        <nav class="flex" role="navigation" bind:this={nav}>
            <Logo />
            <ul class="list" class:mobile>
                {#each elements as element (element.id)}
                    <li class="item">
                        <Clickable {...element}/>
                    </li>
                {/each}
            </ul>
        </nav>
    </div>
</Card>

<style>

    .flex {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: var(--gap-large);
    }

    .list {
        display: flex;
        gap: var(--gap-small);
        margin: 0;
        padding: 0;
        list-style: none;
        align-items: center;
    }

    .item {
        display: inline-block;
    }

    .mobile {
        display: none;
    }
</style>