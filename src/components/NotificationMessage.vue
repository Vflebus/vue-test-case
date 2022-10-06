<template>
  <Teleport to="#notifications">
    <div class="caption" :class="type" ref="notification" @click="deleteNotification">
      {{ message }}
      <div v-if="number > 1" class="numberOfNotifications">
        {{number}}
      </div>
    </div>
  </Teleport>
</template>
    
<script>
import { gsap } from "gsap";
export default {
  props: {
    message: String,
    type: String,
    number: Number,
  },
  mounted() {
    this.captionArrival = gsap.from(this.$refs.notification, {
      right: "-10vw",
      duration: 0.5,
    });
  },
  methods: {
    deleteNotification() {
      this.$store.dispatch('deleteNotificationAction');
    }
  }
};
</script>
    
<style lang="scss" scoped>
.caption {
  position: relative;
  min-height: 5vh;
  min-width: 8vw;
  background-color: grey;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 5%;
  text-align: center;
  cursor: pointer;
  .numberOfNotifications{
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    bottom: 5px;
    left: 5px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.error {
  background-color: red;
}
.success {
  background-color: rgb(0, 255, 0);
}
</style>