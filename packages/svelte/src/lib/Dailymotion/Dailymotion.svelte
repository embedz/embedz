<script>
    import LiteDailymotion from "./LiteDailymotion.svelte";

    let { ...other } = $props();
</script>

<lite-dailymotion {...other}></lite-dailymotion>