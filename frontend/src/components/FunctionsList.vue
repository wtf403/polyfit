<template>
  <ul class="functions__list">
    <li v-for="(item,index) in functions" :key="index" class="function__item">
      <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 19.5L15 24L25.5 13.5" stroke="#F76C1E" stroke-width="2" stroke-linecap="square" />
        <path d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z" stroke="#F76C1E" stroke-width="2" stroke-linecap="square" />
      </svg>
      <h3 class="function__title">
        {{item}}
      </h3>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      functions: [
        'Бесплатные онлайн тренировки',
        'Большая коллекция упражнений разных типов на все части тела',
        'Рекомандации на основе индивидуальных параметрах и личных способностях',
        'Удобный интерфейс и управление',
        'Гибкая настройка профиля',
        'Отслеживание своего прогресса и статистики пройденных занятий',
      ],
    };
  },
};
</script>

<style  scoped>
    .functions__list {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 12px;
      margin-left: 40px;
    }

    .function__item {
      display: grid;
      grid-template-columns: 24px 1fr;
      align-items: center;
      column-gap: 20px;
    }

    .function__title {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.3;
    }

    @media (max-width: 600px) {
      .function__title{
        font-size: 12px;
      }
    }
</style>

