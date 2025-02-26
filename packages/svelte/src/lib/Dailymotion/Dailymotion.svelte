<script lang="ts">
    import { match } from "./match.js";

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
		max: '100',
		high: '80',
		default: '60',
		low: '40',
    }[posterquality] || '60';

    let s = poster || `https://wsrv.nl/?url=https://www.dailymotion.com/thumbnail/video/${v}&output=webp&q=${m}`;

    function p() {
        let u = new URLSearchParams(params || '');
        u.set('autoplay', 'true');
        return u.toString();
    }

    $effect(() => {
        let { head } = document;
        for (let url of [
            "https://api.dailymotion.com",
            "https://geo.dailymotion.com", 
            "https://www.dailymotion.com",
            "https://wsrv.nl",
            "https://gstatic.com"
        ]) if (!head.querySelector(`link[href="${url}"]`)) {
            head.append(Object.assign(document.createElement('link'), { rel: 'preconnect', href: url }));
        }
    });
</script>

<div aria-label="Dailymotion Embed" style={`background-image: url('${s}');`}>
    {#if a}
        <iframe 
            src="https://geo.dailymotion.com/player.html?video={v}&{p()}" 
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
            <span>
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.72 22.26L15.72 10.26C15.12 9.95997 14.4 9.98997 13.83 10.35C13.26 10.71 12.9 11.34 12.9 12L12.9 36C12.9 36.69 13.26 37.29 13.83 37.65C14.13 37.83 14.49 37.95 14.85 37.95C15.15 37.95 15.45 37.89 15.72 37.74L39.72 25.74C40.38 25.41 40.8 24.75 40.8 24C40.8 23.25 40.38 22.59 39.72 22.26Z" fill="currentColor"></path></svg>
            </span>
        </button>
    {/if}
    <noscript>
        <iframe 
            src="https://geo.dailymotion.com/player.html?video={v}&{p()}" 
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
        height: 5rem;
        width: 5rem;
        border-radius: 9999px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
        transition: background-color 0.02s linear;
    }

    div > button span svg {
        height: 4rem;
        width: 4rem;
        color: inherit;
        display: flex;
    }

    div:hover > button span {
        background-color: rgba(255, 255, 255, 0.25);
        opacity: 1;
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