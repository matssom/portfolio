<script>
    import { element } from "svelte/internal";
import Stack from "../Layout/Stack.svelte";
import Clickable from "./Clickable.svelte";

    export let  action = '',
                to = '',
                type = 'link',
                order = 'regular',
                text = '',
                id = 1,
                external = false,
                style = '',
                selected = false,
                notab = false,
                structure = [
                    [
                        {
                            id: 1,
                            text: 'dropdown element',
                            icon: 'expand',
                            type: 'route',
                            to: '/'
                        }
                    ]
                ]

</script>

<Clickable {action} {to} {type} {order} icon="arrow-down" {text} {id} {external} {style} {selected} {notab} dropdown>
    <div class="container col-{structure.length}">
        {#each structure as col}
            <div class="col">
                <Stack size="small">
                    {#each col as element (element.id)}
                        <Clickable type="{element.type}" style="invisible" icon="{element.icon}" text="{element.text}" to="{element.to}"/>
                    {/each}
                </Stack>
            </div>
        {/each}
    </div>
</Clickable>

<style>
    .container {
        display: grid;
        grid-template-columns: max-content;
        gap: 0 var(--gap-small);
    }

    .col-2 {
        grid-template-columns: max-content max-content;
    }

    .col-3 {
        grid-template-columns: max-content max-content max-content;
    }

    .col-4 {
        grid-template-columns: max-content max-content max-content max-content;
    }

    .col {
        /* min-width: 15rem; */
    }
</style>