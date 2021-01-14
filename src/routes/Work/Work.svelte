<script>
    import Section from '../../components/Section.svelte'
    import Container from '../../components/Container/Container.svelte'
    import Stack from '../../components/Stack/Stack.svelte'
    import Sub from '../../components/Type/Sub.svelte'
    import P from '../../components/Type/P.svelte'
import Card from '../../components/Card/Card.svelte'
import H3 from '../../components/Type/H3.svelte'
import Clickable from '../../components/Clickable/Clickable.svelte'
</script>

<Section>
    <Container padding horizontal narrow>
        <Stack size="large">
            <Card padding>
                <div class="space">
                    <Stack size="medium">
                        <H3>Teacher Assistant | Oslo Metropolitan University</H3>
                        <Sub small>2020-Present</Sub>
                        <P>I am currently a part-time employee at Oslo Metropolitan University. This semester I am a teacher assistant in the Web programming class. My tasks fluctuate between teaching new topics to a group of 300+ students, reviewing homework, consulting students one on one and grading obligatory assignments. The class I am currently assistant in focuses on the interaction between javascript on the frontend and java on the backend.
                        </P>
                        <P>Last semesester I did the same jobe in a class that is the prerequisite to this course, "Universal design and development". This course foucused more on the basics of HTML and CSS</P>
                        <P>This job fits me well as it combines my to passions, which are coaching/teaching and programming. It gives me valuable experience in public speaking and general colaboration.</P>
                    </Stack>
                </div>
            </Card>
            <Card padding>
                <div class="space">
                    <Stack size="medium">
                        <H3>Frontend Developer | Coness AS</H3>
                        <Sub small>2017-2019</Sub>
                        <P>Being a frontend developer for the consulting firm Coness AS was my first programming job. The work consisted of designing, developing and maintaining the website for Coness (<Clickable to="https://coness.no" text="Coness.no"/>). I worked with mostly HTML, CSS & javascript. The experience I got from this job continues to be valuable for me to this day.
                        </P>
                    </Stack>
                </div>
            </Card>
        </Stack>
    </Container>
</Section>

<style>
    .space {
        padding: 2rem 0;
    }
</style>