<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button
            :to="coachContactLink"
            link>
            Contact
          </base-button>
        </header>
        <router-view />
      </base-card>
    </section>
    <section>
      <base-card>
        <div class="badges">
          <base-badge
            v-for="area in areas"
            :key="area"
            :title="area"
            :type="area" />
        </div>
        <p>
          {{ description }}
        </p>
      </base-card>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoachesDetail',
  props: {
    coachId: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      selectedCoach: null
    };
  },
  computed: {
    fullName() {
      return `${this.selectedCoach?.firstName} ${this.selectedCoach?.lastName}`;
    },
    rate() {
      return this.selectedCoach?.hourlyRate;
    },
    areas() {
      return this.selectedCoach?.areas;
    },
    description() {
      return this.selectedCoach?.description;
    },
    coachContactLink() {
      return {
        name: 'CoachContact',
        params: {
          coachId: this.coachId
        }
      };
    },
  },
  created() {
    // fetch coach from Vuex
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => coach.coachId === this.coachId);
  }
});
</script>

<style lang="scss" scoped>
.badges {
  display: flex;
  flex-flow: row;
  justify-content: center;
}
</style>
