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

    import { onMount } from 'svelte';
    import { watchResize } from 'svelte-watch-resize';

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
        <Container padding horizontal>
            <Stack>
                <H1>Contact</H1>
                <P>You can find my code on <Clickable to="https://github.com/matssom" text="GitHub" type="link"/>, my intrests on <Clickable to="https://twitter.com/matssommer" text="Twitter" type="link" /> and you can reach me on <Clickable to="https://linkedin.com/in/mats-sommervold" type="link" text="LinkedIn" /> or by email at <Clickable to="mailto:mats@sommervold.net" text="mats@sommervold.net" type="link" />.</P>
            </Stack>
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
                            <Clickable type="button" text="Norwegian" icon="language"/>
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