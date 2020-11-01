<script>
    import Card from '../Card/Card.svelte';
    import Clickable from '../Clickable/Clickable.svelte';

    import { elements } from '../../assets/components/navigation/config.js';
</script>

<Card padding>
    <nav class="flex" role="navigation">
        <p>Logo</p>
        <ul class="list">
            {#each elements as { type, external, name, to, action, icon, style } (name)}
                <li class="item">
                    <Clickable style={style} type={type} external={external} to={to} action={action} icon={icon}>
                        {name}
                    </Clickable>
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
    }

    .item {
        display: inline-block;
    }
</style>