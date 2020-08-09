<template>
  <input
    type="text"
    class="block text-gray-700 font-bold w-full p-1"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  data() {
    return { value: '' };
  }
};
</script>
