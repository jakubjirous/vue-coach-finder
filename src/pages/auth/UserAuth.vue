<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handlerError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog
      :show="isLoading"
      title="Authenticating..."
      fixed>
      <base-spinner />
    </base-dialog>
    <base-card>
      <form
        @submit.prevent="onSubmitForm">
        <div class="form-control">
          <label for="email">E-mail</label>
          <input
            id="email"
            v-model.trim="email"
            type="email">
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            id="password"
            v-model.trim="password"
            type="password">
        </div>
        <p
          v-if="!formIsValid"
          class="errors">
          Please enter a valid e-mail and password (must be at least 6 characters long)
        </p>
        <base-button>{{ submitButtonLabel }}</base-button>
        <base-button
          type="button"
          mode="flat"
          @click="switchAuthMode">
          {{ switchButtonLabel }}
        </base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserAuth',
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      isLoginMode: true,
      isLoading: false,
      error: null,
    };
  },
  computed: {
    switchButtonLabel() {
      return this.isLoginMode ? 'Signup instead' : 'Login instead';
    },
    submitButtonLabel() {
      return this.isLoginMode ? 'Login' : 'Signup';
    },
  },
  methods: {
    async onSubmitForm() {
      this.formIsValid = true;
      if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;
      // send http request
      try {
        await this.$store.dispatch('authUser', {
          email: this.email,
          password: this.password,
          isLoginMode: this.isLoginMode
        });

        const redirectUrl = `/${(this.$route.query.redirect) || 'coaches'}`;
        this.$router.replace(redirectUrl);
      } catch (error) {
        this.error = error.message || 'Failed to authenticate, try again later.';
      }

      this.isLoading = false;
    },
    switchAuthMode() {
      this.isLoginMode = !this.isLoginMode;
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
</style>
