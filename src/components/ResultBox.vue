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

    <!-- color result -->
    <p>
      Color result: RGB({{ mixtureComponents.redCol }},
      {{ mixtureComponents.greenCol }}, {{ mixtureComponents.blueCol }})
    </p>

    <!-- 3xbtn -->
    <div>
      <router-link
        v-for="item in items"
        :key="item.label"
        :to="item.label === 'Share' ? pathToShare : item.to"
      >
        <button-item
          @click="item.action"
          :icon="item.icon"
          :size="4"
          :movement="-0.5"
          :font-size="1.5"
        />
      </router-link>
    </div>

    <!-- modal window -->
    <fade-animation>
      <modal-item v-if="modalVisible" @cancel="hideModal">
        <template v-slot:header> About the app </template>
        <template v-slot:body>
          Mix three colors to create the perfect one!
        </template>
        <template v-slot:footer>
          <button-item icon="pi-thumbs-up" @click="hideModal" />
        </template>
      </modal-item>
    </fade-animation>
  </div>
</template>

<script>
import ButtonItem from './shared/ButtonItem'
import FlaskItem from './shared/FlaskItem'
import ModalItem from './shared/ModalItem'
import FadeAnimation from './shared/FadeAnimation'
import modalMixin from '../mixins/ModalMixin'
const rgbToHex = require('../utils/rgbToHex')

export default {
  name: 'ResultsBox',
  mixins: [modalMixin],
  components: {
    ButtonItem,
    FlaskItem,
    ModalItem,
    FadeAnimation
  },
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      items: [
        {
          label: 'Refresh',
          icon: 'pi-refresh',
          to: '',
          action: () => this.refresh()
        },
        {
          label: 'Modal',
          icon: 'pi-question',
          to: '',
          action: () => this.showModal()
        },
        {
          label: 'Share',
          icon: 'pi-share-alt',
          to: this.pathToShare,
          action: ''
        }
      ]
    }
  },
  computed: {
    mixtureComponents() {
      const [redCol, greenCol, blueCol] = this.mixtures.map((item) =>
        Math.floor(item.amount * 2.5)
      )
      return { redCol, greenCol, blueCol }
    },
    mixtureEffectFill() {
      const color = rgbToHex(
        this.mixtureComponents.redCol,
        this.mixtureComponents.greenCol,
        this.mixtureComponents.blueCol
      )
      return color
    },
    pathToShare() {
      return `/color/${this.mixtureComponents.redCol}/${this.mixtureComponents.greenCol}/${this.mixtureComponents.blueCol}`
    },
    flaskStyles() {
      return {
        margin: `3rem auto`
      }
    }
  },
  methods: {
    refresh() {
      this.$emit('refresh')
    },
    hideModal() {
      this.modalVisible = false
    }
  }
}
</script>

<style lang="scss"></style>
