<template>
  <div class="fog">
    <div class="modal">
      <button-item icon="fa-times" @click="$emit('cancel')" class="close" />
      <header>
        <h1>
          <slot name="header" />
        </h1>
      </header>

      <div class="modal__body">
        <slot name="body" />
      </div>

      <footer>
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<script>
import ButtonItem from './ButtonItem'

export default {
  name: 'ModalItem',
  components: {
    ButtonItem
  }
}
</script>

<style lang="scss">
.fog {
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.modal {
  max-width: 20rem;
  padding: 20px;
  background: #fff;
  margin: auto auto;
  border-radius: 2rem;
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.1);
  color: #637892;

  &__body {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  &__footer {
    button {
      margin: 0.5rem;
    }
  }

  .close {
    float: right;
  }

  h1 {
    margin-top: 60px;
    clear: both;
  }
}
</style>
