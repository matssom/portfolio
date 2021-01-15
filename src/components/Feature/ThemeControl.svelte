<script>
    import Clickable from "./Clickable.svelte";
    import { lang } from '../../assets/components/themeControl/config';

    import { theme, nextTheme } from '../../store/theme';

    const changeTheme = () => {
        $theme = $nextTheme;
    }

</script>

<Clickable
    action={changeTheme} 
    type="button" text="{$nextTheme.lang["en"].name} {lang["en"].theme}" 
    icon="{$nextTheme.icon}"
/>