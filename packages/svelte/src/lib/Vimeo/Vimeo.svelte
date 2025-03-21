<script>
    import LiteVimeo from "./LiteVimeo.svelte";

    let { ...other } = $props();
</script>

<lite-vimeo {...other}></lite-vimeo>