
<template>
  <div class="checkbox__wrapper">
    <label class="checkbox__label" :class="(dataActive)?'checkbox__label--active':''">
      <input
        v-bind="$attrs"
        v-model="dataActive"
        class="checkbox__base"
        @change="$emit('update:model-value', $event.target.checked)"
      >
      {{label}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'TheCheckboxComponent',
  props: {
    label: {
      type: String,
      default: '',
    },

  },
  data() {
    return {
      dataActive: false,
    };
  },
};

</script>

<style scoped>

.checkbox__wrapper {
  display: flex;
  flex-direction: column;
  margin: 6px 0 4px;
  margin-bottom: 12px;
}

.checkbox__label {
  display: flex;
  align-items: center;
  color: black;
  font-weight: 400;
  font-size: 16px;
  font-size: 14px;
  cursor: pointer;
}

.checkbox__label::before {
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
  background-color: #f5f5f5ed;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  content: '';
}

.checkbox__base {
  position: absolute;
  z-index: -1;
  opacity: 0;
}


.checkbox__label--active::before {
  background-color: #1070ff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  border-color: #1070ff;
}
</style>
