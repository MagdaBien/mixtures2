<template>
  <div class="page">
    <page-title>Home</page-title>
    <Message
      severity="warn"
      class="warn animate__animated animate__bounce animate__delay-2s animate__faster"
      closable
    >
      <template #icon>
        <i class="pi pi-exclamation-triangle"></i>
      </template>
      Warning! This app is still in development...
    </Message>
  </div>
</template>

<script>
import PageTitle from '../components/shared/PageTitle'
import Message from 'primevue/message'

export default {
  name: 'HomePage',
  components: {
    PageTitle,
    Message
  }
}
</script>

<style>
.warn {
  border-left: 5px solid #c27438;
}
</style>
