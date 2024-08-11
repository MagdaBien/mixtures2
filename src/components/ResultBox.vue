<template>
  <div>
    <!-- text between -->
    <p v-text="'And the result...'" />

    <!-- mixture effect -->
    <flask-item
      :buttonsVisible="false"
      :style="flaskStyles"
      :size="15"
      :color="mixtureEffectFill"
      :amount="100"
    />

    <!-- refresh btn -->
    <button-item
      @click="$emit('refresh')"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="sync"
    />
  </div>
</template>

<script>
import ButtonItem from './shared/ButtonItem'
import FlaskItem from './shared/FlaskItem'

export default {
  name: 'ResultsBox',
  components: {
    ButtonItem,
    FlaskItem
  },
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  computed: {
    mixtureEffectFill() {
      const [redCol, greenCol, blueCol] = this.mixtures.map((item) =>
        Math.floor(item.amount * 2.5)
      )
      return rgbToHex(redCol, greenCol, blueCol)
    },
    flaskStyles() {
      return {
        margin: `3rem auto`
      }
    }
  }
}

function rgbToHex(r, g, b) {
  const toHex = (component) => {
    const hex = component.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
</script>
