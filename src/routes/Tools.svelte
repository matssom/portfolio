<script>
import Container from "../components/Layout/Container.svelte";
import Section from "../components/Layout/Section.svelte";
import TagManager from '../components/Feature/TagManager.svelte'
import Flow from '../components/Layout/Flow.svelte'
import Stack from "../components/Layout/Stack.svelte";
import H1 from '../components/Type/H1.svelte';
import H3 from '../components/Type/H3.svelte';
import P from '../components/Type/P.svelte';
import { tags } from '../assets/routes/tools/tools.js'
import Split from "../components/Layout/Split.svelte";
import Quote from "../assets/icons/quote.svelte";

</script>

<Section>
    <Container padding horizontal narrow>
        <Stack size="large">
            <H1 icon="tools">Tools & Languages</H1>
            <Split col="2">
                <P>The software engineers' tools & languages are like the artists' brushes & paint. The computer is the canvas, and theproduct is the art.</P>
                <div class="image-holder">
                    <img class="coding-image" src="assets/routes/tools/developer.svg" alt="">
                </div>
            </Split>
        </Stack>
    </Container>
</Section>
<Section>
    <Container padding horizontal narrow>
        <TagManager {tags} />
    </Container>
</Section>
<Section>
    <Container padding horizontal narrow>
        <H3>Stacks I am familiar with:</H3>
    </Container>
</Section>

<style>
    .image-holder {
        position: relative;
    }

    .coding-image {
        display: none;
    }

    @media (min-width: 53.75em) {
        .coding-image {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-10%, -75%);
            width: 55%;
        }
    }
</style>