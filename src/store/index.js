import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: [
      { red: 10, green: 20, blue: 30 },
      { red: 20, green: 120, blue: 90 }
    ],
    mixtures: [
      {
        variant: 'red',
        amount: 20
      },
      {
        variant: 'green',
        amount: 70
      },
      {
        variant: 'blue',
        amount: 40
      }
    ]
  },
  mutations: {
    ADD_COLOR(state, color) {
      state.colors.push(color)
    },
    REMOVE_COLOR(state, color) {
      const index = state.colors.findIndex(
        (c) => c.red === color[0] && c.green === color[1] && c.blue === color[2]
      )
      if (index !== -1) {
        state.colors.splice(index, 1)
      }
    },
    SET_MIXTURE_AMOUNT(state, { index, amount }) {
      state.mixtures[index].amount = amount
    },
    RESET_MIXTURES(state) {
      state.mixtures = state.mixtures.map((item) => ({ ...item, amount: 50 }))
    }
  },
  getters: {
    RGBColors(state) {
      return state.colors.map((color) => [color.red, color.green, color.blue])
    },
    COLOR_COUNT(state) {
      return state.colors.length
    },
    mixtures(state) {
      return state.mixtures
    }
  },
  actions: {
    addColor({ commit }, colors) {
      if (colors.length === 3) {
        const [red, green, blue] = colors.map((item) =>
          Math.floor(item.amount * 2.5)
        )
        commit('ADD_COLOR', { red, green, blue })
      }
    },
    setMixtureAmount({ commit }, payload) {
      commit('SET_MIXTURE_AMOUNT', payload)
    },
    resetMixtures({ commit }) {
      commit('RESET_MIXTURES')
    }
  }
})
