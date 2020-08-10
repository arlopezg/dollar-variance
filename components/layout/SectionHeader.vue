<template>
  <div>
    <component
      :is="'h' + heading"
      class="section-header font-bold inline"
      :class="[sizing]"
    >
      {{ title }}
    </component>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    heading: { type: Number, default: 2 },
    fontSize: {
      type: String,
      default: 'base',
      validator: (size) => {
        const extraLarges = [1, 2, 3, 4, 5, 6].map((extra) => extra + 'xl');
        const validSizes = ['base', 'xs', 'sm', 'lg', 'xl', ...extraLarges];
        return validSizes.includes(size);
      }
    }
  },
  computed: {
    sizing() {
      return 'text-' + this.fontSize;
    }
  }
};
</script>
