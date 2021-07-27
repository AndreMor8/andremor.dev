<template>
  <p v-if="type === 4">
    <span
      ><b>{{ getEmoji }}</b> -> {{ state }}</span
    >
  </p>
  <div v-else>
    <div class="resuming">
      <span
        ><b>{{ getType }}</b> -> {{ name }}</span
      >
    </div>
    <div v-if="details" class="resuming">
      <span>{{ details }}</span>
    </div>
    <div v-if="state">
      <span>{{ state }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type", "state", "name", "emoji", "details"],
  computed: {
    getEmoji() {
      if (!this.emoji.id) return this.emoji.name;
      else
        return `<img src="https://cdn.discordapp.com/emojis/${this.emoji.id}.png" width="1.375em" height="1.375em">`;
    },
    getType() {
      const types = [
        "Playing",
        "Streaming",
        "Listening",
        "Watching",
        "Custom",
        "Competing",
      ];
      return types[this.type];
    },
  },
};
</script>