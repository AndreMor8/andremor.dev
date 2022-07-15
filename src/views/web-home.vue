<template>
  <div id="home">
    <div id="home-left">
      <div class="box title s-max">
        <h1>Hello World!</h1>
      </div>
      <div class="box s-normal">
        <h2>I'm AndreMor</h2>
      </div>
      <div class="box s-normal">
        <p>A {{ myAge }} year old boy who likes computer science, programming
          and cartoon's animation for children.</p>
      </div>
      <div class="box s-normal">
        <p>Look at the contents that I have now:</p>
      </div>
      <div class="box s-max">
        <p>
          <router-link to="my-vm-standard">My standard of virtualizers when testing Windows betas
          </router-link>
        </p>
      </div>
      <div class="box s-min">
        <p>Favorite song!:</p>
      </div>
      <lite-youtube playlabel="Wow! Wow! Wubbzy! - Pinta lo que quieras (Castellano)" class="yt-vid"
        videoid="red_UM0xLrU" /><br />
      <div class="box s-normal">
        <p><a href="https://wubbzy.fandom.com/wiki/User:AndreMor" target="_blank">Go to my user page on Wubbzypedia</a>
        </p>
      </div>
      <div class="box s-normal">
        <p>
          My email: <a href="mailto:me@andremor.dev">me@andremor.dev</a>
        </p>
      </div>
      <div class="box s-normal">
        <p>
          My GitHub: <a href="https://github.com/AndreMor8" target="_blank">AndreMor8</a>
        </p>
      </div>
      <div class="box s-normal">
        <p>
          <a href="gemini://gmi.andremor.dev">Gemini capsule</a>
        </p>
      </div>
    </div>
    <div id="home-right">
      <div class="box title s-max">
        <h1>
          My other projects
        </h1>
      </div>
      <div class="box s-normal">
        <p>
          <a href="https://gidget.andremor.dev" target="_blank">Gidget bot and dashboard</a>
        </p>
      </div>
      <div class="box s-normal">
        <p>
          <a href="https://wubbworld.xyz" target="_blank">Wubbworld website</a>
        </p>
      </div>
      <div class="box s-normal">
        <p>
          <a href="https://retrokids.eu.org" target="_blank">Retro Kids</a>
        </p>
      </div>
      <div class="box s-max">
        <p>
          <a href="https://billy-o-reilly.andremor.dev" target="_blank">Billy O'Reilly's build requests website</a>
        </p>
      </div>
      <div class="box title s-max">
        <h1>
          Where do you find me?
        </h1>
      </div>
      <div class="box s-normal">
        <p>
          <a href="https://discord.gg/5qx9ZcV" target="_blank">Wow Wow Discord</a> (Wubbzy
          things)
        </p>
      </div>
      <div class="box s-max">
        <p>
          <a href="https://discord.gg/W2PYJA5rMd" target="_blank">Billy's server</a> (Testing
          with VMs)
        </p>
      </div>
      <div class="box title s-max">
        <h1>
          What am I thinking/doing?
        </h1>
      </div>
      <img id="discord-pr"
        src="https://lanyard.cnrad.dev/api/577000793094488085?idleMessage=I can be studying, sleeping, or in real life"
        alt="Something happened!" width="410px" height="210px" />
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

#home-right>.box {
  margin: auto;
}

@media only screen and (max-width: 1024px) {
  body {
    text-align: center !important;
  }

  #home-left {
    display: block;
    position: relative;
  }

  #home-left>.box,
  lite-youtube {
    margin: auto;
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
    height: 85%;
  }
}
</style>

<script>
export default {
  name: "web-home",
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
