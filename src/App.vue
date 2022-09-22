<template>
  <div v-if="this.$store.state.notifications.length > 0">
    <NotificationMessage :type="this.$store.state.notifications.at(-1).type" :message="this.$store.state.notifications.at(-1).message" :number="this.$store.state.notifications.length"/>
  </div>
  <div id="notifications"></div>
  <div class="column-center" id="app">
    <router-view />
    <nav>
      <router-link to="/">Table test case</router-link> |
      <router-link to="/form">Form test case</router-link> |
      <router-link to="/http">Http test case</router-link>
    </nav>
  </div>
</template>

<script>
import NotificationMessage from './components/NotificationMessage.vue';
export default {
    components: { NotificationMessage }
}
</script>

<style lang="scss">
body {
  width: 100vw;
  #notifications {
    position: absolute;
    top: 1vh;
    right: 1vw;
    display: flex;
    flex-direction: column;
    row-gap: 1vh;
  }
  nav {
    display: flex;
    align-items: center;
    column-gap: 3px;
    height: 10vh;
    position: absolute;
    bottom: 0;
  }
}
.column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
