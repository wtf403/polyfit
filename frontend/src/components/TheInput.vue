<template>
  <div class="input__wrapper">
    <label class="input__label">
      {{label}}
      <input
        class="input__base"
        v-bind="$attrs"
        @input="$emit('update:model-value', $event.target.value)"
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

<style scoped>

.input__wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}

.input__label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: #6f645d;
  font-weight: 400;
  font-size: 14px;
}

.input__base {
  width: 100%;
  height: 44px;
  padding: 12px;
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
