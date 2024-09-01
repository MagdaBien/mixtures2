<template>
  <div id="app">
    <div class="container">
      <!-- header -->
      <app-header />

      <!-- menu -->
      <app-menu />

      <!-- router view -->
      <router-view v-slot="{ Component }">
        <slide-fade-animation class="animate__faster">
          <component :is="Component" />
        </slide-fade-animation>
      </router-view>
    </div>
  </div>
</template>

<script>
import './styles/global.scss'
import AppHeader from './components/AppHeader'
import AppMenu from './components/AppMenu'
import SlideFadeAnimation from './components/shared/SlideFadeAnimation'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMenu,
    SlideFadeAnimation
  }
}
</script>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}
</style>
