<template>
  <fragment>
    <section>
      Filter
    </section>
    <section>
      <div class="controls">
        <button @click="onCount">
          Refresh
        </button>
        <router-link :to="{ name: 'CoachesRegistration' }">
          Register as Coach
        </router-link>
        List of coaches
      </div>
    </section>
  </fragment>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoachesList',
});
</script>
