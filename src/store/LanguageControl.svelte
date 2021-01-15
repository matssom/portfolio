<script>
    import Clickable from "../components/Clickable/Clickable.svelte"
    import { language } from './language.js'

</script>

<Clickable style="secondary" text="{$language[2]}" to="https://matssom.{$language[0]}" icon="language"/>