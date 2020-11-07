<script>
    import Card from "../Card/Card.svelte";
    import Container from "../Container/Container.svelte";
    import Section from "../Section.svelte";
    import H1 from "../Type/H1.svelte";
    import P from "../Type/P.svelte";
    import Stack from "../Stack/Stack.svelte";
    import Clickable from "../Clickable/Clickable.svelte";
    import Icon from "../Icon/Icon.svelte";
    import ThemeControl from "../../store/ThemeControl.svelte";

    import { lang } from '../../assets/components/footer/config';
    import { language } from '../../store/language';
    import { onMount } from 'svelte';
    import { watchResize } from 'svelte-watch-resize';
    import LanguageControl from "../../store/LanguageControl.svelte";
    import Split from "../Split.svelte";
import H3 from "../Type/H3.svelte";

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

</script>

<div>
    <Section divider="both">
        <Container>
            <Split col="2">
                <Container padding horizontal>
                    <Stack>
                        <H3>{lang[$language.code].statement.title}</H3>
                        <P size="small">{lang[$language.code].statement.content}</P>
                    </Stack>
                </Container>
                <Container padding horizontal>
                    <Stack>
                        <H3>{lang[$language.code].contact.title}</H3>
                        <P size="small">{lang[$language.code].contact.contents[0]}<Clickable to="https://github.com/matssom" text="GitHub" type="link"/>, {lang[$language.code].contact.contents[1]} <Clickable to="https://twitter.com/matssommer" text="Twitter" type="link" /> {lang[$language.code].contact.contents[2]} <Clickable to="https://linkedin.com/in/mats-sommervold" type="link" text="LinkedIn" /> {lang[$language.code].contact.contents[3]} <Clickable to="mailto:mats@sommervold.net" text="mats@sommervold.net" type="link" />.</P>
                        <Clickable to="/contact" text="{lang[$language.code].contact.action.text}" icon="send" order="reverse" type="route" style="primary"/>
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
                        <p class="legal"><Icon name="copyright"/> Mats Sommervold, 2020</p>
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