<template>
  <div class="page">
    <page-title>About</page-title>
    <p>This app was built with Vue.js</p>
    <img
      src="@/assets/logo.png"
      :class="animateClass"
      @click="triggerAnimation"
    />
  </div>
</template>

<script>
import PageTitle from '../components/shared/PageTitle'

export default {
  name: 'AboutPage',
  components: {
    PageTitle
  },
  data() {
    return {
      animateClass: ''
    }
  },
  methods: {
    triggerAnimation() {
      this.animateClass = ''
      setTimeout(() => {
        this.animateClass = 'animate__animated animate__jackInTheBox'
      }, 50)
    }
  },
  mounted() {
    this.animateClass = 'animate__animated animate__jackInTheBox'
  }
}
</script>
