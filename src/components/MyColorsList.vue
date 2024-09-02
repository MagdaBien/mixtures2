<template>
  <!-- mixtures -->
  <ul class="mixtures">
    <flask-item
      :key="index"
      v-for="(color, index) in colors"
      :buttonsVisible="false"
      :buttonsDeleteVisible="true"
      :size="15"
      :color="mixtureEffectFill(color)"
      :amount="100"
      @click="removeMyColor(color)"
    />
  </ul>
</template>

<script>
import FlaskItem from './shared/FlaskItem'
const rgbToHex = require('../utils/rgbToHex')
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'MyColorsList',
  components: { FlaskItem },
  computed: mapGetters({ colors: 'RGBColors' }),
  methods: {
    ...mapMutations({ removeColor: 'REMOVE_COLOR' }),
    mixtureEffectFill(colorRGB) {
      const colorHEX = rgbToHex(...colorRGB)
      //console.log('mixtureEffectFill: ', colorRGB, colorHEX)
      return colorHEX
    },
    removeMyColor(colorRGB) {
      this.removeColor(colorRGB)
    }
  }
}
</script>

<style scoped lang="scss">
.mixtures {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}
</style>
