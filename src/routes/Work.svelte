<script>
    import Section from '../components/Layout/Section.svelte'
    import Container from '../components/Layout/Container.svelte'
    import Stack from '../components/Layout/Stack.svelte'
    import Sub from '../components/Type/Sub.svelte'
    import P from '../components/Type/P.svelte'
    import Card from '../components/Layout/Card.svelte'
    import H3 from '../components/Type/H3.svelte'
    import H1 from '../components/Type/H1.svelte'
    import Clickable from '../components/Feature/Clickable.svelte'
    import Ul from '../components/Type/Ul.svelte'
    import Li from '../components/Type/Li.svelte'
</script>

<Section>
    <Container padding horizontal narrow>
        <Stack size="huge">
            <H1 center icon="work">Work Experiences</H1>
            <Card>
                <Container padding size="large">
                    <Stack size="medium">
                        <div class="header">
                            <div>
                                <H3>Teacher Assistant | Oslo Metropolitan University</H3>
                                <Sub small>2020-Present</Sub>
                            </div>
                            <img class="job-image" src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/bjd0kn1ddocmdmmcculj" alt="oslomet logo">
                        </div>
                        <P>I am currently a part-time employee at Oslo Metropolitan University. This semester I am a teacher assistant in the Web programming class. My tasks fluctuate between teaching new topics to a group of 300+ students, reviewing homework, consulting students one on one and grading obligatory assignments. The class I am currently assistant in focuses on the interaction between javascript on the frontend and java on the backend.
                        </P>
                        <P>Last semesester I did the same jobe in a class that is the prerequisite to this course, "Universal design and development". This course foucused more on the basics of HTML and CSS</P>
                        <P>This job fits me well as it combines my to passions, which are coaching/teaching and programming. It gives me valuable experience in public speaking and general colaboration.</P>
                    </Stack>
                </Container>
            </Card>
            <Card>
                <Container padding size="large">
                    <Stack size="medium">
                        <div class="header">
                            <div>
                                <H3>Frontend Developer | Coness AS</H3>
                                <Sub small>2017-2019</Sub>
                            </div>
                            <img class="job-image" src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/5ed5b54be9641d000118785e/picture" alt="coness logo">
                        </div>
                        <P>Being a frontend developer for the consulting firm Coness AS was my first programming job. The work consisted of designing, developing and maintaining the website for Coness (<Clickable to="https://coness.no" text="Coness.no"/>). I worked with mostly HTML, CSS & javascript. The experience I got from this job continues to be valuable for me to this day.
                        </P>
                    </Stack>
                </Container>
            </Card>
            <Card>
                <Container padding size="large">
                    <Stack size="medium">
                        <div class="header">
                            <div>
                                <H3>Judo Coach | Ippon Judo Club</H3>
                                <Sub small>2016-Present</Sub>
                            </div>
                            <img class="job-image" src="https://www.ippon.no/uploads/2/5/1/7/25172525/ippon-logo-100x130.png" alt="ippon jk logo">
                        </div>
                        <P>Ever since I was a kid I have practiced Judo. That has transated into a Coaching job that I have had for the last 4 years. My tasks as a judo coach are:</P>
                        <Ul>
                            <Li>Coaching kids (age 6 - 14) in the art of Judo and all its values. (respect, friendship, courage, self-control, sincerity, and courtesy)</Li>
                            <Li>Developing kids' motor skills.</Li>
                            <Li>Coaching adults age 14 - 60</Li>
                            <Li>Traveling to competitions with kids and coaching them along the way.</Li>
                        </Ul>
                    </Stack>
                </Container>
            </Card>
        </Stack>
    </Container>
</Section>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .job-image {
        /* height: 7rem; */
        width: 7rem;
    }
</style>