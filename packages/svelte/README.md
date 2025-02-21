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

## Youtube

### Usage

```svelte
<YouTube id="KRVnaN29GvM" />
```

You can also pass in the full URL for the video

```svelte
<YouTube id="https://youtu.be/KRVnaN29GvM" />
```

### Optional props

``poster``

type: ``string``

```svelte
<YouTube
  id="KRVnaN29GvM"
  poster="//picsum.photos/1280/720"
/>
```

``posterquality``

type: ``'max' | 'high' | 'default' | 'low'``

default: ``'default'``

```svelte
<YouTube
  id="KRVnaN29GvM"
  posterquality="low"
/>
```

``params``

type: ``string``

```svelte
<YouTube
  id="KRVnaN29GvM"
  params="controls=0&mute=1"
/>
```

``title``

type: ``string``

```svelte
<YouTube
  id="KRVnaN29GvM"
  title="Nuxt in 100 Seconds"
/>
```

## Vimeo

### Usage

```svelte
<Vimeo id="32001208" />
```

You can also pass in the full URL for the video

```svelte
<Vimeo id="https://vimeo.com/32001208" />
```

### Optional props

``poster``

type: ``string``

```svelte
<Vimeo
  id="32001208"
  poster="//picsum.photos/1280/720"
/>
```

``posterquality``

type: ``'max' | 'high' | 'default' | 'low'``

default: ``'default'``

```svelte
<Vimeo
  id="32001208"
  posterquality="low"
/>
```

``params``

type: ``string``

```svelte
<Vimeo
  id="32001208"
  params="controls=0&mute=1"
/>
```

``title``

type: ``string``

```svelte
<Vimeo
  id="32001208"
  title="Earth"
/>
```


## License

Licensed under the [MIT license](https://github.com/embedz/embedz/blob/main/LICENSE.md).