<template>
  <div class="workout__wrapper">
    <img :src="workout.image" alt="Image for workout" class="workout__cover">
    <div clas="workout__info">
      <h2 class="workout__name">
        {{workout.title}}
      </h2>
      <ul class="workout__features-list">
        <li class="workout__features-item workout__features-item--type">
          <p class="workout__features-icon">
            🏋️‍♂️
          </p>
          <p class="workout__features-content">
            {{workout.type}}
          </p>
          <p class="workout__features-title">
            тренировка
          </p>
        </li>
        <li class="workout__features-item workout__features-item--cal">
          <p class="workout__features-icon">
            🔥
          </p>
          <p class="workout__features-content">
            {{workout.calories}}
          </p>
          <p class="workout__features-title">
            Ккал
          </p>
        </li>
        <li class="workout__features-item workout__features-item--difficulty">
          <p class="workout__features-icon">
            💪
          </p>
          <p class="workout__features-content">
            {{workout.difficulty}}
          </p>
          <p class="workout__features-title">
            уровень
          </p>
        </li>
        <li class="workout__features-item workout__features-item--time">
          <p class="workout__features-icon">
            ⏱️
          </p>
          <p class="workout__features-content">
            ~{{workout.time}}
          </p>
          <p class="workout__features-title">
            минут
          </p>
        </li>
      </ul>
      <div class="workout__block">
        <h3 class="workout__category">
          Описание
        </h3>
        <p class="workout__text">
          {{workout.description}}
        </p>
      </div>
      <div class="workout__block">
        <h3 class="workout__category">
          Инвентарь
        </h3>
        <p class="workout__text">
          {{workout.inventory}}
        </p>
      </div>
      <div class="workout__actions">
        <BaseButton type="link" :to="'/player/'+workout.id" fill>
          Начать тренировку
        </BaseButton>
        <BaseButton type="link" :to="'/calendar'" light>
          Добавить в календарь
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../BaseButton.vue';

export default {
  name: 'WorkoutInfoComponent',
  components: { BaseButton },
  props: {
    workout: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.workout__wrapper {
  display: flex;
  gap: 20px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 40px 0;
}

.workout__cover{
  width: 100%;
  max-width: 664px;
  height: auto;
  max-height: 640px;
  border-radius: 16px;
  object-fit: cover;
}

@media screen and (max-width: 1080px) {
  .workout__cover{
    max-width: 50%;
  }
}

@media screen and (max-width: 848px) {
  .workout__wrapper {
    flex-direction: column;
  }

  .workout__cover{
    max-width: 100%;
  }
}

.workout__info {
  margin-right: 20px;
}

.workout__name {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.1;
}

.workout__category {
  margin-bottom: 6px;
  color: #000000c8;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
}

.workout__text {
  margin-bottom: 12px;
  color: #000000aa;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
}

.workout__features-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.workout__start {
  padding: 16px 16px 14px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  text-transform: uppercase;
  background: #f66c1e;
  opacity: 0.95;
  border-radius: 14px;
  transition: all 150ms ease;
  &:hover {
    opacity: 1;
  }
}

.workout__actions {
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;
  margin-top: 33px;
  column-gap: 20px;
}

.workout__add-calendar {
  padding: 14px 16px 14px;
  color: #f66c1e;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  text-transform: uppercase;
  background: #f66c1e29;
  border-radius: 14px;
  border: 2px solid transparent;
  transition: all 150ms ease;
  &:hover {
    border: 2px solid #f66c1e;
  }
}

.workout__features-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 132px;
  height: 132px;
  padding: 20px 40px;
  background: #f4f4f4;
  border: 1px solid #d0d0d0;
  border-radius: 16px;
}

.workout__features-item--cal {
  background: #ffecec;
  border: 1px solid #fccccc;
}

.workout__features-item--difficulty {
  background: #fff6e9;
  border: 1px solid #ffe1b7;
}

.workout__features-item--time {
  background: #ddf6f8;
  border: 1px solid #ace9ec;
}


.workout__features-icon {
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 36px;
  line-height: 1;
}

.workout__features-content {
  margin-bottom: 4px;
  overflow: hidden;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  text-transform: lowercase;
  hyphens: manual;
}

.workout__features-title {
  color: #00000066;
  font-weight: 400;
  font-size: 18px;
  font-variant: small-caps;
  line-height: 1;
  text-transform: lowercase;
}
</style>
