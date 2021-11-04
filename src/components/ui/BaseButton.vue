<template>
  <button
    v-if="!isLink"
    :class="mode">
    <slot></slot>
  </button>
  <router-link
    v-else
    :class="mode"
    :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    isLink: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
});

</script>

<style lang="scss" scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;

  &:hover,
  &:active {
    background-color: #270041;
    border-color: #270041;
  }
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;

  &:hover,
  &:active {
    background-color: #edd2ff;
  }
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;

  &:hover,
  &:active {
    background-color: #edd2ff;
  }
}
</style>
