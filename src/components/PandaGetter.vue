<template>
  <div class="getter column-center">
    <h2>PANDA</h2>
    <div
      v-if="!this.$store.state.loadingPanda"
      class="getterInfos column-center"
    >
      <img :src="this.$store.state.panda.image" />
      <p>{{ this.$store.state.panda.fact }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
    };
  },
  created() {
    console.log(!this.$store.state.loadingPanda);
    this.$store.dispatch("getPandaAction");
  },
  updated() {
    if (!this.$store.state.loadingPanda) {
      this.$store.dispatch("newNotificationAction", {
        type: "success",
        message: "successfully loaded Panda !",
      });
    }
  },
};
</script>

<style lang="scss">
.getter {
  padding: 2%;
  width: 40vw;
  max-height: 80vh;
  .getterInfos {
    width: 100%;
    img {
      max-width: 100%;
      max-height: 80%;
    }
  }
}
</style>