<template>
  <router-view />
</template>

<style>
@import 'lite-youtube-embed/src/lite-yt-embed.css';
@import url('https://fonts.googleapis.com/css?family=Dosis:500&display=swap');
body {
  background-image: url("./assets/background.webp");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  font-family: "Dosis", sans-serif;
}

a {
  color: #0000ff;
}

.box {
  background-color: #fffacde0;
  width: fit-content;
  border-radius: 6px;
}

.box.title {
  background-color: #a0f2ffe0;
}

.box > * {
  margin: 0 !important;
  padding: 4px;
}

.s-min:not(:last-child) {
  margin-bottom: 0.2rem !important;
}
.s-normal:not(:last-child) {
  margin-bottom: 0.4rem !important;
}
.s-max:not(:last-child) {
  margin-bottom: 1rem !important;
}
</style>