<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <label class="label">
        Frontend
        <input
          id="frontend"
          checked="checked"
          type="checkbox"
          @change="setFilter">
        <span class="checkmark"></span>
      </label> 
    </span>
    <span class="filter-option">
      <label class="label">
        Backend
        <input
          id="backend"
          checked="checked"
          type="checkbox"
          @change="setFilter">
        <span class="checkmark"></span>
      </label>
    </span>
    <span class="filter-option">
      <label class="label">
        Career
        <input
          id="career"
          checked="checked"
          type="checkbox"
          @change="setFilter">
        <span class="checkmark"></span>
      </label>
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
      filters: {
        frontend: true,
        backend: true,
        career: true,
      }
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
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

.label {
  display: inline-block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  line-height: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover input ~ .checkmark {
    background-color: rgba(0, 0, 0, 0.26);
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark {
      background-color: #3d008d;

      &:after {
        display: block;
      }
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: rgba(0, 0, 0, 0.16);

    &:after {
      content: "";
      position: absolute;
      display: none;
    }

    &:after {
      left: 6px;
      top: 2px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}
</style>
