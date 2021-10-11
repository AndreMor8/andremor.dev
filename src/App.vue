<template>
  <router-view :andremor="andremor" />
</template>

<style>
body {
  background-image: url("./assets/background.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  font-family: "Dosis", sans-serif;
}
span {
  background: rgba(243, 247, 129, 0.87);
  padding: 4px;
  border-style: hidden;
  border-radius: 15%;
  font-family: "Dosis", sans-serif;
}
a {
  color: #0000ff;
}
</style>

<script>
export default {
  data() {
    return {
      andremor: "...",
    }
  },
  created() {
    this.getTag()
  },
  methods: {
    getTag() {
      this.axios.get("https://gidget.andremor.dev/api/andremor").then(e => {
        this.andremor = e.data;
      });
    }
  }
}
</script>