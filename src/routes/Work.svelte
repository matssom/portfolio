<script>
    import Section from '../components/Layout/Section.svelte'
    import Container from '../components/Layout/Container.svelte'
    import Stack from '../components/Layout/Stack.svelte'
    import Sub from '../components/Type/Sub.svelte'
    import P from '../components/Type/P.svelte'
import Card from '../components/Layout/Card.svelte'
import H3 from '../components/Type/H3.svelte'
import Clickable from '../components/Feature/Clickable.svelte'
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
            <Card padding>
                <div class="space">
                    <Stack size="medium">
                        <H3>Judo Coach | Ippon Judo Club</H3>
                        <Sub small>2016-Present</Sub>
                        <P>Ever since I was a kid I have practiced Judo. That has transated into a Coaching job that I have had for the last 4 years. My tasks as a judo coach are:</P>
                        <ul>
                            <li>Coaching kids (age 6 - 14) in the art of Judo and all its values. (respect, friendship, courage, self-control, sincerity, and courtesy)</li>
                            <li>Developing kids' motor skills.</li>
                            <li>Coaching adults age 14 - 60</li>
                            <li>Traveling to competitions with kids and coaching them along the way.</li>
                        </ul>
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