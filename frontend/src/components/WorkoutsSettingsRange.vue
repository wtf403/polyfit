<template>
  <div class="range__wrapper">
    <input class="range__input" type="range" readonly min="0" step="1" max="72" data-values="1 71">
    <input class="range__input" type="range" multiple min="0" step="1" max="72" data-values="1 71">
  </div>
</template>

<script>
export default {
  name: 'RangeComponent',
  // props: ['radioContent'],
  data() {
    return {
      radioSelected: 'all',
      radioActive: false,
    };
  },
  methods: {
    radioSelect(object) {
      this.radioSelected = object;
    },
  },
};
</script>

<style scoped>
.range__wrapper {
  position: relative;
  width: 300px;
}

.range__input::-webkit-slider-thumb {
  z-index: 9;
  width: 20px;
  height: 20px;
  background: #f66c1e;
  border-radius: 16px;
  cursor: pointer;
  -webkit-appearance: none !important;
}

.range__input {
  position: absolute;
  width: 100%;
  height: 4px;
  background: #f66c1e29;
  border-radius: 16px;
  -webkit-appearance: none;
}
</style>
