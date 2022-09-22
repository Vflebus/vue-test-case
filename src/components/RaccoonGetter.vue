<template>
  <div class="getter column-center">
    <h2>RACCOON</h2>
    <div
      v-if="!this.$store.state.loadingRaccoon"
      class="getterInfos column-center"
    >
      <img :src="this.$store.state.raccoon.image" />
      <p>{{ this.$store.state.raccoon.fact }}</p>
    </div>
  </div>
</template>
  
  <script>
export default {
  created() {
    console.log(!this.$store.state.loadingRaccoon);
    this.$store.dispatch("getRaccoonAction");
  },
  updated() {
    if (!this.$store.state.loadingRaccoon) {
      this.$store.dispatch("newNotificationAction", {
        type: "success",
        message: "successfully loaded Raccoon !",
      });
    }
  },
};
</script>
  
  <style lang="scss">
</style>