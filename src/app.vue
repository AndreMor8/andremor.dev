<template>
  <router-view style="padding: 2rem !important;"></router-view>
</template>

<style>
html {
  background-image: linear-gradient(rgba(220, 220, 220, 0.80), rgba(220, 220, 220, 0.80)), url("./assets/background.webp");
}

ul {
  display: table;
  list-style: inside;
}

.box {
  text-align: -webkit-center;
  overflow-wrap: anywhere;
}

.hide {
  display: none !important;
}

@import 'bulma/css/bulma.min.css';
@import 'bulma-prefers-dark/css/bulma-prefers-dark.css';
@import 'lite-youtube-embed/src/lite-yt-embed.css';

@media (prefers-color-scheme: dark) {
  html {
    background-image: linear-gradient(rgba(10, 10, 10, .94), rgba(10, 10, 10, .94)), url("./assets/background.webp");
  }
}
</style>

<script>
import 'lite-youtube-embed';
export default {};
</script>