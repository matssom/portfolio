<script>
    import { onMount } from 'svelte'

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
    import InsetLogo from '../../assets/icons/inset-logo.svelte';
    import Api from '../../assets/icons/api.svelte';
    import Tag from '../../assets/icons/tag.svelte';
    import Hashtag from '../../assets/icons/hashtag.svelte';

    export let name = 'logo', alt = '', size = 'small';

    const icons = [
        { name: 'github',       component: Github       },
        { name: 'instagram',    component: Instagram    },
        { name: 'linkedin',     component: Linkedin     },
        { name: 'twitter',      component: Twitter      },
        { name: 'logo',         component: Logo         },
        { name: 'inset-logo',   component: InsetLogo    },
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
        { name: 'oslomet-logo', component: OslometLogo  },
        { name: 'api',          component: Api          },
        { name: 'tag',          component: Tag          },
        { name: 'hashtag',      component: Hashtag      }
    ];

    $: selected = icons.find(icon => icon.name === name);
</script>

{#if selected && selected.component}
    <svelte:component {size} this={selected.component}/>
{:else}
    <img class={size} src="{name}" alt={alt}>
{/if}

<style>
    img {
        display: inline-block;
        height: 1.1em;
    }

    .medium {
        height: 2.2rem;
    }

    .medium :global(svg) {
        height: 2.2rem;
    }

    .large {
        height: 4rem;
    }
    

</style>

