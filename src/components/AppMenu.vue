<template>
  <div><Menubar :model="items" class="menubar" /></div>
</template>

<script>
import Menubar from 'primevue/menubar'

export default {
  name: 'AppMenu',
  components: {
    Menubar
  },
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'Mixin',
          icon: 'pi pi-fw pi-book',
          to: '/mixin'
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-info-circle',
          to: '/about'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.menubar {
  border-radius: 1rem;
  box-shadow: 0 20px 40px 0 rgba(107, 154, 212, 0.3);
  overflow: hidden;
}
</style>
