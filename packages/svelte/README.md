# embedz

[![NPM](https://img.shields.io/npm/v/nuqs?color=red)](https://www.npmjs.com/package/@embedz/svelte)
[![MIT License](https://img.shields.io/github/license/embedz/embedz.svg?color=blue)](https://github.com/embedz/embedz/blob/next/LICENSE)

Easy, dependency free embeds for Svelte and Vue.

## Installation

```shell
# npm
npm install @embedz/svelte
```

```shell
# pnpm
pnpm install @embedz/svelte
```

```shell
# yarn
yarn add @embedz/svelte
```

## Usage

```svelte
<script>
  import { Dailymotion, Vimeo, YouTube } from "@embedz/svelte";
</script>

<YouTube 
  id="KRVnaN29GvM" 
  posterquality="max"
/>
```

## Youtube

### id

type: ``string``

```svelte
<YouTube id="KRVnaN29GvM" />
```

You can also pass in the full URL for the video

```svelte
<YouTube id="https://youtu.be/KRVnaN29GvM" />
```

### poster

type: ``string``

```svelte
<YouTube
  id="KRVnaN29GvM"
  poster="//picsum.photos/1280/720"
/>
```

### posterquality

type: ``"max" | "high" | "default" | "low"``

default: ``"default"``

```svelte
<YouTube
  id="KRVnaN29GvM"
  posterquality="low"
/>
```

### params

type: ``string``

```svelte
<YouTube
  id="KRVnaN29GvM"
  params="controls=0&mute=1"
/>
```

### title

type: ``string``

```svelte
<YouTube
  id="KRVnaN29GvM"
  title="Nuxt in 100 Seconds"
/>
```

## Vimeo

### id

type: ``string``

```svelte
<Vimeo id="32001208" />
```

You can also pass in the full URL for the video

```svelte
<Vimeo id="https://vimeo.com/32001208" />
```

### poster

type: ``string``

```svelte
<Vimeo
  id="32001208"
  poster="//picsum.photos/1280/720"
/>
```

### posterquality

type: ``"max" | "high" | "default" | "low"``

default: ``"default"``

```svelte
<Vimeo
  id="32001208"
  posterquality="low"
/>
```

### params

type: ``string``

```svelte
<Vimeo
  id="32001208"
  params="controls=0&mute=1"
/>
```

### title

type: ``string``

```svelte
<Vimeo
  id="32001208"
  title="Earth"
/>
```

## Dailymotion

### id

type: ``string``

```svelte
<Dailymotion id="x8e31lf" />
```

You can also pass in the full URL for the video

```svelte
<Dailymotion id="https://dai.ly/x8e31lf" />
```

### poster

type: ``string``

```svelte
<Dailymotion 
  id="x8e31lf"
  poster="//picsum.photos/1280/720"
/>
```

### posterquality

type: ``"max" | "high" | "default" | "low"``

default: ``"default"``

```svelte
<Dailymotion 
  id="x8e31lf"
  posterquality="low"
/>
```

### params

type: ``string``

```svelte
<Dailymotion 
  id="x8e31lf"
  params="mute=true&loop=false"
/>
```

### title

type: ``string``

```svelte
<Dailymotion 
  id="x8e31lf"
  title="Dolby Vision"
/>
```

## License

Licensed under the [MIT license](https://github.com/embedz/embedz/blob/main/LICENSE.md).

## Contributors

<a href="https://github.com/vueframe/vueframe/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=vueframe/vueframe" />
</a>