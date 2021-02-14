<script>
    import Card from '../Layout/Card.svelte';
    import Clickable from '../Feature/Clickable.svelte';
    import Logo from '../Feature/Logo.svelte';
    import { onMount } from 'svelte';
    import { elements } from '../../assets/components/navigation/config.js'

    import { watchResize } from 'svelte-watch-resize';
    import Dropdown from '../Feature/Dropdown.svelte';
import { element } from 'svelte/internal';
import Api from '../../assets/icons/api.svelte';

    let mobile = false, menu = false
    $: open = mobile && menu
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
            <ul class="list" class:mobile class:open>
                {#if mobile}
                    <li class="menu"><Clickable style="invisible" type="button" action={() => menu = !menu} icon="menu"/></li>
                    {#each elements as element (element.id)}
                            {#if !element.structure && element.text}
                                <li class="mobile-item">
                                    <Clickable {...element} />
                                </li>
                            {:else if element.text}
                                 {#each element.structure as column (element.structure.indexOf(column))}
                                    {#each column as element (element.id)}
                                        <li class="mobile-item">
                                            <Clickable {...element} style="invisible" icon=""/>
                                        </li>
                                    {/each}
                                 {/each}
                            {/if}
                    {/each}
                    <li class="mobile-icons">
                        {#each elements as element (element.id)}
                            {#if !element.text}
                                <Clickable {...element} />
                            {/if}
                        {/each}
                    </li>
                {:else}
                    {#each elements as element (element.id)}
                        <li class="item">
                            {#if !element.structure}
                                <Clickable {...element} />
                            {:else}
                                <Dropdown {...element} />
                            {/if}
                        </li>
                    {/each}
                {/if}
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
        /* display: none; */
    }

    .mobile-item {
        display: none;
    }

    .mobile-icons {
        display: none;
    }

    .open {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: var(--back-color-2);
        z-index: 10000;
        flex-direction: column;
        justify-content: center;
    }

    .open .mobile-item {
        display: block;
    }

    .open .mobile-icons {
        display: block;
        margin-top: 4rem;
    }

    .open .menu{
        position: absolute;
        top: 2.8rem;
        right: 2.8rem;
    }

</style>