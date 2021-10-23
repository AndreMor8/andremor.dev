<template>
  <p v-if="type === 4">
    <span>{{ readyEmoji }}{{ state ? " -> " : "" }}{{ state }}</span>
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
  data: function () {
    return {
      readyEmoji: "",
    };
  },
  props: ["type", "state", "name", "emoji", "details"],
  computed: {
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
  methods: {
    getEmoji() {
      if (!this.emoji) undefined;
      else if (!this.emoji.id) this.readyEmoji = this.emoji.name;
      else
        this.readyEmoji = `<img src="https://cdn.discordapp.com/emojis/${this.emoji.id}.png" width="1.375em" height="1.375em">`;
    },
  },
};
</script>