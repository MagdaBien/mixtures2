import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'
import Aura from '@primevue/themes/aura'
import router from './router'
import 'animate.css/animate.min.css'

import App from './App.vue'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.use(router)
app.mount('#app')
