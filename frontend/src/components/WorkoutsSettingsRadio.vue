<template>
  <div class="radio__wrapper">
    <ul class="radio__list">
      <li v-for="(item, index) in radioContent" :key="index" class="radio__item">
        <input :id="index" v-model="radioSelected" :value="index" class="radio__input" type="radio" name="radio" @change="RadioEmit">
        <label class="radio__label" :for="index">
          {{item}}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RadioComponent',
  props: ['radioContent'],
  data() {
    return {
      radioSelected: 'all',
      radioActive: false,
    };
  },
  methods: {
    RadioEmit() {
      this.$emit('get-radio', this.radioSelected);
    },
  },
};
</script>

<style scoped>
.radio {
  position: relative;
}

.radio__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

@media screen and (max-width: 1020px) {
  .radio__list {
    row-gap: 12px;
    column-gap: 4px;
  }
}

.radio__label {
  padding: 6px 12px;
  color: #23262f;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.1;
  white-space: nowrap;
  background-color: none;
  border-radius: 100px;
  cursor: pointer;
}

.radio__input {
  display: none;
}

.radio__input:checked ~ .radio__label {
  padding: 6px 12px;
  color: white;
  background-color: black;
  cursor: default;
}
</style>
