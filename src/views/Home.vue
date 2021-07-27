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
      <youtube-vue3 videoid="clE9Qg8_q88" :autoplay="0" />
      <br /><br />
      <a href="https://wubbzy.fandom.com/wiki/User:AndreMor"
        ><span>Go to my user page on Wubbzypedia</span></a
      >
      <p>
        <span>My Discord: {{ andremor }}</span>
      </p>
      <p>
        <span
          >My email:
          <a href="mailto:andre@gidget.xyz">andre@gidget.xyz</a></span
        >
      </p>
      <p>
        <span
          >My GitHub: <a href="https://github.com/AndreMor8">AndreMor8</a></span
        >
      </p>
    </div>
    <div id="home-right">
      <h1>
        <span>My other projects</span>
      </h1>
      <p>
        <span><a href="https://gidget.xyz">Gidget bot and dashboard</a></span>
      </p>
      <p>
        <span><a href="https://wubbworld.xyz">Wubbworld website</a></span>
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
          ><a href="https://discord.gg/g6ssSmK">MyBOT Team</a> (Discord bot
          related things)</span
        >
      </p>
      <p>
        <span
          ><a href="https://discord.gg/W2PYJA5rMd">Sonicrush007's server</a>
          (Testing with VMs)</span
        >
      </p>
      <div v-if="loaded">
        <h1>
          <span>What am I thinking/doing?</span>
        </h1>
        <p>
          <span><b>Status</b> -> {{ getStatus }} </span>
        </p>
        <Presence
          v-for="activity of activities"
          :key="activity.id"
          :type="activity.type"
          :state="activity.state"
          :name="activity.name"
          :emoji="activity.emoji"
          :details="activity.details"
        ></Presence>
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
  #youtube-vue-player-soma {
    width: auto !important;
  }
}
</style>

<script>
import Presence from "../components/presence.vue";
import { YoutubeVue3 } from "youtube-vue3";
export default {
  props: ["andremor"],
  data: function () {
    return { loaded: false, status: "offline", activities: [] };
  },
  name: "Home",
  components: { YoutubeVue3, Presence },
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
    getStatus() {
      const types = {
        online: "🟢 Online",
        idle: "🟡 Idle",
        dnd: "🔴 Do not disturb",
        offline: "⚫ Offline",
      };
      return types[this.status];
    },
  },
  created: function () {
    this.getPresence();
  },
  methods: {
    getPresence() {
      this.axios.get("https://gidget.xyz/api/presence").then((e) => {
        this.status = e.data.status;
        this.activities = this.activities.concat(e.data.activities);
        this.loaded = true;
      });
    },
  },
};
</script>
