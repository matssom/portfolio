<script>
    import Container from '../components/Layout/Container.svelte';
    import Stack from '../components/Layout/Stack.svelte';
    import H1 from '../components/Type/H1.svelte';
    import Sub from '../components/Type/Sub.svelte';
    import Clickable from '../components/Feature/Clickable.svelte';
    import Flow from '../components/Layout/Flow.svelte';
    import Section from '../components/Layout/Section.svelte';

    import { lang } from '../assets/routes/home/config';
    import { language } from '../store/language';
    import Quote from '../components/Feature/Quote.svelte';
    import CodeImage from '../assets/components/home/code.svelte';
    import P from '../components/Type/P.svelte';
</script>

<Container padding horizontal>
    <div class="header">
        <div class="header__image">
            <CodeImage />
        </div>
        <div class="header__text">
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
    </div>
</Container>

<Section size="large">
    <Container padding horizontal narrow>
        <Stack>
            <H1 center>About me</H1>
            <P center>For me, software development is an endless playing field where the only thing stopping you is imagination (and budget :P). My mission is to blur the lines between technology and art. In the end, technology keeps us alive, while art is what we live for.</P>
        </Stack>
    </Container>
</Section>

<Section divider="top" background="back-color-2">
    <Container padding horizontal>
        <div class="quote">
            <Quote>
                <img slot="image" alt="profile" src="./assets/quote/mats.jpg"/>
                <h4 slot="quote">In the end, technology keeps us alive, while art is what we live for.</h4>
                <p slot="author">Mats Somervold</p>
            </Quote>
        </div>
    </Container>
</Section>

<style>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3rem 0 5rem 0;
        gap: var(--gap-large);
        flex-direction: column;
        text-align: center;
    }

    .header__text {
        flex: 1;
        max-width: 50rem;
    }

    .header__image {
        flex: 1;
        text-align: right;
    }

    .header__image > :global(svg) {
        height: 25rem;
    }

    .header__text :global(div.flow) {
        justify-content: center;
    }

    @media (min-width: 62.5em) {
        .header {
            padding: 8rem 0;
            flex-direction: row-reverse;
            text-align: left;
        }

        .header__text {
            max-width: initial;
        }

        .header__text :global(div.flow) {
            justify-content: initial;
        }

        .header__image > :global(svg) {
            height: 40rem;
        }
    }

    .quote {
        display: flex;
        justify-content: space-around;
    }
</style>