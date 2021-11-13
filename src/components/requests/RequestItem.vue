<template>
  <li>
    <div>
      <a :href="emailLink">
        {{ email }}
      </a>
      <p>
        {{ message }}
      </p>
    </div>
  </li>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RequestItem',
  props: {
    email: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
  },
  computed: {
    emailLink() {
      return `mailto:${this.email}`;
    }
  }
});

</script>

<style lang="scss" scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;

  &:hover,
  &:active {
    color: #8d007a;
  }
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
