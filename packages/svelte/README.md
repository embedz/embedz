# embedz

[![NPM](https://img.shields.io/npm/v/@embedz/svelte?color=red)](https://www.npmjs.com/package/@embedz/svelte)
[![MIT License](https://img.shields.io/github/license/embedz/embedz.svg?color=blue)](https://github.com/embedz/embedz/blob/next/LICENSE)

Easy, dependency free embeds for Svelte and Vue.

[Demo](https://svelte.dev/playground/ca582264a045460b99fc444a0b3d30f1?version=5.20.4)

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
  id="C7eGZUBdL4g" 
  posterquality="max"
/>
```


## Youtube

### id

type: ``string``

```svelte
<YouTube id="C7eGZUBdL4g" />
```

You can also pass in the full URL for the video

```svelte
<YouTube id="https://youtu.be/C7eGZUBdL4g" />
```

### poster

type: ``string``

```svelte
<YouTube
  id="C7eGZUBdL4g"
  poster="https://picsum.photos/1280/720"
/>
```

### posterquality

type: ``"max" | "high" | "default" | "low"``

default: ``"default"``

```svelte
<YouTube
  id="C7eGZUBdL4g"
  posterquality="low"
/>
```

### params

type: ``string``

```svelte
<YouTube
  id="C7eGZUBdL4g"
  params="controls=0&mute=1"
/>
```

### ratio

type: ``string``

```svelte
<YouTube
  id="C7eGZUBdL4g"
  ratio="4:3"
/>
```

### title

type: ``string``

```svelte
<YouTube
  id="C7eGZUBdL4g"
  title="Rock the House"
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
  poster="https://picsum.photos/1280/720"
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

### ratio

type: ``string``

```svelte
<Vimeo
  id="32001208"
  ratio="4:3"
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
  poster="https://picsum.photos/1280/720"
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

### ratio

type: ``string``

```svelte
<Dailymotion 
  id="x8e31lf"
  ratio="4:3"
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

## Development

```shell
git clone https://github.com/embedz/embedz.git
cd embedz/packages/svelte
npm install
npm run dev -- --open
```

## License

Licensed under the [MIT license](https://github.com/embedz/embedz/blob/main/LICENSE.md).

## Contributors

Contributions are welcome! Please feel free to submit a Pull Request.

<a href="https://github.com/vueframe/vueframe/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=vueframe/vueframe" />
</a>