<script lang="ts">
    import { match } from "./match.js" 
    
    interface Props {
        id: string;
        poster?: string;
        posterquality?: "max" | "high" | "default" | "low";
        params?: string;
        ratio?: string;
        title?: string;
    }

    let { id, poster, posterquality = "default", params, ratio = "16:9", title }: Props = $props();

    let a = $state(false);

    let v = $derived(match(id));

    let m = $derived({
        max: 'maxresdefault',
        high: 'sddefault',
        default: 'hqdefault',
        low: 'default',
    }[posterquality] || 'hqdefault');

    let s = $derived(poster || `https://i.ytimg.com/vi_webp/${v}/${m}.webp`);

    let r = $derived(ratio.split(':').join(' / '));

    function p() {
        let u = new URLSearchParams(params || '');
        u.set('autoplay', '1');
        u.set('playsinline', '1');
        return u.toString();
    }

    async function c(event: MouseEvent) {
        if (!(event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            a = true;
        }
    }
	
    $effect(() => {
        let { head } = document;
        for (let url of [
            "https://www.youtube.com",
            "https://www.google.com",
            "https://googleads.g.doubleclick.net", 
            "https://static.doubleclick.net",
            "https://gstatic.com",
            "https://i.ytimg.com",
        ]) if (!head.querySelector(`link[href="${url}"]`)) {
            head.append(Object.assign(document.createElement('link'), { rel: 'preconnect', href: url }));
        }
    });
</script>

<a 
    href="https://www.youtube.com/watch?v={v}"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={title}
    {title} 
    style={`background-image: url('${s}');aspect-ratio: ${r || "16 / 9"};`}
    onclick={c}
>
    {#if a}
        <iframe 
            src="https://www.youtube.com/embed/{v}?{p()}" 
            aria-label={title}
            {title} 
            width="720"
            height="405"
            frameborder="0" 
            credentialless
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy"
        ></iframe>
    {:else}
        <button type="button" aria-label="button"></button>
    {/if}
</a>

<style>
    a {
        aspect-ratio: 16 / 9;
        width: 100%;
        max-width: 720px;
        align-items: center;
        justify-content: center;
        display: block;
        overflow: hidden;
        position: relative;
        contain: content;
        background-position: center center;
        background-size: cover;
        border: none;
        outline: none;
        text-decoration: none;
        cursor: pointer;
    }

    a > button {
        display: block;
        width: 68px;
        height: 48px;
        background: no-repeat center/68px 48px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');
        position: absolute;
        transform: translate3d(-50%, -50%, 0);
        top: 50%;
        left: 50%;
        cursor: pointer;
        filter: grayscale(100%);
        transition: filter .1s cubic-bezier(0, 0, 0.2, 1);
        border: 0 !important;
        outline: 0 !important;
    }

    a:hover > button,
    a button:focus {
        filter: none;
    }

    a > iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        border: 0;
    }
</style>