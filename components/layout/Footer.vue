<template>
  <footer
    class="relative z-15 w-full bg-blue-900 p-1 text-gray-300 text-center"
  >
    <p>Alejandro López. {{ currentYear }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
