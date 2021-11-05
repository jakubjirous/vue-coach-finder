<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <base-checkbox
        id="frontend"
        v-model="filters"
        checked
        label="Frontend"
        value="frontend" />
    </span>
    <span class="filter-option">
      <base-checkbox
        id="backend"
        v-model="filters"
        checked
        label="Backend"
        value="backend" />
    </span>
    <span class="filter-option">
      <base-checkbox
        id="career"
        v-model="filters"
        checked
        label="Career"
        value="career" />
    </span>
  </base-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoachFilter',
  emits: ['change-filter'],
  data() {
    return {
      filters: ['frontend', 'backend', 'career'],
    };
  },
  watch: {
    filters(value) {
      this.setFilter(value);
    },
  },
  methods: {
    setFilter(filters) {
      this.filters = filters;
      this.$emit('change-filter', filters);
    }
  }
});

</script>

<style lang="scss" scoped>
h2 {
  margin: 0.5rem 0 1rem 0;
}

.filter-option {
  margin-right: 1.5rem;
}
</style>
