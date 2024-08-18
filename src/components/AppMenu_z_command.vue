<template>
  <div><Menubar :model="items" class="menubar" /></div>
</template>

<script>
import { useRouter } from 'vue-router'
import Menubar from 'primevue/menubar'

export default {
  name: 'AppMenu',
  components: {
    Menubar
  },
  setup() {
    const router = useRouter()

    const items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        command: () => {
          router.push('/')
        }
      },
      {
        label: 'Mixin',
        icon: 'pi pi-fw pi-book',
        command: () => {
          router.push('/mixin')
        }
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-info-circle',
        command: () => {
          router.push('/about')
        }
      }
    ]

    return {
      items
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
