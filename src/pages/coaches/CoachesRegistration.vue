<template>
  <base-card>
    <section>
      <h2>Register as a coach now!</h2>
    </section>
    <coach-form @save-data="saveData" />
  </base-card>
</template>

<script>
import { defineComponent } from 'vue';
import CoachForm from '../../components/coaches/CoachForm';

export default defineComponent({
  name: 'CoachesRegistration',
  components: {
    CoachForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace({name: 'CoachesList'});
    }
  }
});
</script>
