# embedz
Easy, dependency free embeds for Svelte and Vue.

```shell
# Supports only Svelte for now, requires Svelte 5 and above
npm i @embedz/svelte
```

```svelte
<script>
  import { YouTube, Vimeo } from "@embedz/svelte";
</script>

<YouTube 
  id="KRVnaN29GvM" 
  posterquality="max"
/>
```
