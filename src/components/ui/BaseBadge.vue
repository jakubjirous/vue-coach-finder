<template>
  <div
    :class="type"
    class="badge">
    {{ text }}
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseBadge',
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    text() {
      return this.title.toLocaleUpperCase();
    }
  }
});

</script>

<style lang="scss" scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  text-transform: capitalize;

  &.frontend {
    background-color: #3d008d;
    color: white;
  }

  &.backend {
    background-color: #71008d;
    color: white;
  }

  &.career {
    background-color: #8d006e;
    color: white;
  }
}
</style>
