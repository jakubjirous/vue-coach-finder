<template>
  <fragment>
    <h1>Coaches Detail</h1>
    <router-view />
    <router-link :to="contactCoachLink" />
  </fragment>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoachesDetail',
  computed: {
    contactCoachLink() {
      return {
        name: 'ContactCoach',
        // params: {
        //   coachId: 'c1',
        // },
      };
    },
  },
});
</script>
