<template>
  <div class="types-card">
    <div class="types-card__wrapper">
      <h3 class="types-card__title">
        Силовые упражнения
      </h3>
      <p class="types-card__description">
        Безопасная форма упражнений, когда движения <br> контролируются и тщательно определены.
      </p>
      <img :src="require(`@/assets/strength.png`)" alt="" class="types-card__img">
    </div>
    <div class="types-card__wrapper types-card__wrapper--bg-blue">
      <h3 class="types-card__title">
        Скоростные занятия
      </h3>
      <p class="types-card__description">
        Работа максимальной мощности, непрерывная предельная продолжительность которой не превышает 20-25 секунд.
      </p>
      <img :src="require(`@/assets/speed.png`)" alt="" class="types-card__img">
    </div>
    <div class="types-card__wrapper types-card__wrapper--bg-orange">
      <h3 class="types-card__title">
        Выносливые тренировки
      </h3>
      <p class="types-card__description">
        Акт упражнений обычно аэробной системы для повышенияв сердечно-сосудистой и простой мышечной выносливости.
      </p>
      <img :src="require(`@/assets/stamina.png`)" alt="" class="types-card__img">
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>

  .types-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 20px;
    column-gap: 21px;
  }

  .types-card__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    height: 450px;
    background-color: black;
    border-radius: 8px;
  }

  .types-card__title {
    margin-bottom: 10px;
    padding-top: 20px;
    color: #ffffff;
    font-size: 34px;
    text-align: center;
  }

  .types-card__description {
    color: #ffffff;
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
  }

  .types-card__wrapper--bg-blue {
    background-color: #3672bc;
  }

  .types-card__wrapper--bg-orange {
    background-color: #ec882c;
  }

  .types-card__img {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
