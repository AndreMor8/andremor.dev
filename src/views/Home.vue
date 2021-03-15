<template>
  <div id="home">
    <div id="home-left">
      <h1><span>Hello World!</span></h1>
      <h2><span>I'm AndreMor</span></h2>
      <p>
        <span>I'm hosted this page with a Windows machine. Look at the contents that I have now:</span>
      </p>
      <router-link to="my-vm-standard"><p>
        <span>My standard of virtualizers when testing Windows betas.</span>
      </p></router-link>
      <p><span>Favorite song!:</span></p>
      <iframe
        width="410"
        height="246"
        src="https://www.youtube.com/embed/clE9Qg8_q88"
      >
      </iframe
      ><br /><br />
      <a href="https://wubbzy.fandom.com/wiki/User:AndreMor"
        ><span>Go to my user page on Wubbzypedia</span></a
      >
      <p>
        <span>My Discord: {{ andremor }}</span>
      </p>
      <p>
        <span>My email: <a href="mailto:andre@gidget.xyz">andre@gidget.xyz</a></span>
      </p>
    </div>
    <div id="home-right">
      <h1>
        <span>My other projects</span>
      </h1>
      <p><span><a href="https://gidget.xyz">Gidget bot and dashboard</a></span></p>
      <p><span><a href="https://wubb.ga">WWD website</a></span></p>
      <h1>
        <span>Where do you find me?</span>
      </h1>
      <p><span><a href="https://discord.gg/5qx9ZcV">Wow Wow Discord</a> (Wubbzy things)</span></p>
        <p><span><a href="https://discord.gg/g6ssSmK">MyBOT Team</a> (Discord bot related things)</span></p>
        <p><span><a href="https://discord.gg/W2PYJA5rMd">Sonicrush007's server</a> (Testing with VMs)</span></p>
    </div>
  </div>
</template>

<style>
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
}
</style>

<script>
export default {
  data() {
    return {
      andremor: "..."
    }
  },
  name: "Home",
  created() {
    this.getTag()
  },
  methods: {
    getTag() {
      this.axios.get("https://gidget.xyz/api/andremor").then(e => {
        this.andremor = e.data;
      });
    }
  }
};
</script>
