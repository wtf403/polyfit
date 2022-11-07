<template>
  <div class="range__wrapper">
    <div class="range__time-board time-board">
      <div class="time-board__field">
        <input type="text" class="time-board__input" disabled :value="rangeMin + ' мин.'">
      </div>
      <div class="time-board__field">
        <input type="text" class="time-board__input" disabled :value="rangeMax + ' мин.'">
      </div>
    </div>
    <div class="range__slider">
      <progress class="range__progress" :style="{ 'left': rangeMin/67*100 + '%', 'width': (rangeMax-rangeMin)/67*100+'%'}" max="67" min="0" :value="67">
        {{rangeMax}}
      </progress>
    </div>
    <div class="range__block">
      <input
        v-model="rangeMin"
        class="range__input range__input--min"
        type="range"
        readonly
        min="0"
        step="1"
        max="67"
        value="0"
        data-values="1 67"
        @change="RangeEmit"
      >
      <input
        v-model="rangeMax"
        class="range__input range__input--max"
        type="range"
        multiple
        min="0"
        step="1"
        max="67"
        value="67"
        data-values="1 67"
        @change="RangeEmit"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'RangeComponent',
  data() {
    return {
      rangeMin: 0,
      rangeMax: 67,
    };
  },
  methods: {
    RangeEmit() {
      if (this.rangeMin > this.rangeMax) { [this.rangeMin, this.rangeMax] = [this.rangeMax, this.rangeMin]; }
      this.$emit('get-range', this.rangeMin, this.rangeMax);
    },
  },
};
</script>

<style scoped>

.range__time-board {
  display: flex;
  justify-content: space-around;
}

.time-board__field {
  margin-bottom: 10px;
}

.time-board__input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 84px;
  height: 28px;
  padding: 8px 8px 8px 16px;
  color: #23262f;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.1;
  background: white;
  border: 2px solid #e6e8ec;
  border-radius: 8px;
}

.range__block {
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
  pointer-events: auto;
}

.range__input {
  position: absolute;
  top: -4px;
  width: 100%;
  height: 4px;
  background: none;
  border-radius: 16px;
  -webkit-appearance: none;
  pointer-events: none;
}

.range__slider{
  position: relative;
  width: 100%;
  height: 5px;
  overflow: hidden;
  background: #f66c1e29;
  border-radius: 5px;
}

.range__progress{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f66c1e;
  border-radius: 5px;
}

.range__progress::-webkit-progress-value {
  display: inline-block;
  float: left;
  height: 5px;
  background: #f66c1e;
  border-radius: 15px;
}

.range__input::-webkit-progress-bar {
  background-color: #f66c1e;
}
</style>
