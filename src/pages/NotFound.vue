<template>
  <section>
    <base-card>
      <h2>Page not Found</h2>
      <p>
        This page could not be found - maybe check out all our
        <router-link :to="coachesLink">
          coaches
        </router-link>
      </p>
    </base-card>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFound',
  computed: {
    coachesLink() {
      return {name: 'CoachesList'};
    }
  }
});
</script>
