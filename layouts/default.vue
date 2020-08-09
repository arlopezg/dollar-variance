<template>
  <div class="min-h-screen flex flex-col justify-between">
    <Nuxt />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 960px;
  padding: 0 15px;
  @screen md {
    padding: 0;
  }
}
</style>
