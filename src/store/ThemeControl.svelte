<script>
    import Clickable from "../components/Clickable/Clickable.svelte";
import Icon from "../components/Icon/Icon.svelte";

    import { theme, nextTheme } from '../store/theme';

    const changeTheme = () => {
        $theme = $nextTheme;
    }

</script>

<Clickable action={changeTheme} type="button" text="{$nextTheme.lang.en.name} Theme" icon="{$nextTheme.icon}"/>

<style>

</style>