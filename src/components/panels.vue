<template>
    <div id="horizontal" class="column columns container">
        <div class="box column">
            <div class="tabs is-centered is-boxed">
                <ul>
                    <li :class="{ 'is-active': tab1 == 'exp' }">
                        <a href="#" @click.prevent="tab1='exp'">
                            <span>Experiences</span>
                        </a>
                    </li>
                    <li :class="{ 'is-active': tab1 == 'video' }">
                        <a href="#" @click.prevent="tab1='video'">
                            <span>Favorite song</span>
                        </a>
                    </li>
                    <li href="#" :class="{ 'is-active': tab1 == 'links' }">
                        <a href="#" @click.prevent="tab1='links'">
                            <span>Social links</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="container" :class="{ hide: tab1 != 'exp' }">
                <ul>
                    <li><b>Virtual machines</b></li>
                    <li><b>Windows operating system</b></li>
                    <li><b>IaaS-based cloud computing</b></li>
                    <li><b>Back-end development</b></li>
                    <li><b>TV related things</b></li>
                    <li>Front-end development</li>
                    <li>Linux-based distributions</li>
                    <li>Basic maths</li>
                </ul>
            </div>
            <div class="container" :class="{ hide: tab1 != 'video' }" style="display: contents;">
                <lite-youtube playlabel="Wow! Wow! Wubbzy! - Con mis amigos (Latino)" class="yt-vid"
                    videoid="rE72a-u1iNg" />
            </div>
            <div class="container" :class="{ hide: tab1 != 'links' }">
                <ul>
                    <li><a href="https://wubbzy.fandom.com/wiki/User:AndreMor" target="_blank"
                            rel="noreferrer noopener">Wubbzypedia profile</a></li>
                    <li><a href="mailto:me@andremor.dev">me@andremor.dev</a></li>
                    <li><a href="https://github.com/AndreMor8" target="_blank" rel="noreferrer noopener">GitHub</a>
                    </li>
                    <li><a href="gemini://gmi.andremor.dev">Gemini capsule</a></li>
                </ul>
            </div>
        </div>
        <div class="box column">
            <div class="tabs is-centered is-boxed">
                <ul>
                    <li :class="{ 'is-active': tab2 == 'projects' }"><a href="#"
                            @click.prevent="tab2='projects'"><span>Projects</span></a></li>
                    <li :class="{ 'is-active': tab2 == 'presence' }"><a href="#"
                            @click.prevent="tab2='presence'"><span>Discord
                                presence</span></a></li>
                    <li :class="{ 'is-active': tab2 == 'here' }"><a href="#" @click.prevent="tab2='here'"><span>On this
                                website</span></a></li>
                </ul>
            </div>
            <div class="container" :class="{ hide: tab2 != 'projects' }">
                <ul>
                    <li><a href="https://gidget.andremor.dev/" target="_blank" rel="noreferrer noopener">Gidget bot
                            and dashboard</a></li>
                    <li><a href="https://wubbworld.xyz/" target="_blank" rel="noreferrer noopener">Wubbworld
                            website</a></li>
                    <li><a href="https://retrokids.eu.org/" target="_blank" rel="noreferrer noopener">Retro Kids</a>
                    </li>
                    <li><a href="https://billy-o-reilly.andremor.dev/" target="_blank" rel="noreferrer noopener">Billy
                            O'Reilly's build requests website</a>
                    </li>
                </ul>
            </div>
            <div class="container" :class="{ hide: tab2 != 'presence' }">
                <img src="https://lanyard.cnrad.dev/api/577000793094488085?idleMessage=I can be studying, sleeping, or in real life"
                    alt="Something happened!">
            </div>
            <div class="container" :class="{ hide: tab2 != 'here' }">
                <ul>
                    <li>
                        <a href="/my-vm-standard">My standard of virtualizers when testing Windows betas
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
@media screen and (min-width: 1025px) {
    #horizontal {
        align-items: baseline;
    }

    #horizontal>.box {
        width: 36rem;
    }

    .box {
        margin: 1.2rem;
    }
}

@media screen and (max-width: 1024px) {
    .tabs {
        white-space: unset !important;
    }

    #horizontal {
        align-items: center;
        flex-direction: column;
    }

    #horizontal>.box {
        width: auto !important;
    }
}

@media screen and (max-width: 359px) {
    .tabs {
        width: 200px;
        align-self: center;
    }
}
</style>

<script>
import "lite-youtube-embed";
export default {
    data() {
        return {
            tab1: "exp",
            tab2: "projects"
        }
    },

}
</script>