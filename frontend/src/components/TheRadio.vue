
<template>
  <div class="radio__wrapper">
    <ul class="radio__list">
      <li v-for="(item, index) in radioContent" :key="index" class="radio__item">
        <label :for="index" class="radio__label" :class="(radioActive == index)?'radio__label--active':''">
          <input :id="index" v-model="radioActive" :value="index" class="radio__base" type="radio" name="radio" @change="RadioEmit(item)">
          {{item}}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RadioComponent',
  props: {
    radioContent: {
      type: Object,
      default: null,
    },
    modelValue: {
      type: Object,
      default: null,
    },
    radioSelected: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      radioActive: '',
    };
  },
  created() {
    this.radioActive = this.radioSelected;
  },
  methods: {
    RadioEmit(item) {
      this.$emit('update:model-value', item);
    },
  },
};

</script>

<style scoped>

.radio__wrapper {
  display: flex;
  flex-direction: column;
  margin: 6px 0 4px;
  margin-bottom: 12px;
}

.radio__list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.radio__label {
  display: flex;
  align-items: center;
  color: black;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
}

.radio__label::before {
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  margin-right: 0.4em;
  background-color: #f5f5f5ed;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  border: 1px solid #adb5bd;
  border-radius: 1em;
  content: '';
}

.radio__base {
  position: absolute;
  z-index: -1;
  opacity: 0;
}


.radio__label--active::before {
  background-color: #1070ff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  border-color: #1070ff;
}
</style>
