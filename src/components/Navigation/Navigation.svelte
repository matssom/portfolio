<script>
    import Card from '../Card/Card.svelte';

    import config from '../../assets/components/navigation/config.js';
    let links = config.links;
</script>

<Card padding>
    <div class="flex">
        <p>logo</p>
        <nav>
            <!-- {#each links as link (link.name)}
                
            {/each} -->
        </nav>
    </div>
</Card>

<style>
    .flex {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2rem;
    }
</style>