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
            <H1 center icon="education">Formal Education</H1>
            <Card>
                <Container padding size="large">
                    <Stack size="medium">
                        <div class="header">
                            <div>
                                <H3>Data engineer student | Oslo Metropolitan University</H3>
                                <Sub small>2019-2022</Sub>
                            </div>
                            <img class="job-image" src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/bjd0kn1ddocmdmmcculj" alt="oslomet logo">
                        </div>
                        <P>I am currently in a 3 year program for a <Clickable to="https://www.oslomet.no/studier/tkd/dataingenior" text="bacholers degree in computer software engineering" /> at <Clickable to="https://oslomet.no" text="Oslo Metropolitain University"/>. I am expected to graduate by the summer of 2022.
                        </P>
                        <P>Courses I have had this far:</P>
                        <Ul>
                            <Li>Universal design and development (<Clickable to="https://student.oslomet.no/en/studier/-/studieinfo/emne/DAFE1200/2020/H%C3%98ST" text="curriculum" />)</Li>
                            <Li>Programming - Java (<Clickable to="https://student.oslomet.no/en/studier/-/studieinfo/emne/DAPE1400/2020/H%C3%98ST" text="curriculum" />)</Li>
                            <Li>Descrete Mathematics (<Clickable to="https://student.oslomet.no/studier/-/studieinfo/emne/DAPE1300/2020/H%C3%98ST" text="curriculum" />)</Li>
                            <Li>Software development - Java (<Clickable to="https://student.oslomet.no/en/studier/-/studieinfo/emne/DAFE1200/2020/H%C3%98ST" text="curriculum" />)</Li>
                            <Li>Mathematics 1000 (<Clickable to="https://student.oslomet.no/en/studier/-/studieinfo/emne/DAFE1000/2020/H%C3%98ST" text="curriculum" />) </Li>
                            <Li>Databases (<Clickable to="https://student.oslomet.no/en/studier/-/studieinfo/emne/DATA1500/2020/H%C3%98ST" text="curriculum" />) </Li>
                            <Li>Mathematics 2000 (<Clickable to="https://student.oslomet.no/en/studier/-/studieinfo/emne/DAFE1000/2020/H%C3%98ST" text="curriculum" />) </Li>
                            <Li>Algorithms and Data Structures (<Clickable to="https://student.oslomet.no/en/studier/-/studieinfo/emne/DATS2300/2020/H%C3%98ST" text="curriculum" />) </Li>
                            <Li>Software Engineering (<Clickable to="https://student.oslomet.no/en/studier/-/studieinfo/emne/DAFE2200/2020/H%C3%98ST" text="curriculum" />) </Li>
                        </Ul>
                    </Stack>
                </Container>
            </Card>
            <Card>
                <Container padding size="large">
                    <Stack size="medium">
                        <div class="header">
                            <div>
                                <H3>High School | Norwegian highshool of elite sports (NTG)</H3>
                                <Sub small>2016-2019</Sub>
                            </div>
                            <img class="job-image" src="https://www.ntg.no/assets/svg/ntg.svg" alt="ntg logo">
                        </div>
                        <P>I went to the Norwegian highshool of elite sports. There I practiced judo (martial art) for three years. All though there were no programming courses at the school I was always learning something on the side.
                        </P>
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
        width: 7rem;
        border-radius: var(--border-radius-button);
    }
</style>