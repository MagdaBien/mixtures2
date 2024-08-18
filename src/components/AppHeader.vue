<template>
  <header>
    <h1 class="heading" v-text="'RGB Color Mixture'" />
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.heading {
  font-size: 3rem;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
