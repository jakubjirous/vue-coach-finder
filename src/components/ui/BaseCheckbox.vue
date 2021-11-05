<template>
  <label
    :for="id"
    class="label">
    {{ label }}
    <input
      :id="id"
      v-model="computedValue"
      :checked="checked"
      :disabled="disabled"
      :name="name"
      :value="value"
      type="checkbox">
    <span class="checkmark"></span>
  </label>
</template>
<script>
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseCheckbox',
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
    },
    modelValue: {
      type: [Boolean, String, Number, Array],
    },
    value: {
      type: [String, Number, Array],
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
  },
  emits: ['update:modelValue'],
  setup: (props, { emit }) => {
    const computedValue = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit('update:modelValue', value);
      },
    });
    return { computedValue };
  },
  methods: {
    // onChange(event) {
    //   this.$emit('change', {
    //     id: event.target.id,
    //     checked: event.target.checked
    //   });
    // }
  }
});
</script>

<style lang="scss" scoped>
.label {
  display: inline-block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
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
