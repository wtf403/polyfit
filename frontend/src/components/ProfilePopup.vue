<template>
  <div v-if="isOpen" class="backdrop" @click="close">
    <div class="popup" @click.stop>
      <slot />
      <div class="popup__footer">
        <slot name="actions" :close="close" :confirm="confirm">
          <button @click="close">
            Отмена
          </button>
          <button @click="confirm">
            Ok
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  currentPopupController: null,

  data() {
    return { isOpen: false };
  },

  mounted() {
    document.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  },

  methods: {
    handleKeydown(e) {
      if (this.isOpen && e.key === 'Escape') {
        this.close();
      }
    },

    open() {
      let resolve;
      let reject;
      const popupPromise = new Promise((ok, fail) => {
        resolve = ok;
        reject = fail;
      });

      this.$options.popupController = { resolve, reject };
      this.isOpen = true;

      return popupPromise;
    },

    confirm() {
      this.$options.popupController.resolve(true);
      this.isOpen = false;
    },

    close() {
      this.$options.popupController.resolve(false);
      this.isOpen = false;
    },
  },
};
</script>

<style>
.popup {
  position: fixed;
  top: auto;
  bottom: auto;
  left: 50%;
  z-index: 101;
  max-width: 820px;
  padding: 40px;
  background-color: white;
  border-radius: 18px;
  transform: translateX(-50%);
}

.popup h1 {
  margin: 0;
  text-align: center;
}

.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
}

</style>
