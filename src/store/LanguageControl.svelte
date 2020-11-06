<script>
    import Clickable from "../components/Clickable/Clickable.svelte";
    import { language, nextLanguage } from '../store/language';

    const changeLanguage = () => {
        $language = $nextLanguage;
    }

</script>

<Clickable action={changeLanguage} type="button" text="{$nextLanguage.name}" icon="language"/>