<template>
  <form @submit.prevent="onSubmitForm">
    <div
      class="form-control"
      :class="{ invalid: !firstName.isValid }">
      <label for="firstName">First Name</label>
      <input
        id="firstName"
        v-model.trim="firstName.val"
        type="text"
        @blur="clearValidity('firstName')">
      <p v-if="!firstName.isValid">
        First name must not be empty.
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !lastName.isValid }">
      <label for="lastName">Last Name</label>
      <input
        id="lastName"
        v-model.trim="lastName.val"
        type="text"
        @blur="clearValidity('lastName')">
      <p v-if="!lastName.isValid">
        Last name must not be empty.
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model.trim="description.val"
        rows="5"
        @blur="clearValidity('description')"></textarea>
      <p v-if="!description.isValid">
        Description must not be empty.
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input
        id="rate"
        v-model.number="rate.val"
        type="number"
        @blur="clearValidity('rate')">
      <p v-if="!rate.isValid">
        Rate must be grater than 0.
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !areas.isValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <base-checkbox
          id="frontend"
          v-model="areas.val"
          label="Frontend Development"
          value="frontend"
          @blur="clearValidity('areas')" />
      </div>
      <div>
        <base-checkbox
          id="backend"
          v-model="areas.val"
          label="Backend Development"
          value="backend"
          @blur="clearValidity('areas')" />
      </div>
      <div>
        <base-checkbox
          id="career"
          v-model="areas.val"
          label="Career Advisory"
          value="career"
          @blur="clearValidity('areas')" />
      </div>
      <p v-if="!areas.isValid">
        At least one expertise must be selected.
      </p>
    </div>
    <div class="form-button">
      <p v-if="!formIsValid">
        Please fix the above errors and submit again
      </p>
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
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true
      },
      lastName: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      rate: {
        val: null,
        isValid: true
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    onSubmitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        description: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };

      this.$emit('save-data', formData);
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

  &.invalid label {
    color: red;
  }

  &.invalid input,
  &.invalid textarea {
    border: 1px solid red;
  }
}

.form-button {
  margin-top: 2rem;
}
</style>
