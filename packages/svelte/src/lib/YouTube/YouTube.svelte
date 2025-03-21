<script>
    import LiteYouTube from "./LiteYouTube.svelte";

    let { ...other } = $props();
</script>

<lite-youtube {...other}></lite-youtube>