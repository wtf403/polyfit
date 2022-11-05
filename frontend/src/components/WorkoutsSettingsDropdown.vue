<template>
  <div class="dropdown__block">
    <div class="dropdown__wrapper">
      <p class="dropdown__selected-text">
        {{dropdownSelected}}
      </p>
      <button class="dropdown__dropdown-button" @click="DropdownActivation">
        <svg class="dropdown__dropdown-icon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 1.12639C8.81658 0.735865 8.18342 0.735865 7.79289 1.12639L5 3.91928L2.20711 1.12639C1.81658 0.735865 1.18342 0.735865 0.792894 1.12639C0.402369 1.51691 0.402369 2.15008 0.792894 2.5406L4.29289 6.0406C4.68342 6.43113 5.31658 6.43113 5.70711 6.0406L9.20711 2.5406C9.59763 2.15008 9.59763 1.51691 9.20711 1.12639Z" fill="#777E91" />
        </svg>
      </button>
    </div>
    <div v-if="dropdownActive" class="dropdown__content">
      <a v-for="(link,index) in dropdownContent" :key="index" class="dropdown__link" href="#" @click="DropdownSelect(link)">
        {{link}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownComponent',
  props: ['dropdownContent'],
  data() {
    return {
      dropdownSelected: 'По новизне',
      dropdownActive: false,
    };
  },
  methods: {
    DropdownActivation() {
      this.dropdownActive = !this.dropdownActive;
    },
    DropdownSelect(object) {
      this.dropdownSelected = object;
      this.dropdownActive = !this.dropdownActive;
    },
  },
};
</script>

<style scoped>
.dropdown__block {
  position: relative;
}

.dropdown__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 210px;
  height: 48px;
  padding: 8px 8px 8px 16px;
  background: white;
  border: 2px solid #e6e8ec;
  border-radius: 12px;
}

.dropdown__selected-text {
  color: #23262f;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.1;
}

.dropdown__dropdown-button {
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 4px;
  background: none;
  border: 2px solid #e6e8ec;
  border-radius: 100px;
  cursor: pointer;
}

.dropdown__content {
  position: absolute;
  bottom: -94px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 210px;
  padding: 20px 16px 12px;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #e6e8ec;
  border-top: none;
  border-radius: 0 0 8px 8px;
  backdrop-filter: blur(8px);
}

.dropdown__link {
  color: #23262f;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.1;
}
</style>
