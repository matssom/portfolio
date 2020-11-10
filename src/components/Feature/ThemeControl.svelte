<script>
    import Clickable from "./Clickable.svelte";
    import { lang } from '../../assets/components/themeControl/config';

    import { theme, nextTheme } from '../../store/theme';
    import { language } from '../../store/language';

    const changeTheme = () => {
        $theme = $nextTheme;
    }

</script>

<Clickable
    action={changeTheme} 
    type="button" text="{$nextTheme.lang[$language.code].name} {lang[$language.code].theme}" 
    icon="{$nextTheme.icon}"
/>