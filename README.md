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
