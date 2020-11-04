<script>

    import Github from '../../assets/icons/github.svelte';
    import Instagram from '../../assets/icons/instagram.svelte';
    import Linkedin from '../../assets/icons/linkedin.svelte';
    import Logo from '../../assets/icons/logo.svelte';
    import Twitter from '../../assets/icons/twitter.svelte';
    import ArrowRight from '../../assets/icons/arrow-right.svelte';
    import Code from '../../assets/icons/code.svelte';
    import Copyright from '../../assets/icons/copyright.svelte';
    import Language from '../../assets/icons/language.svelte';
    import Sun from '../../assets/icons/sun.svelte';
    import Moon from '../../assets/icons/moon.svelte';

    export let name = 'logo';

    const icons = [
        { name: 'github',       component: Github       },
        { name: 'instagram',    component: Instagram    },
        { name: 'linkedin',     component: Linkedin     },
        { name: 'twitter',      component: Twitter      },
        { name: 'logo',         component: Logo         },
        { name: 'arrow-right',  component: ArrowRight   },
        { name: 'code',         component: Code         },
        { name: 'copyright',    component: Copyright    },
        { name: 'language',     component: Language     },
        { name: 'sun',          component: Sun          },
        { name: 'moon',         component: Moon         }
    ];

    let selected = icons.find(icon => icon.name === name);
</script>

{#if selected && selected.component}
    <svelte:component this={selected.component} />
{/if}