<script>
    import Clickable from "./Clickable.svelte"
    import { language } from '../../store/language.js'

</script>

<Clickable style="secondary" text="{$language[2]}" to="https://matssom.{$language[0]}" icon="language"/>