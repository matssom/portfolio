<script>
    import Clickable from "./Clickable.svelte";
    import { lang } from '../../assets/components/themeControl/config';
    import { language } from '../../store/language.js';

    import { theme, nextTheme } from '../../store/theme';

    const changeTheme = () => {
        $theme = $nextTheme;
    }

    const langCode = $language[1]

</script> 

<Clickable
    action={changeTheme} 
    type="button" text="{$nextTheme.lang[langCode].name} {lang[langCode].theme}" 
    icon="{$nextTheme.icon}"
/>