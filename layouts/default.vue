<template>
  <div class="flex flex-col justify-between">
    <Nuxt class="min-h-screen" />
    <Footer />
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
