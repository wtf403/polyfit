<template>
  <ul class="profile__purposes-list">
    <li v-for="(purpose,index) in purposes" :key="index" class="profile__purposes-item" :style="{order: -index}">
      <button class="profile__purposes-link" :style="(IdSelectedPurpose == index+1) ? {borderColor: '#F66C1E'} : {borderColor: 'black'}" @click="SelectPurpose(index)">
        <p class="profile__purposes-name" :style="(IdSelectedPurpose == index+1) ? {color: '#F66C1E'} : {color: 'black'}">
          {{purpose.name}}
        </p>
        <div class="prfile__purposes-date">
          <p class="profile__purposes-start">
            c {{purpose.start}}
          </p>
          <p class="profile__purposes-finish">
            по {{purpose.finish}}
          </p>
        </div>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProfilePurposesComponent',
  props: ['purposes'],
  data() {
    return {
      IdSelectedPurpose: 3,
    };
  },
  methods: {
    SelectPurpose(index) {
      this.IdSelectedPurpose = index + 1;
      this.$emit('change-purpose', this.IdSelectedPurpose);
    },
  },
};
</script>

<style scoped>

.profile__purposes-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.profile__purposes-link {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 320px;
  padding: 14px;
  text-align: start;
  background: none;
  border: 1px solid #f76c1e;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.18s ease;
}

.profile__purposes-link:hover {
  background: #ff550012;
  transform: scale(1.02);
}

.profile__purposes-name {
  font-weight: 500;
  font-size: 22px;
  line-height: 1.2;
}

</style>
