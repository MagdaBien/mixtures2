<template>
  <Menubar>
    <template v-slot:start>
      <router-link
        v-for="item in items"
        :key="item.label"
        :to="item.to"
        class="p-menuitem-link"
      >
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </router-link>
    </template>
  </Menubar>
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
.p-menuitem-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: inherit;
}

.p-menuitem-link i {
  margin-right: 0.5rem;
}

.menubar {
  border-radius: 1rem;
  box-shadow: 0 20px 40px 0 rgba(107, 154, 212, 0.3);
  overflow: hidden;
}
</style>
