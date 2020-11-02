<script>
    import Github from '../../assets/icons/github.svelte';
    import Instagram from '../../assets/icons/instagram.svelte';
    import Linkedin from '../../assets/icons/linkedin.svelte';
    import Logo from '../../assets/icons/logo.svelte';

    export let name = 'logo';

    const icons = [
        { name: 'github',    component: Github    },
        { name: 'instagram', component: Instagram },
        { name: 'linkedin',  component: Linkedin  },
        { name: 'logo',      component: Logo      }
    ];

    let selected = icons.find(icon => icon.name === name);
</script>

<svelte:component this={selected.component}/>