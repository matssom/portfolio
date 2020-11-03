<script>
    import Container from '../../components/Container/Container.svelte';
    import Stack from '../../components/Stack/Stack.svelte';

    import home from '../../assets/routes/config';
    import H1 from '../../components/Type/H1.svelte';
    import Sub from '../../components/Type/Sub.svelte';
    import Clickable from '../../components/Clickable/Clickable.svelte';
</script>

<Container padding horizontal>
    <div class="header">
        <Stack size="large">
            <H1>{home.headline}</H1>
            <Sub>{home.tagline}</Sub>
            <Clickable order="reverse" icon="arrow-right" type="route" style="primary" to="{home.callToActionPath}" text="{home.callToAction}"/>
        </Stack>
    </div>
</Container>

<style>
    .header {
        display: grid;
        align-items: center;
        grid-template-rows: repeat(2, 30rem);
        grid-template-columns: max(50rem) 1fr;
    }

    @media (min-width: 62.5em) {
        .header {
            min-height: 50rem;
            grid-template-rows: none;
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>