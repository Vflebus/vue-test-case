<template>
  <div class="getter column-center">
    <h2>PANDA</h2>
    <div
      v-if="!this.$store.state.animals.loadingPanda"
      class="getterInfos column-center"
    >
      <img :src="this.$store.state.animals.panda.image" />
      <p>{{ this.$store.state.animals.panda.fact }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {
    console.log(!this.$store.state.animals.loadingPanda);
    this.$store.dispatch("getPandaAction");
  },
  updated() {
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