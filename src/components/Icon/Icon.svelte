<script>

    import Github from '../../assets/icons/github.svelte';
    import Instagram from '../../assets/icons/instagram.svelte';
    import Linkedin from '../../assets/icons/linkedin.svelte';
    import Logo from '../../assets/icons/logo.svelte';
    import Twitter from '../../assets/icons/twitter.svelte';
    import ArrowRight from '../../assets/icons/arrow-right.svelte';

    export let name = 'logo';

    const icons = [
        { name: 'github',       component: Github       },
        { name: 'instagram',    component: Instagram    },
        { name: 'linkedin',     component: Linkedin     },
        { name: 'twitter',      component: Twitter      },
        { name: 'logo',         component: Logo         },
        { name: 'arrow-right',  component: ArrowRight   },
    ];

    let selected = icons.find(icon => icon.name === name);
</script>

{#if selected && selected.component}
    <svelte:component this={selected.component}/>
{/if}