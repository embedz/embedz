# embedz
Easy, dependency free embeds for Svelte and Vue.

```shell
# Supports only Svelte for now, requires Svelte 5 and above
npm i @embedz/test
```

```svelte
<script>
  import { YouTube, Vimeo } from "@embedz/test";
</script>

<YouTube 
  id="KRVnaN29GvM" 
  posterquality="low"
/>
```
