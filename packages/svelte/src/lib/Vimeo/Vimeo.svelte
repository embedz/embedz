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

    let v = match(id);

    let m = {
        max: 'thumbnail_large',
        high: 'thumbnail_medium',
        default: 'thumbnail_medium',
        low: 'thumbnail_small',
    }[posterquality] || 'thumbnail_medium';

    let s = poster || `https://vumbnail.com/${v}_${m}.jpg`;

    function p() {
        let u = new URLSearchParams(params || '');
        u.set('autoplay', '1');
        return u.toString();
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

<div aria-label="Vimeo Embed" style={`background-image: url('${s}');`}>
    {#if a}
        <iframe 
            src="https://player.vimeo.com/video/{v}?{p()}" 
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
        <button type="button" onclick={() => a = true} aria-label={title} {title}>
            <span></span>
        </button>
    {/if}
    <noscript>
        <iframe 
            src="https://player.vimeo.com/video/{v}?{p()}" 
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
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        cursor: pointer;
        z-index: 1;
        border: 0 !important;
        outline: 0 !important;
        inset: 0;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }

    div > button span {
        font-size: 10px;
        padding: 0;
        width: 6.5em;
        height: 4em;
        background: rgba(23, 35, 34, .75);
        opacity: .8;
        border-radius: .5em;
        transition: opacity .2s ease-out, background .2s ease-out;
    }

    div:hover > button span {
        background-color: rgb(0, 173, 239);
        opacity: 1;
    }

    div > button span::before {
        content: '';
        border-style: solid;
        border-width: 10px 0 10px 20px;
        border-color: transparent transparent transparent #fff;
    }

    div > button span::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
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