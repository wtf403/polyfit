<template>
  <div class="mini-workouts-card">
    <img :src="workout.image" alt="Cover workout item" class="mini-workouts-card__image" :class="workout.type=='Скоростная'?'mini-workouts-card__image--speed':workout.type=='Силовая'?'mini-workouts-card__image--force':'mini-workouts-card__image--stamina'">
    <div class="mini-workouts-card__info">
      <p class="mini-workouts-card__type" :class="workout.type=='Скоростная'?'mini-workouts-card__type--speed':workout.type=='Силовая'?'mini-workouts-card__type--force':'mini-workouts-card__type--stamina'">
        {{workout.type}}
      </p>
      <div class="mini-workouts-card__text">
        <h4 class="mini-workouts-card__name" :title="workout.name">
          {{workout.name}}
        </h4>
      </div>

      <p class="mini-workouts-card__features">
        ⏱️&nbsp;{{workout.time}}&nbsp;мин. 💪&nbsp;{{workout.difficulty}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarWorkoutsCard',
  props: {
    workout: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.mini-workouts-card {
  max-width: 190px;
  display: flex;
  gap: 4px;
  padding: 2px 4px;
  align-items: center;
}

.mini-workouts-card__image {
  border-radius: 8px;
  height: 72px;
  width: 72px;
  object-fit: cover;
}

.mini-workouts-card__info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mini-workouts-card__type {
  border-radius: 4px;
  padding: 2px 4px;
  font-size: 10px;
  text-transform: uppercase;
  width: fit-content;
  background-color: black;
  color: white;
  &--speed {
    background-color: blue;
  }
  &--stamina {
    background-color: orange;
  }
}

.mini-workouts-card__name {
  text-transform: uppercase;
  min-height: 34px;
  font-size: 14px;
  display: flex;
  align-items: center;
  line-height: 1.2;
  overflow: hidden;
  // text-overflow: ellipsis;
  // display: -webkit-box;
  // -webkit-line-clamp: 2; /* number of lines to show */
  //         line-clamp: 2;
  // -webkit-box-orient: vertical;
  -webkit-animation: scroll-animation 6s ease-in-out infinite;
  -moz-animation: scroll-animation 6s ease-in-out infinite;
  animation: scroll-animation 6s ease-in-out infinite;
  -webkit-overflow-scrolling: touch;
}
 @keyframes scroll-animation {
  0%, 30%, 100% {
    transform: translateY(0);
  }
  70%, 90% {
    transform: translateY(calc(-100% + 34px));
  }
}

.mini-workouts-card__features {
  color: rgba(0, 0, 0, 0.8);
  font-size: 10.5px;
}

.mini-workouts-card__text {
  max-height: 34px;
  overflow: hidden;
}
</style>
