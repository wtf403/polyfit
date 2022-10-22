<template>
  <div class="functions__list">
    <div class="function__item">
      <img :src="require(`@/assets/functions icon.svg`)" alt="#" class="functions__icon">
      <h3 class="function__title">
        Бесплатные онлайн тренировки
      </h3>
    </div>
    <div class="function__item">
      <img :src="require(`@/assets/functions icon.svg`)" alt="#" class="functions__icon">
      <h3 class="function__title">
        Большая коллекция упражнений разных типов на все части тела
      </h3>
    </div>
    <div class="function__item">
      <img :src="require(`@/assets/functions icon.svg`)" alt="#" class="functions__icon">
      <h3 class="function__title">
        Рекомандации на основе индивидуальных параметрах и личных способностях
      </h3>
    </div>
    <div class="function__item">
      <img :src="require(`@/assets/functions icon.svg`)" alt="#" class="functions__icon">
      <h3 class="function__title">
        Удобный интерфейс и управление
      </h3>
    </div>
    <div class="function__item">
      <img :src="require(`@/assets/functions icon.svg`)" alt="#" class="functions__icon">
      <h3 class="function__title">
        Гибкая настройка профиля
      </h3>
    </div>
    <div class="function__item">
      <img :src="require(`@/assets/functions icon.svg`)" alt="#" class="functions__icon">
      <h3 class="function__title">
        Отслеживание своего прогресса и статистики пройденных занятий
      </h3>
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
      row-gap: 26px;
      padding-right: 40px;
    }

    .function__item {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 80px;
      column-gap: 20px;
    }

    .function__title {
      font-weight: 400;
      font-size: 22px;
      line-height: 1.3;
    }
</style>

