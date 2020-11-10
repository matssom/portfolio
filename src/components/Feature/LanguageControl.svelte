<script>
    import Clickable from "./Clickable.svelte";
    import { language, nextLanguage } from '../../store/language';

    export let text = 'name';

    let key = text === 'name' ? 'name' : 'short';

    const changeLanguage = () => {
        $language = $nextLanguage;
    }

</script>

<Clickable action={changeLanguage} type="button" text="{$nextLanguage[key]}" icon="language"/>