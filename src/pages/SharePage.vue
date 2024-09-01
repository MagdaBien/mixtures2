<template>
  <div class="page">
    <page-title>Color</page-title>

    <Message v-if="!isValidColor" severity="error" class="er" closable>
      <template #icon>
        <i class="pi pi-times-circle"></i>
      </template>
      This color is invalid! It's not RGB format...
    </Message>

    <div v-else>
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
      <InputText id="linkToShare" v-model="fullUrl" class="linkInput" />
    </div>
  </div>
</template>

<script>
import FlaskItem from '../components/shared/FlaskItem'
import PageTitle from '../components/shared/PageTitle'
const rgbToHex = require('../utils/rgbToHex')
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'

export default {
  name: 'SharePage',
  components: {
    FlaskItem,
    PageTitle,
    InputText,
    Message
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
    },
    isValidColor() {
      const red = parseInt(this.$route.params.red)
      const green = parseInt(this.$route.params.green)
      const blue = parseInt(this.$route.params.blue)

      return (
        !isNaN(red) &&
        red > 0 &&
        red < 256 &&
        !isNaN(green) &&
        green > 0 &&
        green < 256 &&
        !isNaN(blue) &&
        blue > 0 &&
        blue < 256
      )
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
.linkInput {
  width: 340px;
}
.er {
  border-left: 5px solid #c91212;
}
</style>
