<template>
  <div class="input__wrapper">
    <label class="input__label">
      {{label}}
      <button type="button" class="input__base" :class="{ 'input__base--active': isActive }" @focus="isActive=!isActive" @blur="isActive = false">
        <p class="input__value">
          {{selectObject}}
        </p>
        <svg class="input__icon" viewBox="0 0 20 16" width="20" height="16" aria-hidden="true" style="display: block;">
          <path fill-rule="evenodd" d="M4.22 5.875a1 1 0 0 1 1.405-.156L10 9.22l4.375-3.5a1 1 0 0 1 1.25 1.562l-5 4a1 1 0 0 1-1.25 0l-5-4a1 1 0 0 1-.156-1.406Z" clip-rule="evenodd" />
        </svg>
      </button>
      <ul class="input__list" :class="{ 'input__list--active': isActive }">
        <li v-for="(obj, index) in modelValue" :key="index" class="input__item">
          <button class="input__button" @mousedown="newSelect(obj)">
            {{obj}}
          </button>
        </li>
      </ul>
      <select v-model="selectObject" class="input__none">
        <option v-for="(obj, index) in modelValue" :key="index" :value="obj" />
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: 'TheDropdownComponent',
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    defaultValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectObject: '',
      isActive: false,
    };
  },
  created() {
    this.selectObject = this.defaultValue;
  },
  methods: {
    newSelect(value) {
      this.selectObject = value;
      this.$emit('update:model-value', this.selectObject);
    },
  },
};

</script>

<style lang="scss" scoped>
.input__wrapper {
  display: flex;
  flex-direction: column;
  min-width: 192px;
  margin-bottom: 12px;
  z-index: 3;
}

.input__label {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: #6f645d;
  font-weight: 400;
  font-size: 14px;
}

.input__none {
  display: none;
}

.input__base {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
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
  &:hover {
    border: 0.5px solid rgba(0, 0, 0, 0.24);
  }
  &--active {
    border: 0.5px solid #eb6826;
    border-radius: 8px 8px 0 0;
    &:hover {
      border: 0.5px solid #eb631f;
    }
    & .input__icon {
      transform: rotate(180deg);
    }
  }
}

.input__base

.input__base:focus {
  outline: none;
}

.input__list {
  position: absolute;
  cursor: pointer;
  display: none;
  top: 68.5px;
  width: 100%;
  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.12);
  border-radius: 0 0 8px 8px;
  border-top:none;
  &--active {
    display: flex;
    flex-direction: column;
    // border: 0.5px solid #eb6826;
  }
}

.input__item {
  &:hover {
    background-color: #eb631f10;
  }
}

.input__icon {
  fill: #99a2ad;
}

.input__button {
  cursor: pointer;
  border: none;
  background: none;
  width: 100%;
  padding: 6px 10px;
  text-align: left;
}
</style>
