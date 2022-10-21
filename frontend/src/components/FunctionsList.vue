<template>
  <div class="functions__list">
    <div class="function__item">
      <img :src="require(`@/assets/functions icon.svg`)" alt="#" class="functions__icon">
      <h3>Бесплатные онлайн тренировки </h3>
    </div>
    <div class="function__item">
      <img :src="require(`@/assets/functions icon.svg`)" alt="#" class="functions__icon">
      <h3>Большая коллекция упражнений разных типов на все части тела</h3>
    </div>
    <div class="function__item">
      <img :src="require(`@/assets/functions icon.svg`)" alt="#" class="functions__icon">
      <h3>Рекомандации на основе индивидуальных параметрах и личных способностях</h3>
    </div>
    <div class="function__item">
      <img :src="require(`@/assets/functions icon.svg`)" alt="#" class="functions__icon">
      <h3>Удобный интерфейс и управление</h3>
    </div>
    <div class="function__item">
      <img :src="require(`@/assets/functions icon.svg`)" alt="#" class="functions__icon">
      <h3>Гибкая настройка профиля</h3>
    </div>
    <div class="function__item">
      <img :src="require(`@/assets/functions icon.svg`)" alt="#" class="functions__icon">
      <h3>Отслеживание своего прогресса и статистики пройденных занятий</h3>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style  scoped>
    .functions__list {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 40px;
    }

    .function__item {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 80px;
      column-gap: 20px;
    }


</style>

