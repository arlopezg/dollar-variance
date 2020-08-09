<template>
  <select
    v-model="value"
    class="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
    @change="$emit('input', value)"
  >
    <slot></slot>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
      validator(options = []) {
        const validOptions = options.every((option = {}) => option.label);

        if (!validOptions) {
          throw new Error('All options must have a `label` and `value` fields');
        }

        return true;
      }
    }
  },
  data() {
    return { value: undefined };
  }
};
</script>
