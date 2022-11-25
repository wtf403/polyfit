<template>
  <button class="filters__button" @click="ButtonActive">
    Фильтры
    <svg v-if="buttonActive" class="filters__icon filters__icon--close" width="12" height="12" viewBox="-2 -2 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.861888 0.862254C1.12224 0.601905 1.54435 0.601905 1.8047 0.862254L5.33329 4.39085L8.86189 0.862254C9.12224 0.601905 9.54435 0.601905 9.8047 0.862254C10.065 1.1226 10.065 1.54471 9.8047 1.80506L6.2761 5.33366L9.8047 8.86226C10.065 9.1226 10.065 9.54471 9.8047 9.80506C9.54435 10.0654 9.12224 10.0654 8.86189 9.80506L5.33329 6.27647L1.8047 9.80506C1.54435 10.0654 1.12224 10.0654 0.861888 9.80506C0.601539 9.54471 0.601539 9.1226 0.861888 8.86226L4.39048 5.33366L0.861888 1.80506C0.601539 1.54471 0.601539 1.1226 0.861888 0.862254Z" fill="#FCFCFD" />
    </svg>
    <svg v-if="!buttonActive" height="12px" width="12px" viewBox="-26 -28 20 20" xmlns="http://www.w3.org/2000/svg">
      <path style=" transform: rotate(180deg);fill: white;" d="M24,21a1,1,0,0,1-.71-.29L16,13.41l-7.29,7.3a1,1,0,1,1-1.42-1.42l8-8a1,1,0,0,1,1.42,0l8,8a1,1,0,0,1,0,1.42A1,1,0,0,1,24,21Z" />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'FiltersButtonComponent',
  data() {
    return {
      buttonActive: false,
    };
  },
  methods: {
    ButtonActive() {
      this.buttonActive = !this.buttonActive;
      this.$emit('open-filters');
    },
  },
};
</script>

<style scoped>
.filters__button {
  padding: 16px 24px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  background: #f56514;
  border: none;
  border-radius: 90px;
  cursor: pointer;
}

.filters__button:hover {
  background: #ff5e00;
}
</style>
