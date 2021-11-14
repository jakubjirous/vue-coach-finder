<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handlerError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilters" />
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button
            mode="outline"
            @click="loadCoaches(true)">
            Refresh
          </base-button>
          <base-button
            v-if="!isLoggedIn"
            :to="authLink"
            link>
            Login
          </base-button>
          <base-button
            v-if="isLoggedIn && !isCoach && !isLoading"
            :to="coachRegistrationLink"
            link>
            Login to Register as Coach
          </base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner />
        </div>
        <ul v-else-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.coachId"
            :coach-id="coach.coachId"
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
  </div>
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
      error: null,
      isLoading: false,
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
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },
    coachRegistrationLink() {
      return {
        name: 'CoachRegistration',
        query: {
          redirect: 'register'
        }
      };
    },
    authLink() {
      return {name: 'UserAuth'};
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    isLoggedIn() {
      return this.$store.getters['isAuthenticated'];
    }
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handlerError() {
      this.error = null;
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
