<template>
  <router-link :to="{ path: '/workouts/'+workout.id, query: {item: workout}}" class="workouts-content__workouts-card workouts-card">
    <div class="workouts-card__cover">
      <img :src="workout.image" alt="Image for workout" class="workouts-card__image">
    </div>
    <div class="workouts-card__info">
      <div class="workouts-card__flags">
        <p
          class="workouts-card__type"
          :class="{ 'workouts-card__type--speed': workout.type=='Скоростная', 'workouts-card__type--stamina': workout.type=='Выносливость' }"
        >
          {{workout.type}}
        </p>
        <p
          v-if="workout.rec"
          class="
          workouts-card__recomandate"
        >
          Рекомендуем
        </p>
      </div>
      <h3 class="workouts-card__name">{{workout.name}}</h3>
      <p class="workouts-card__features">
        ⏱️ {{workout.time}} мин. • 💪 {{workout.difficulty}} • 🔥 {{workout.cal}} Ккал
      </p>
    </div>
  </router-link>
</template>

<script>

export default {
  name: 'WorkoutsItemComponent',
  props: ['workout'],
  data() {
    return {
      // workout: this.$route.query;
    };
  },
};
</script>

<style lang="scss" scoped>
.workouts-card {
  display: flex;
  flex-direction: column;
  width: 320px;
  opacity: 0.95;
  transition: all 0.1s ease 0s;
  border-radius: 8px;
  // max-height: 302px;
  height: 100%;
  padding-bottom: 6px;
  &:hover {
    opacity: 1;
    box-shadow: rgb(0 0 0 / 15%) 0px 6px 25px;

    & .workouts-card__image {
      transform: scale(1.12);
      transition-duration: 0.4s;
      transition: transform 0.4s ease 0s;
    }
  }
}
.workouts-card__cover {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  object-fit: cover;
}

.workouts-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: all 250ms ease-in-out;
}

.workouts-card__flags {
  display: flex;
  gap: 10px;
}

.workouts-card__type {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  padding: 0 6px;
  color: white;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  text-transform: uppercase;
  background: black;
  border-radius: 4px;
}

.workouts-card__type--speed {
  background: #1070ff;
}

.workouts-card__type--stamina {
  background: #f66c1e;
}

.workouts-card__recomandate {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  padding: 0 6px;
  color: #f66c1e;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  text-transform: uppercase;
  background: #f66c1e29;
  border-radius: 4px;
}

.workouts-card__info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 6px 0;
}

.workouts-card__name {
  font-weight: 400;
  font-size: 19.2px;
  font-variant: small-caps;
  line-height: 1.2;
  text-transform: uppercase;
}

.workouts-card__features {
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.1;
}

</style>
