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
    import Send from '../../assets/icons/send.svelte';
    import Message from '../../assets/icons/message.svelte';
    import Quote from '../../assets/icons/quote.svelte';
    import Work from '../../assets/icons/work.svelte';
    import Expand from '../../assets/icons/expand.svelte';
    import Tools from '../../assets/icons/tools.svelte';
    import OpenBook from '../../assets/icons/open-book.svelte';
    import ArrowDown from '../../assets/icons/arrow-down.svelte';
    import Npm from '../../assets/icons/npm.svelte';
    import Education from '../../assets/icons/education.svelte';
    import Book from '../../assets/icons/book.svelte';
    import LifeBouy from '../../assets/icons/life-bouy.svelte';
    import Handshake from '../../assets/icons/handshake.svelte';
    import OslometLogo from '../../assets/icons/oslomet-logo.svelte';

    export let name = 'logo', alt = '';

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
        { name: 'moon',         component: Moon         },
        { name: 'send',         component: Send         },
        { name: 'message',      component: Message      },
        { name: 'quote',        component: Quote        },
        { name: 'work',         component: Work         },
        { name: 'expand',       component: Expand       },
        { name: 'tools',        component: Tools        },
        { name: 'open-book',    component: OpenBook     },
        { name: 'arrow-down',   component: ArrowDown    },
        { name: 'npm',          component: Npm          },
        { name: 'education',    component: Education    },
        { name: 'book',         component: Book         },
        { name: 'life-bouy',    component: LifeBouy     },
        { name: 'handshake',    component: Handshake    },
        { name: 'oslomet-logo', component: OslometLogo  }
    ];

    $: selected = icons.find(icon => icon.name === name);
</script>

{#if selected && selected.component}
    <svelte:component this={selected.component} />
{:else}
    <img src="{name}" alt={alt}>
{/if}

<style>
    img {
        display: inline-block;
        height: 1.1em;
    }
</style>