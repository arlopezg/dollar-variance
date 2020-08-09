<template>
  <div class="card bg-white shadow rounded" :class="[paddingClass]">
    <h2 v-if="title" class="text-blue-600">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    padding: { type: Number, default: 3 }
  },
  computed: {
    paddingClass() {
      return 'p-' + this.padding;
    }
  }
};
</script>
