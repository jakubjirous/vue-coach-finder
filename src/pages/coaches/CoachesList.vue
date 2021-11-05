<template>
  <fragment>
    <section>
      <coach-filter @change-filter="setFilters" />
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline">
            Refresh
          </base-button>
          <base-button
            :to="coachesRegistrationLink"
            link>
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
import CoachFilter from '../../components/coaches/CoachFilter';
import CoachItem from '../../components/coaches/CoachItem';

export default defineComponent({
  name: 'CoachesList',
  components: {
    CoachFilter,
    CoachItem
  },
  data() {
    return {
      activeFilters: ['frontend', 'backend', 'career'],
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {
        if (this.activeFilters.includes('frontend') && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.includes('backend') && coach.areas.includes('backend')) {
          return true;
        }
        return this.activeFilters.includes('career') && coach.areas.includes('career');
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
    coachesRegistrationLink() {
      return { name: 'CoachesRegistration' };
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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
