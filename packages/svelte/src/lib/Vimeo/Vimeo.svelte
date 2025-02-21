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
        u.append('autoplay', '1');
        return u.toString();
    }

    $effect.root(() => {
        let h = document.head;
        let u = [
            "https://player.vimeo.com",
            "https://i.vimeocdn.com", 
            "https://f.vimeocdn.com",
            "https://fresnel.vimeocdn.com",
            "https://vumbnail.com",
        ].forEach(u => {
            !h.querySelector(`link[href="${u}"]`) && 
            h.appendChild(Object.assign(document.createElement('link'), {
                rel: "preconnect",
                href: u
            }));
        });
    });
</script>

<div style={`background-image: url('${s}');`}>
    {#if a}
        <iframe 
            src="https://player.vimeo.com/video/{v}?{p()}" 
            title={title}
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
    {:else}
        <button type="button" onclick={() => a = true} aria-label="play">
            <div class="play"></div>
        </button>
    {/if}
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
        cursor: pointer;
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

    div > button .play {
        font-size: 10px;
        padding: 0;
        width: 6.5em;
        height: 4em;
        background: rgba(23, 35, 34, .75);
        opacity: .8;
        border-radius: .5em;
        transition: opacity .2s ease-out, background .2s ease-out;
    }

    div:hover > button .play {
        background-color: rgb(0, 173, 239);
        opacity: 1;
    }

    div > button .play::before {
        content: '';
        border-style: solid;
        border-width: 10px 0 10px 20px;
        border-color: transparent transparent transparent #fff;
    }

    div > button .play::before {
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