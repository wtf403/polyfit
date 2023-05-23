<template>
  <div class="exercises__wrapper">
    <h3 class="exercises__title">
      Перечень упражнений
    </h3>
    <ul class="exercises__list">
      <li v-for="(exercise, index) in exercises" :key="index" class="exercises__item">
        <div class="exercises__cover">
          <p class="exercises__cal">
            {{exercise.calories}} кал.
          </p>
          <img :src="exercise.media" alt="Image for exercise" class="exercises__image">
        </div>
        <div class="exercises__info">
          <h4 class="exercises__name">
            {{exercise.title}}
          </h4>
          <p class="exercises__count">
            {{exercise.amount}} повторов • {{exercise.time}} сек.
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ExercisesComponent',
  props: ['exercises'],
};
</script>

<style scoped>

.exercises__wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px 60px;
}

.exercises__title {
  margin: 36px auto;
  font-weight: 500;
  font-size: 36px;
  line-height: 1.1;
  text-align: center;
}

.exercises__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  row-gap: 20px;
  column-gap: 10px;
}

.exercises__item {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 332px;
}

.exercises__image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
}

.exercises__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.exercises__name {
  /* display: -webkit-box;
  max-height: 48px; */
  overflow: hidden;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.1;

  /* -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
}

.exercises__count {
  padding: 6px 8px;
  color: #f66c1e;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  background-color: #f6f6f6;
  border-radius: 8px;
}

.exercises__cal {
  position: absolute;
  right: 2px;
  bottom: 6px;
  padding: 2px 4px;
  color: white;
  font-size: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  backdrop-filter: blur(2px);
}

.exercises__cover {
  position: relative;
}
</style>
