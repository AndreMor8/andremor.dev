<template>
  <div id="home">
    <div id="home-left">
      <h1><span>Hello World!</span></h1>
      <h2><span>I'm AndreMor</span></h2>
      <div class="resuming">
        <span
          >A {{ myAge }} year old boy who likes computer science, programming
          and cartoon's animation for children.</span
        >
      </div>
      <div><span>Look at the contents that I have now:</span></div>
      <router-link to="my-vm-standard"
        ><p>
          <span>My standard of virtualizers when testing Windows betas</span>
        </p></router-link
      >
      <p><span>Favorite song!:</span></p>
      <youtube-vue3 class="yt-vid" videoid="clE9Qg8_q88" :autoplay="0" />
      <br /><br />
      <a href="https://wubbzy.fandom.com/wiki/User:AndreMor"
        ><span>Go to my user page on Wubbzypedia</span></a
      >
      <p>
        <span
          >My email: <a href="mailto:me@andremor.dev">me@andremor.dev</a></span
        >
      </p>
      <p>
        <span
          >My GitHub: <a href="https://github.com/AndreMor8">AndreMor8</a></span
        >
      </p>
      <p>
        <span><a href="gemini://gmi.andremor.dev">Gemini capsule</a></span>
      </p>
    </div>
    <div id="home-right">
      <h1>
        <span>My other projects</span>
      </h1>
      <p>
        <span
          ><a href="https://gidget.andremor.dev"
            >Gidget bot and dashboard</a
          ></span
        >
      </p>
      <p>
        <span><a href="https://wubbworld.xyz">Wubbworld website</a></span>
      </p>
      <p>
        <span><a href="https://retrokids.cf">Retro Kids</a></span>
      </p>
      <p>
        <span><a href="https://billy-o-reilly.andremor.dev">Billy O'Reilly's build requests website</a></span>
      </p>
      <h1>
        <span>Where do you find me?</span>
      </h1>
      <p>
        <span
          ><a href="https://discord.gg/5qx9ZcV">Wow Wow Discord</a> (Wubbzy
          things)</span
        >
      </p>
      <p>
        <span
          ><a href="https://discord.gg/W2PYJA5rMd">Billy's server</a> (Testing
          with VMs)</span
        >
      </p>
      <div>
        <h1>
          <span>What am I thinking/doing?</span>
        </h1>
        <img id="discord-pr"
          src="https://lanyard.cnrad.dev/api/577000793094488085?idleMessage=I can be studying, sleeping, or in real life"
          alt="Something happened!" width="90%"
        />
      </div>
    </div>
  </div>
</template>

<style>
.resuming {
  padding-bottom: 8px;
}

#home-left {
  display: inline-block;
  position: absolute;
  padding: 11px;
}

#home-right {
  position: absolute;
  right: 0;
  text-align: center;
  display: inline-block;
  padding: 11px;
}

@media only screen and (max-width: 1024px) {
  body {
    text-align: center !important;
  }
  #home-left {
    display: block;
    position: relative;
  }
  #home-right {
    display: block;
    position: relative;
  }
  .yt-vid {
    width: auto !important;
  }
  #discord-pr {
    width: 85%;
  }
}
</style>

<script>
import { YoutubeVue3 } from "youtube-vue3";
export default {
  name: "web-home",
  components: { YoutubeVue3 },
  computed: {
    myAge() {
      //Doing this in milliseconds caused an inaccuracy.
      const birthday = new Date("09 Aug 2004 GMT-5");
      const today = new Date();
      let age = today.getUTCFullYear() - birthday.getUTCFullYear();
      if (today.getUTCMonth() == birthday.getUTCMonth()) {
        if (today.getUTCDate() < birthday.getUTCDate()) age--;
      } else if (today.getUTCMonth() < birthday.getUTCMonth()) age--;
      return age;
    },
  },
};
</script>
