<script>
    import Container from "../components/Layout/Container.svelte";
    import Clickable from '../components/Feature/Clickable.svelte';
    import Section from "../components/Layout/Section.svelte";
    import Split from "../components/Layout/Split.svelte";
    import Stack from '../components/Layout/Stack.svelte';
    import H1 from "../components/Type/H1.svelte";
    import H3 from "../components/Type/H3.svelte";
    import P from "../components/Type/P.svelte";


</script>

<Section>
    <Container padding horizontal narrow>
        <Stack size="large">
            <H1 icon="open-book">Soft Skills</H1>
            <Split col="2">
                <P>While knowing hard programming skills is valuable, you won't be able to create solutions to today's complex problems without collaboration and project management.</P>
                <div class="image-holder">
                    <img class="coding-image" src="assets/routes/skills/scrum.svg" alt="">
                </div>
            </Split>
        </Stack>
    </Container>
</Section>
<Section>
    <Container padding horizontal>
        <Stack size="large">
            <Split col="2">
                <Container padding horizontal>
                    <Stack>
                        <H3>Agile Development</H3>
                        <P>According to the <Clickable to="https://stateofagile.com/" text="state of agile 2020"/> report, agile is here to stay. It has become vital to be adaptable and flexable in todays society where requirements change faster than ever.I have agile background from the System Development course at OsloMet.</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>Testing</H3>
                        <P>What does it mean to be professional? In some sense, a professional is just someone who takes responsibility for their choices. Testing is, by all means, a hard skill. But it is also a way to be able to trust that you are delivering quality code.</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>Lifelong Learner</H3>
                        <P>The joy of learning is the single most important reason for why I started programming. I have allways wanted to learn new ways to create human-centric experiences.</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>Bussiness mindedness</H3>
                        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, mollitia expedita ipsum tempore doloribus tenetur impedit magnam sunt accusantium perspiciatis suscipit provident dignissimos repellendus cumque?</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>Curiosity</H3>
                        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, mollitia expedita ipsum tempore doloribus tenetur impedit magnam sunt accusantium perspiciatis suscipit provident dignissimos repellendus cumque?</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>Interpersonal skills</H3>
                        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, mollitia expedita ipsum tempore doloribus tenetur impedit magnam sunt accusantium perspiciatis suscipit provident dignissimos repellendus cumque?</P>
                    </Stack>
                </Container>
            </Split>
        </Stack>
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