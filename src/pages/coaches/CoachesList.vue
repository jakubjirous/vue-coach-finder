<template>
  <fragment>
    <section>
      Filter
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button>
            Refresh
          </base-button>
          <base-button
            :to="coachesRegistrationLink"
            is-link>
            Register as Coach
          </base-button>
        </div>
        <ul v-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :id="coach.id"
            :key="coach.id"
            :areas="coach.areas"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate" />
        </ul>
        <h3 v-else>
          No coaches found.
        </h3>
      </base-card>
    </section>
  </fragment>
</template>

<script>
import { defineComponent } from 'vue';
import CoachItem from '../../components/coaches/CoachItem';
import BaseButton from '../../components/ui/BaseButton';

export default defineComponent({
  name: 'CoachesList',
  components: {
    BaseButton,
    CoachItem
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
    coachesRegistrationLink() {
      return { name: 'CoachesRegistration' };
    }
  }
});
</script>


<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
