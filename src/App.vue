<template>
  <fragment>
    <the-header />
    <router-view />
  </fragment>
</template>

<script>
import { defineComponent } from 'vue';
import TheHeader from './components/layout/TheHeader';

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
  },
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
</style>
