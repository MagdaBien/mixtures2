<template>
  <div>
    <!-- mixtures list -->
    <mixtures-list
      :mixtures="mixtures"
      @increment="increment"
      @decrement="decrement"
    />

    <!-- result box -->
    <result-box @refresh="refresh" :mixtures="mixtures" />
  </div>
</template>

<script>
import MixturesList from './MixturesList'
import ResultBox from './ResultBox'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ColorMixin',
  computed: {
    ...mapGetters(['mixtures'])
  },
  methods: {
    ...mapActions(['setMixtureAmount', 'resetMixtures']),
    increment(index) {
      const mixture = this.mixtures[index]
      if (mixture.amount === 100) return false
      this.setMixtureAmount({ index, amount: mixture.amount + 1 })
    },

    decrement(index) {
      const mixture = this.mixtures[index]
      if (mixture.amount === 0) return false
      this.setMixtureAmount({ index, amount: mixture.amount - 1 })
    },

    refresh() {
      this.resetMixtures()
    }
  },
  components: {
    MixturesList,
    ResultBox
  }
}
</script>
