<template>
  <router-link :to="{ path: '/exercises/'+exercise.id, query: {item: exercise}}" class="exercises-content__exercises-card exercises-card">
    <img :src="exercise.exerciseImage" alt="Image for exercise" class="exercises__image">
    <div class="exercises__info">
      <h4 class="exercises__name">
        {{exercise.exerciseName}}
      </h4>
    </div>
    <p class="exercises__count">
      {{exercise.exerciseCount}}
    </p>
  </router-link>
</template>

<script>

export default {
  name: 'WorkoutsItemComponent',
  props: ['exercise'],
  data() {
    return {
      // exercise: this.$route.query;
    };
  },
};
</script>

<style lang="scss" scoped>

.exercises-card {
  position: relative;
}
.exercises__image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}

.exercises__info {
  position: absolute;
  padding: 20px;
  background-color: #00000080;
  backdrop-filter: blur(4px);
  border-radius: 0 0 8px 8px;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  min-height: 80px;
  justify-content: center;
}

.exercises__name {
  display: -webkit-box;
  max-height: 48px;
  overflow: hidden;
  font-weight: 400;
  font-size: 18px;
  color: white;
  line-height: 1;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.exercises__count {
  position: absolute;
  padding: 8px 12px;
  color: #f66c1e;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  background-color: #00000080;
  border-radius: 8px;
  bottom: 216px;
  right: 8px;
}
</style>
