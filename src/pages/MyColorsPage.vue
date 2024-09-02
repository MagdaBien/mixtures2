<template>
  <div class="page">
    <page-title>My Colors </page-title>
    <my-colors-list />
  </div>
</template>

<script>
import PageTitle from '../components/shared/PageTitle'
import MyColorsList from '../components/MyColorsList'

export default {
  name: 'MyColorsPage',
  components: {
    PageTitle,
    MyColorsList
  }
}
</script>
