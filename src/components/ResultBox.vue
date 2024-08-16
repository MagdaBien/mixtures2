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
      icon="fa-sync"
    />

    <!-- modal show -->
    <button-item
      @click="show"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="fa-question"
    />

    <!-- modal window -->
    <modal-item v-if="this.modalVisible" @cancel="hide">
      <template v-slot:header> About the app </template>
      <template v-slot:body>
        Mix three colors to create the perfect one!
      </template>
      <template v-slot:footer>
        <button-item icon="fa-thumbs-up" @click="hide" />
      </template>
    </modal-item>
  </div>
</template>

<script>
import ButtonItem from './shared/ButtonItem'
import FlaskItem from './shared/FlaskItem'
import ModalItem from './shared/ModalItem'

export default {
  name: 'ResultsBox',
  data: () => ({
    modalVisible: false
  }),
  components: {
    ButtonItem,
    FlaskItem,
    ModalItem
  },
  methods: {
    show() {
      this.modalVisible = true
    },
    hide() {
      this.modalVisible = false
    }
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
