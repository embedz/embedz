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

    let { id, poster, posterquality = "default", params, ratio = "16:9", title, ...other }: Props = $props();

    let a = $state(false);

    let v = $derived(match(id));

    let m = $derived({
        max: 'thumbnail_large',
        high: 'thumbnail_medium',
        default: 'thumbnail_medium',
        low: 'thumbnail_small',
    }[posterquality] || 'thumbnail_medium');

    let s = $derived(poster || `https://vumbnail.com/${v}_${m}.jpg`);

    let r = $derived(ratio.split(':').join(' / '));

    function p() {
        let u = new URLSearchParams(params || '');
        u.set('autoplay', '1');
        u.set('dnt', '1');
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
            "https://player.vimeo.com",
            "https://i.vimeocdn.com", 
            "https://f.vimeocdn.com",
            "https://fresnel.vimeocdn.com",
            "https://gstatic.com",
            "https://vumbnail.com",
        ]) if (!head.querySelector(`link[href="${url}"]`)) {
            head.append(Object.assign(document.createElement('link'), { rel: 'preconnect', href: url }));
        }
    });
</script>

<a 
    href="https://vimeo.com/{v}"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={title}
    {title} 
    style={`background-image: url('${s}');aspect-ratio: ${r || "16 / 9"};`}
    onclick={c}
    {...other}
>
    {#if a}
        <iframe 
            src="https://player.vimeo.com/video/{v}?{p()}" 
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
        <button tabindex="-1" type="button" aria-label="button"></button>
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
        text-decoration: none;
        cursor: pointer;
    }

    a > button {
        display: block;
        position: absolute;
        transform: translate3d(-50%, -50%, 0);
        top: 50%;
        left: 50%;
        font-size: 10px;
        padding: 0;
        width: 6.5em;
        height: 4em;
        background: rgba(23, 35, 34, .75);
        opacity: .8;
        border-radius: .5em;
        transition: opacity .2s ease-out, background .2s ease-out;
        cursor: pointer;
        border: 0 !important;
        outline: 0 !important;
    }

    a:focus > button,
    a:hover > button,
    a > button:focus {
        background-color: rgb(0, 173, 239);
        opacity: 1;
    }

    a > button::before {
        content: '';
        border-style: solid;
        border-width: 10px 0 10px 20px;
        border-color: transparent transparent transparent #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
    }

    a > iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        border: 0;
    }
</style>