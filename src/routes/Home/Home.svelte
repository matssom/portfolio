<script>
    import Container from '../../components/Container/Container.svelte';
    import Stack from '../../components/Stack/Stack.svelte';
    import H1 from '../../components/Type/H1.svelte';
    import Sub from '../../components/Type/Sub.svelte';
    import Clickable from '../../components/Clickable/Clickable.svelte';
    import Flow from '../../components/Flow/Flow.svelte';
    import Section from '../../components/Section.svelte';

    import { lang } from '../../assets/routes/home/config';
    import { language } from '../../store/language';
    import Quote from '../../components/Quote.svelte';
    import CodeImage from '../../assets/components/home/code.svelte';
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

<Section divider="top" background="back-color-2">
    <Container>
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