<template>
  <main class="column-center">
    <h1>Http requests test</h1>
    <div class="apiGetters">
        <PandaGetter />
        <RaccoonGetter />
    </div>
  </main>
</template>

<script>
import PandaGetter from "@/components/PandaGetter.vue";
import RaccoonGetter from "@/components/RaccoonGetter.vue";
export default {
  components: { PandaGetter, RaccoonGetter },
};
</script>

<style>
    .apiGetters {
        display: flex;
    }
</style>