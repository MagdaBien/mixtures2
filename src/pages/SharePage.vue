<template>
  <div class="page">
    <page-title>Color</page-title>
    <p>
      You've picked a great color! <br />
      RGB({{ $route.params.red }}, {{ $route.params.green }},
      {{ $route.params.blue }})
    </p>

    <!-- mixture effect -->
    <flask-item
      :buttonsVisible="false"
      :style="flaskStyles"
      :size="15"
      :color="mixtureEffectFill"
      :amount="100"
    />

    <i class="pi pi-share-alt"></i>
    <InputText id="linkToShare" v-model="fullUrl" />
  </div>
</template>

<script>
import FlaskItem from '../components/shared/FlaskItem'
import PageTitle from '../components/shared/PageTitle'
const rgbToHex = require('../utils/rgbToHex')
import InputText from 'primevue/inputtext'

export default {
  name: 'SharePage',
  components: {
    FlaskItem,
    PageTitle,
    InputText
  },
  computed: {
    flaskStyles() {
      return {
        margin: `3rem auto`
      }
    },
    mixtureEffectFill() {
      const color = rgbToHex(
        parseInt(this.$route.params.red),
        parseInt(this.$route.params.green),
        parseInt(this.$route.params.blue)
      )
      return color
    },
    fullUrl() {
      const protocol = window.location.protocol
      const host = window.location.host
      const path = this.$route.fullPath

      return `${protocol}//${host}${path}`
    }
  },
  beforeMount() {
    if (
      !this.$route.params.red ||
      !this.$route.params.green ||
      !this.$route.params.blue
    ) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.pi {
  margin-right: 10px;
}
</style>
