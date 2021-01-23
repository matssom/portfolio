<script>
    import Card from "../Layout/Card.svelte";
    import Split from '../Layout/Split.svelte'
    import Container from "../Layout/Container.svelte";
    import Flow from "../Layout/Flow.svelte";
    import Stack from "../Layout/Stack.svelte";
    import H3 from "../Type/H3.svelte";
    import P from "../Type/P.svelte";
    import Divider from '../Layout/Divider.svelte';
    import Icon from '../Feature/Icon.svelte'
    import Tag from "./Tag.svelte";
    import { writable } from 'svelte/store';

    export let tags = []

    let tag = writable({
        title: 'Select a tag',
        description: '',
        icon: 'tag',
        keywords: [],
        data: {},
        color: {
            brand: '',
            tag: '',
            tagSelected: '',
            text: ''
        },
        blur: () => false
    })

    const handleClick = ({detail : selected}) => {
        $tag.blur()
        $tag = selected
        selected.select()
    }
</script>

<article>
    <Stack size="large">
        <Container padding horizontal narrow>
            <Card shadow padding>
                <Container padding size="large" vertical>
                    <Stack size="large">
                        <Flow center>
                            {#each tags as tag (tags.indexOf(tag))}
                                <Tag on:message={handleClick} icon={tag.icon} title={tag.title} description={tag.description} color={tag.color} keywords={tag.keywords} data={tag.data} plate={tag.plate}/>
                            {/each}
                        </Flow>
                        <Divider />
                        <div class="side-by-side">
                            <div class="side-by-side">
                                <Icon name={$tag.icon} size="large" color=""/>
                                <P><span class="bold">{$tag.title}:</span></P>
                            </div>
                            <Flow>
                                {#each $tag.keywords as key ($tag.keywords.indexOf(key))}
                                    <Tag title={key} color={{tag: '#8b3e6f', text: 'white'}} disabled />
                                {/each}
                            </Flow>
                        </div>
                        <Split col="2" free>
                            <Container padding horizontal>
                                <Stack>
                                    <P>{$tag.description[0] ? $tag.description[0] : ''}</P>
                                </Stack>
                            </Container>
                            <Container padding horizontal>
                                <Stack>
                                    <P>{$tag.description[1] ? $tag.description[1] : ''}</P>
                                </Stack>
                            </Container>
                        </Split>
                    </Stack>
                </Container>
            </Card>
        </Container>
    </Stack>
</article>

<style>
    .side-by-side {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    .bold {
        font-weight: 700;
    }
</style>