<template>
  <div class="card__wrapper">
    <img :src="require('@/assets/workout49.png')" alt="workout" class="card__img">
    <div class="card__desc-block">
      <div class="card__type-wrap">
        <p class="card__type">
          {{workout.type}}
        </p>
      </div>
      <p class="card__heading">
        {{workout.title}}
      </p>
      <div>
        <p class="card__time">
          <!-- {{workout.time}} минут • -->
        </p>
        <p class="card__level">
          <!-- {{workout.difficulty}} -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    workout: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
  .card__wrapper {
    display: flex;
    flex-direction: row;
    max-height: 60px;
    margin-bottom: 5px;
    padding-left: 6px;
    column-gap: 3px;
  }

  .card__type {
    display: inline-block;
    padding: 0 2px;
    color: #ffffff;
    font-size: 10px;
    text-align: center;
    background-color: #000000;
    border-radius: 2px;
  }

  .card__desc-block > div {
    display: flex;
    flex-direction: row;
    column-gap: 2px;
  }

  .card__time, .card__level {
    color: rgba(0, 0, 0, 0.8);
    font-size: 10px;
  }

  .card__heading {
    font-size: 14px;
  }

</style>
