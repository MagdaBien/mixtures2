import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'
import Aura from '@primevue/themes/aura'

import App from './App.vue'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.mount('#app')
