<template>
  <div>
    <the-header />
    <router-view v-slot="slotProps">
      <transition
        name="router"
        mode="out-in">
        <component :is="slotProps.Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TheHeader from './components/layout/TheHeader';

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },
  watch: {
    didAutoLogout(currentValue, previousValue) {
      if (currentValue && currentValue !== previousValue) {
        this.$router.replace({name: 'CoachesList'});
      }
    }
  },
  created() {
    this.$store.dispatch('tryAutoLogin');
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.router-enter-from, .router-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.router-enter-active {
  transition: all 300ms ease-out;
}

.router-leave-active {
  transition: all 300ms ease-in;
}

.router-enter-to, .router-leave-from {
  opacity: 1;
  transform: translateY(30px);
}
</style>
