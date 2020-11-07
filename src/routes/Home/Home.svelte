<script>
    import Container from '../../components/Container/Container.svelte';
    import Stack from '../../components/Stack/Stack.svelte';
    import H1 from '../../components/Type/H1.svelte';
    import Sub from '../../components/Type/Sub.svelte';
    import Clickable from '../../components/Clickable/Clickable.svelte';
    import Card from '../../components/Card/Card.svelte';
    import P from '../../components/Type/P.svelte';
    import Flow from '../../components/Flow/Flow.svelte';
    import Section from '../../components/Section.svelte';

    import { lang } from '../../assets/routes/home/config';
    import { language } from '../../store/language';
    import Quote from '../../components/Quote.svelte';
</script>

<Container padding horizontal>
    <div class="header">
        <Stack size="large">
            <H1>{lang[$language.code].header.headline}</H1>
            <Sub>{lang[$language.code].header.tagline}</Sub>
            <Flow>
                {#each lang.base.header.actions as action (action.index)}
                    <Clickable order="reverse" icon="{action.icon}" type="route" style="{action.style}" to="{action.path}" text="{lang[$language.code].header.actions[action.index].text}"/>
                {/each}
            </Flow>
        </Stack>
    </div>
</Container>

<Container padding horizontal>
    <Section divider="top">
        <div class="quote">
            <Quote>
                <img slot="image" alt="profile" src="./assets/quote/mats.jpg"/>
                <h4 slot="quote">In the end, technology keeps us alive, while art is what we live for.</h4>
                <p slot="author">Mats Somervold</p>
            </Quote>
        </div>
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

    .quote {
        display: flex;
        justify-content: space-around;
    }
</style>