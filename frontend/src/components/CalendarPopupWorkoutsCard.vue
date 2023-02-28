<template>
  <div class="popup-workouts-card">
    <div class="popup-workouts-card__shadow" />
    <img :src="workout.image" alt="Cover workout item" class="popup-workouts-card__image" :class="workout.type=='Скоростная'?'popup-workouts-card__image--speed':workout.type=='Силовая'?'popup-workouts-card__image--force':'popup-workouts-card__image--stamina'">
    <div class="popup-workouts-card__info">
      <p class="popup-workouts-card__type" :class="workout.type=='Скоростная'?'popup-workouts-card__type--speed':workout.type=='Силовая'?'popup-workouts-card__type--force':'popup-workouts-card__type--stamina'">
        {{workout.type}}
      </p>
      <div class="popup-workouts-card__text">
        <h4 class="popup-workouts-card__name" :title="workout.name">
          {{workout.name}}
        </h4>
      </div>
      <p class="popup-workouts-card__features">
        ⏱️&nbsp;{{workout.time}}&nbsp;минут&nbsp;• 💪&nbsp;{{workout.difficulty}}&nbsp;• 🔥&nbsp;{{workout.cal}}&nbsp;Ккал
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarPopupWorkoutsCard',
  props: {
    workout: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
$primary: #f66c1e;
$speed: #1070FF;
.popup-workouts-card {
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
  opacity: 0.95;
  transition: all 0.1s ease;
  &:hover {
    opacity: 1;
  }
}

.popup-workouts-card__shadow {
  border-radius: 8px;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.3) 45%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.7) 80%, rgba(0, 0, 0, 0.75) 90%, rgba(0, 0, 0, 0.85) 94%, rgba(0, 0, 0, 0.9) 100%);

}
.popup-workouts-card__image {
  border-radius: 8px;
  height: 144px;
  width: 240px;
  object-fit: cover;
}

.popup-workouts-card__info {
  padding: 4px 6px 8px;
  position: absolute;
  width: 100%;
  bottom: 0;
  gap: 4px;
  display: flex;
  flex-direction: column;
  color: white;
}

.popup-workouts-card__type {
  border-radius: 4px;
  padding: 2px 4px;
  font-size: 10px;
  text-transform: uppercase;
  width: fit-content;
  background-color: black;
  color: white;
  &--speed {
    background-color: $speed;
  }
  &--stamina {
    background-color: $primary;
  }
}

.popup-workouts-card__name {
  text-transform: uppercase;
  font-size: 14px;
  display: flex;
  align-items: center;
  line-height: 1.2;
}

.popup-workouts-card__features {
  font-size: 12px;
}

.popup-workouts-card__text {
  max-height: 34px;
  overflow: hidden;
}
</style>
