<script>
    import Container from "../components/Layout/Container.svelte";
    import Clickable from '../components/Feature/Clickable.svelte';
    import Section from "../components/Layout/Section.svelte";
    import Split from "../components/Layout/Split.svelte";
    import Stack from '../components/Layout/Stack.svelte';
    import H1 from "../components/Type/H1.svelte";
    import H3 from "../components/Type/H3.svelte";
    import P from "../components/Type/P.svelte";
    import Flow from '../components/Layout/Flow.svelte';
import Card from "../components/Layout/Card.svelte";


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
                        <P>As more businesses move online, api development becomes more and more important. Should you go with a code-first approach or create the api interface before any core functionallity is implemented? I have experience creating RESTful api's and I am currently learning about GraphQL.</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>Continous Integration (CI/CD)</H3>
                        <P>Managing smaller or even larger applications has become a lot easier this past decade because of the giants like Amazon, Goolge and Microsoft making deployment to cloud as easy as one click. My CI/CD knowledge is based from Circle CI, Github Actions, Heroku and Digital ocean. For smaller static projects, I also enjoy using Netlify and Vercel.</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>Algorithms & Datastructures</H3>
                        <P>Algorithms and datastructures are the core of software development. I have a good foundation in this field from the course, <Clickable to="https://student.oslomet.no/en/studier/-/studieinfo/emne/DATS2300/2020/H%C3%98ST" text="AlgDat"/> at OsloMet.</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>Networking and cloud</H3>
                        <P>I am currently enduring a course in <Clickable to="https://student.oslomet.no/en/studier/-/studieinfo/emne/DATA2410/2020/H%C3%98ST" text="Newtworking and cloud computing" />. Learning the basics of the IP stack and and how networks really work has been some of the most fun I have had programming so far. I look forward to learning more.</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>Paradigms (OOP and FP)</H3>
                        <P>The two programming paradigms I am most familiar with are probably also the two most popular. I have a profound understanding of object oriented programming because most of the programming lectures at my university are in Java. Functional programming is something I have picked up myself on the side. I try to write javascript as functionally as possible and I am looking into learning a proper functional language like Clojure.</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>Design (UX & UI)</H3>
                        <P>Even though I am not a designer, I have a keen eye for user interface and user experiece design. I believe that helps me invisioning how a potential product may feel before even starting the development. Universal design and accesibility are also incredibly important topics for a programmer. I have been incredibly lucky to colaborate closely with world leading <Clickable to="https://dranthony.design" text="Dr. Anthony Giannoumis"/> in this field.</P>
                    </Stack>
                </Container>
            </Split>
        </Stack>
    </Container>
</Section>

<Section>
    <Container padding horizontal narrow>
        <Card padding horizontal background="back-color-2">
            <Container padding size="large">
                <Stack>
                    <H3>Related sections:</H3>
                    <Flow size="large">
                        <Clickable style="link" to="/soft-skills" type="route" text="Soft Skills" icon="open-book"/>
                        <Clickable style="link" to="/tools" type="route" text="Hard Skills" icon="tools"/>
                    </Flow>
                </Stack>
            </Container>
        </Card>
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