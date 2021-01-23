<script>
    import { onMount, onDestroy } from 'svelte'

    let expandGroup

    const toggleExpand = event => {
        console.log(evnet)
    }


</script>

<div bind:this={expandGroup} on:message={toggleExpand}>
    <slot />
</div>

<style>

</style>