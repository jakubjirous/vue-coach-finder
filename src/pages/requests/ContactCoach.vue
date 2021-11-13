<template>
  <fragment>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handlerError">
      <p>{{ error }}</p>
    </base-dialog>
    <div v-if="isLoading">
      <base-spinner />
    </div>
    <form
      v-else
      @submit.prevent="onSubmitForm">
      <div class="form-control">
        <label for="email">Your E-mail</label>
        <input
          id="email"
          v-model.trim="email"
          type="email">
      </div>
      <div class="form-control">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model.trim="message"
          rows="5"></textarea>
      </div>
      <p
        v-if="!formIsValid"
        class="errors">
        Please enter a valid e-mail and non-empty message.
      </p>
      <div class="actions">
        <base-button>
          Send Message
        </base-button>
      </div>
    </form>
  </fragment>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactCoach',
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = !(this.email === '' ||
        !this.email.includes('@') ||
        this.message === '');
    },
    async onSubmitForm() {
      this.validateForm();
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/contactCoach', {
          coachId: this.$route.params.coachId,
          email: this.email,
          message: this.message,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
      if (this.error === null) {
        this.$router.replace({name: 'CoachesList'});
      }
    },
    handlerError() {
      this.error = null;
    }
  }
});
</script>

<style lang="scss" scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 2rem;
}

.form-control {
  margin: 0.5rem 0 1.5rem 0;

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 0.25rem 0.5rem;

    &:focus {
      border-color: #3d008d;
      background-color: #faf6ff;
      outline: none;
    }
  }
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
