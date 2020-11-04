<script>
    import Container from '../../components/Container/Container.svelte';
    import Stack from '../../components/Stack/Stack.svelte';

    import home from '../../assets/routes/config';
    import H1 from '../../components/Type/H1.svelte';
    import Sub from '../../components/Type/Sub.svelte';
    import Clickable from '../../components/Clickable/Clickable.svelte';
    import Card from '../../components/Card/Card.svelte';
import P from '../../components/Type/P.svelte';
import Flow from '../../components/Flow/Flow.svelte';
import Section from '../../components/Section.svelte';
</script>

<Container padding horizontal>
    <div class="header">
        <Stack size="large">
            <H1>{home.headline}</H1>
            <Sub>{home.tagline}</Sub>
            <Flow>
                <Clickable order="reverse" icon="arrow-right" type="route" style="primary" to="{home.callToAction.path}" text="{home.callToAction.text}"/>
                <Clickable order="reverse" style="secondary" icon="code" type="route" to="{home.secondaryAction.path}" text="{home.secondaryAction.text}"/>
            </Flow>
        </Stack>
    </div>
</Container>

<Container padding horizontal>
    <Section>
        <Card shadow border background="back-color-5">
            <Container padding size="huge">
                <Stack size="large">
                    <H1 oposite>Who am I?</H1>
                    <P oposite>I am a data engineer student based in Oslo, Norway, with an enduring passion for creation.For me, software development is an endless playing field where the only thing stopping you is imagination (and budget :P). My mission is to blur the lines between technology and art. In the end, technology keeps us alive, while art is what we live for.</P>
                </Stack>
            </Container>
        </Card>
    </Section>
</Container> 

<style>
    .header {
        display: grid;
        align-items: center;
        grid-template-rows: repeat(2, fit-content);
        grid-template-columns: fit-content(50rem) 1fr;
        padding: 10rem 0;
    }

    @media (min-width: 62.5em) {
        .header {
            padding: 0;
            min-height: 50rem;
            grid-template-rows: none;
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>