<script>
    import Github from '../../assets/icons/github.svelte';
    import Instagram from '../../assets/icons/instagram.svelte';
    import Linkedin from '../../assets/icons/linkedin.svelte';

    export let name = 'logo';

    const icons = [
        { name: 'logo',      component: Github    },
        { name: 'github',    component: Github    },
        { name: 'instagram', component: Instagram },
        { name: 'linkedin',  component: Linkedin  }
    ];

    let selected = icons.find(icon => icon.name === name);
</script>

<svelte:component this={selected.component}/>