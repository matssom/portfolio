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
            <H1 icon="api">Programming Concepts</H1>
            <Split col="2">
                <P>There is way too much to learn for one person in the software development industry. Therefore we need to build teams of unique individuals. Here is a list of my qualities.</P>
                <div class="image-holder">
                    <img class="coding-image" src="assets/routes/concepts/concepts.svg" alt="">
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
                        <H3>Api development</H3>
                        <P>According to the <Clickable to="https://stateofagile.com/" text="state of agile 2020"/> report, agile is here to stay. It has become vital to be adaptable and flexable in todays society where requirements change faster than ever.I have agile background from the System Development course at OsloMet.</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>Algorithms & Datastructures</H3>
                        <P>What does it mean to be professional? In some sense, a professional is just someone who takes responsibility for their choices. Testing is, by all means, a hard skill. But it is also a way to be able to trust that you are delivering quality code.</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>Paradigms (OOP and FP)</H3>
                        <P>Business and development are a powerful combination. Having someone who can propose solutions to business problems and bring those solutions to life through code is extremely valuable to a company or customer. I have business experience through my coaching firm,<Clickable to="https://w2.brreg.no/enhet/sok/detalj.jsp;?orgnr=922195269" text="MATS SOMMERVOLD ENK" />.</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>Networking and cloud</H3>
                        <P>Business and development are a powerful combination. Having someone who can propose solutions to business problems and bring those solutions to life through code is extremely valuable to a company or customer. I have business experience through my coaching firm,<Clickable to="https://w2.brreg.no/enhet/sok/detalj.jsp;?orgnr=922195269" text="MATS SOMMERVOLD ENK" />.</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>Continous Integration/Deployment (CI/CD)</H3>
                        <P>Business and development are a powerful combination. Having someone who can propose solutions to business problems and bring those solutions to life through code is extremely valuable to a company or customer. I have business experience through my coaching firm,<Clickable to="https://w2.brreg.no/enhet/sok/detalj.jsp;?orgnr=922195269" text="MATS SOMMERVOLD ENK" />.</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>User interface design (UI)</H3>
                        <P>Interpersonal skills are vital in an agile team where you communicate across sub-teams and with the client much more than with plan driven development. My interpersonal skills have developed much over the last year due to my teacher assistant job. I have also drasticly improved my public speaking skills by teaching new topics in front of over 300 students.</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>User experience design (UX)</H3>
                        <P>The joy of learning is the single most important reason for why I started programming. I have allways wanted to learn new ways to create human-centric experiences.</P>
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