<script>
    import Section from '../../components/Section.svelte'
    import Container from '../../components/Container/Container.svelte'
    import Stack from '../../components/Stack/Stack.svelte'
    import H1 from '../../components/Type/H1.svelte'
    import P from '../../components/Type/P.svelte'
import Card from '../../components/Card/Card.svelte'
import H3 from '../../components/Type/H3.svelte'
</script>

<Section size="large">
    <Container padding horizontal narrow>
        <Stack>
            <Card padding>
                <div class="space">
                    <Stack size="medium">
                        <H3>Teacher Assistant | Oslo Metropolitan University</H3>
                        <P>I am currently employed at a part-time basis at Oslo Metropolitan University. This semester I am a teacher assistant in the Web programming class. My tasks fluctuate between teaching new topics to a group of 300+ students, reviewing homework, consulting students one on one and grading obligatory assignments. The class I am currently assistant in focuses on the interaction between javascript on the frontend and java on the backend.
                        </P>
                        <P>Last semesester I did the same jobe in a class that is the prerequisite to this course, "Universal design and development". This course foucused more on the basics of HTML and CSS</P>
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