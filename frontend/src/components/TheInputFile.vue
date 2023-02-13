<template>
  <div class="input__wrapper">
    <label class="input__label">
      {{label}}
      <input
        v-bind="$attrs"
        v-model="file"
        class="input__base"
        accept="image/*"
        @input="$emit('update:model-value', $event)"
      >
    </label>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>

.input__wrapper {
  cursor: pointer;
  display: flex;
  flex-direction: column;

}

.input__label {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  margin-bottom: 12px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  background: #f5f5f5ed;
  border: 1px dotted rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  gap: 8px;
  color: #6f645d;
  font-weight: 400;
  font-size: 14px;
  &:hover {
    border: 1px dotted rgba(0, 0, 0, 0.24);
    background: #f5f5f5ff;
    color: #403b38;

  }
}

.input__base {
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  background: #f5f5f5ed;
  border: 0.5px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  caret-color: #eb6826;
}

.input__base:hover {
  border: 0.5px solid rgba(0, 0, 0, 0.24);
}

.input__base:focus {
  border: 0.5px solid #eb6826;
  outline: none;
}
</style>
