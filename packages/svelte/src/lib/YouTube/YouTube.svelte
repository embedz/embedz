<script lang="ts">
    import { match } from "./match.js" 
    
    interface Props {
        id: string;
        poster?: string;
        posterquality?: "max" | "high" | "default" | "low";
        params?: string;
        title?: string;
    }

    let { id, poster, posterquality = "default", params, title }: Props = $props();

    let a = $state(false);

    let v = $derived(match(id));

    let m = $derived({
        max: 'maxresdefault',
        high: 'sddefault',
        default: 'hqdefault',
        low: 'default',
    }[posterquality] || 'hqdefault');

    let s = $derived(poster || `https://i.ytimg.com/vi_webp/${v}/${m}.webp`);

    function p() {
        let u = new URLSearchParams(params || '');
        u.set('autoplay', '1');
        u.set('playsinline', '1');
        return u.toString();
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

<div aria-label="YouTube Embed" style={`background-image: url('${s}');`}>
    {#if a}
        <iframe 
            src="https://www.youtube.com/embed/{v}?{p()}" 
            {title}
            width="640"
            height="360"
            frameborder="0" 
            credentialless
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy"
        ></iframe>
    {:else}
        <button type="button" onclick={() => a = true} aria-label={title} {title}></button>
    {/if}
    <noscript>
        <iframe 
            src="https://www.youtube.com/embed/{v}?{p()}" 
            {title}
            width="640"
            height="360"
            frameborder="0" 
            credentialless
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy"
        ></iframe>
    </noscript>
</div>

<style>
    div {
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
    }

    div > button {
        display: block;
        width: 100%;
        height: 100%;
        background: no-repeat center/68px 48px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');
        position: absolute;
        cursor: pointer;
        z-index: 1;
        filter: grayscale(100%);
        transition: filter .1s cubic-bezier(0, 0, 0.2, 1);
        border: 0 !important;
        outline: 0 !important;
        inset: 0;
    }

    div:hover > button,
    div button:focus {
        filter: none;
    }

    div > iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        border: 0;
        z-index: 2;
    }
</style>