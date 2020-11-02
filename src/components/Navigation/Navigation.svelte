<script>
    import Card from '../Card/Card.svelte';
    import Clickable from '../Clickable/Clickable.svelte';

    import { elements } from '../../assets/components/navigation/config.js';
</script>

<Card padding>
    <nav class="flex" role="navigation">
        <p>logo</p>
        <ul class="list">
            {#each elements as element (element.id)}
                <li class="item">
                    <Clickable {...element} />
                </li>
            {/each}
        </ul>
    </nav>
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
</style>