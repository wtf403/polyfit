<template>
  <RouterLink v-if="type == 'link'" class="button button--link" :class="{'button--light':light, 'button--outline':outline, 'button--fill':fill, 'button-mini': mini}" :to="to"><slot /></RouterLink>
  <a v-else-if="type == 'alink'" class="button button--link" :class="{'button--light':light, 'button--outline':outline, 'button--fill':fill, 'button-mini': mini}" :href="href">
    <slot />
  </a>
  <button v-else class="button button--default" :class="{'button--light':light, 'button--outline':outline, 'button--fill':fill, 'button-mini': mini, 'button--blue': color=='blue', 'button--black': color=='black'}">
    <slot />
  </button>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  to: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'orange',
  },
  light: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  fill: {
    type: Boolean,
    default: false,
  },
  disable: {
    type: Boolean,
    default: false,
  },
  mini: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.button {
  padding: 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  text-transform: uppercase;
  border-radius: 14px;
  transition: all 0.15s ease;
  border: 1.6px solid transparent;
  cursor: pointer;
  transform: scale(1);

  &:active {
    transform: scale(0.96);
  }

  &--fill {
    background: #f66c1e;
    color: #ffffff;
    &:hover {
      background: #e75c0b;
      color: #ffffff;
    }
  }

  &--light {
    color: #f66c1e;
    text-transform: uppercase;
    background: rgba(246, 108, 30, 0.1607843137);
    &:hover {
      border:1.6px solid#f66c1e;
    }
  }
}
</style>
