<template>
  <div v-if="isOpen" class="backdrop" @click="close">
    <div class="popup" @click.stop>
      <button class="popup__close" @click.stop @click="close">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="28" height="28" rx="14" fill="black" fill-opacity="0.35" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.71967 8.71967C9.01256 8.42678 9.48744 8.42678 9.78033 8.71967L14 12.9393L18.2197 8.71967C18.5126 8.42678 18.9874 8.42678 19.2803 8.71967C19.5732 9.01256 19.5732 9.48744 19.2803 9.78033L15.0607 14L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L14 15.0607L9.78033 19.2803C9.48744 19.5732 9.01256 19.5732 8.71967 19.2803C8.42678 18.9874 8.42678 18.5126 8.71967 18.2197L12.9393 14L8.71967 9.78033C8.42678 9.48744 8.42678 9.01256 8.71967 8.71967Z" fill="white" />
        </svg>
      </button>
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
      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
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
      document.getElementsByTagName('html')[0].style.overflow = 'scroll';
    },

    close() {
      this.$options.popupController.resolve(false);
      this.isOpen = false;
      document.getElementsByTagName('html')[0].style.overflow = 'scroll';
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
  width: 80%;
  max-width: 720px;
  max-height: 90vh;
  padding: 40px;
  background-color: white;
  border-radius: 18px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.08);
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

.popup__close {
  position: absolute;
  top: 0;
  right: -40px;
  background: none;
  border: none;
  cursor: pointer;
}


@media screen and (max-width: 900px)
 {
  .popup {
    padding: 20px;
  }
}
</style>
