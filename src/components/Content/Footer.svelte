<script>
    import Card from "../Layout/Card.svelte";
    import Container from "../Layout/Container.svelte";
    import Section from "../Layout/Section.svelte";
    import P from "../Type/P.svelte";
    import Stack from "../Layout/Stack.svelte";
    import Clickable from "../Feature/Clickable.svelte";
    import Icon from "../Feature/Icon.svelte";
    import ThemeControl from "../Feature/ThemeControl.svelte";
    import { language } from '../../store/language.js';
    import { lang } from '../../assets/components/footer/config.js'

    import { onMount } from 'svelte';
    import { watchResize } from 'svelte-watch-resize';
    import Split from "../Layout/Split.svelte";
    import H3 from "../Type/H3.svelte";
    import LanguageControl from "../Feature/LanguageControl.svelte";

    let mobile = false;
    let nav;
    let acceptableWidth = 0;

    onMount(() => {
        for (let i = 0; i < nav.children.length; i++) {
            acceptableWidth += nav.children[i].clientWidth;
        }
        acceptableWidth += 100;
    });

    const handleResize = (node) => {
        mobile = node.clientWidth <= acceptableWidth;
    }

    let statement = lang[$language[1]].statement
    let contact = lang[$language[1]].contact 

</script>

<div>
    <Section divider="both">
        <Container>
            <Split col="2">
                <Container padding horizontal>
                    <Stack>
                        <H3>{statement.title}</H3>
                        <P size="small">{statement.content}</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>{contact.title}</H3>
                        <P size="small">{contact.contents[0]}<Clickable to="https://github.com/matssom" text="GitHub" type="link"/>, {contact.contents[1]}<Clickable to="https://twitter.com/matssommer" text="Twitter" type="link" /> {contact.contents[2]} <Clickable to="https://linkedin.com/in/mats-sommervold" type="link" text="LinkedIn" /> {contact.contents[3]}<Clickable to="mailto:mats@sommervold.net" text="mats@sommervold.net" type="link" />.</P>
                        <Clickable to="/contact" text="{contact.action.text}" icon="send" order="reverse" type="route" style="primary"/>
                    </Stack>
                </Container>
            </Split>
        </Container>
    </Section>
    <Container padding horizontal>
        <Section size="small">
            <Card padding>
                <div use:watchResize={handleResize}>
                    <div class:mobile class="footer" bind:this={nav}>
                        <p class="legal"><Icon name="copyright"/> Mats Sommervold, 2021</p>
                        <div class="footer">
                            <ThemeControl />
                            <LanguageControl />
                        </div>
                    </div>
                </div>
            </Card>
        </Section>
    </Container>
</div>

<style>
    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--gap-medium);
    }

    .legal {
        display: flex;
        align-items: center;
        gap: .3rem;
        color: var(--text-color-2);
    }
    
    .mobile {
        flex-direction: column;
    }
</style>