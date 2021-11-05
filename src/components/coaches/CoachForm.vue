<template>
  <form @submit.prevent="onSubmitForm">
    <div class="form-control">
      <label for="firstName">First Name</label>
      <input
        id="firstName"
        v-model.trim="firstName"
        type="text">
    </div>
    <div class="form-control">
      <label for="lastName">Last Name</label>
      <input
        id="lastName"
        v-model.trim="lastName"
        type="text">
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model.trim="description"
        rows="5"></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input
        id="rate"
        v-model.number="rate "
        type="number">
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <base-checkbox
          id="frontend"
          v-model="areas"
          label="Frontend Development"
          value="frontend" />
      </div>
      <div>
        <base-checkbox
          id="backend"
          v-model="areas"
          label="Backend Development"
          value="backend" />
      </div>
      <div>
        <base-checkbox
          id="career"
          v-model="areas"
          label="Career Advisory"
          value="career" />
      </div>
    </div>
    <div class="form-button">
      <base-button>
        Register
      </base-button>
    </div>
  </form>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoachForm',
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: []
    };
  },
  computed: {},
  methods: {
    onSubmitForm() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        rate: this.rate,
        areas: this.areas,
      };

      console.log(formData);
    }
  }
});

</script>

<style lang="scss" scoped>
.form-control {
  margin: 0.5rem 0 1.5rem 0;

  h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 0.25rem 0.5rem;
    font: inherit;

    &:focus {
      background-color: #f0e6fd;
      outline: none;
      border-color: #3d008d;
    }
  }

  .invalid label {
    color: red;
  }

  .invalid input,
  .invalid textarea {
    border: 1px solid red;
  }
}

.form-button {
  margin-top: 2rem;
}
</style>
