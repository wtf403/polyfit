<template>
  <div v-if="show" class="dialog" @click="hideDialog">
    <div class="dialog__content" @click.stop>
      <div class="dialog__text-block">
        <h2 class="dialog__heading">
          Выберите тренировку
        </h2>
        <p class="dialog__date">
          на 1 ноября 2022
        </p>
      </div>
      <input placeholder="Поиск по тренировкам" type="text" class="dialog__input">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    hideDialog() {
      this.$emit('hideDialog', false);
    },
  },

};
</script>

<style  scoped>
  .dialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    background: rgba(0, 0, 0, 0.5);
  }

  .dialog__content {
    width: 680px;
    height: 870px;
    margin: auto;
    background: #ffffff;
    border-radius: 18px 0 0 18px;
  }
</style>
