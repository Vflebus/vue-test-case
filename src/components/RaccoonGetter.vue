<template>
  <div class="getter column-center">
    <h2>RACCOON</h2>
    <div v-if="!this.$store.state.animals.loadingRaccoon" class="getterInfos column-center">
      <img :src="this.$store.state.animals.raccoon.image" />
      <p>{{ this.$store.state.animals.raccoon.fact }}</p>
    </div>
  </div>
</template>
  
<script>
export default {
  created() {
    console.log(!this.$store.state.animals.loadingRaccoon);
    this.$store.dispatch("getRaccoonAction");
  },
  updated() {
  },
};
</script>
  
<style lang="scss">

</style>