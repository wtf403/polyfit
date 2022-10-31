<template>
  <div class="adv-card">
    <div class="adv-card__wrapper">
      <div class="adv-card__img-wrap">
        <img :src="require(`@/assets/plan.svg`)" alt="#" class="adv-card__img">
      </div>
      <div class="adv-card__text-block">
        <h3 class="adv-card__title">
          Планируйте
        </h3>
        <p class="adv-card__description">
          Составьте собственное расписание тренировок
        </p>
      </div>
    </div>
    <div class="adv-card__wrapper">
      <div class="adv-card__img-wrap">
        <img :src="require(`@/assets/training.svg`)" alt="#" class="adv-card__img">
      </div>
      <div class="adv-card__text-block">
        <h3 class="adv-card__title">
          Тренируйтесь
        </h3>
        <p class="adv-card__description">
          Выполняйте упрожнения правильно по инструкциям
        </p>
      </div>
    </div>
    <div class="adv-card__wrapper">
      <div class="adv-card__img-wrap">
        <img :src="require(`@/assets/control.svg`)" alt="#" class="adv-card__img">
      </div>

      <div class="adv-card__text-block">
        <h3 class="adv-card__title">
          Контролируйте
        </h3>
        <p class="adv-card__description">
          Выполняйте упражнения правильно по инструкциям
        </p>
      </div>
    </div>
    <div class="adv-card__wrapper">
      <div class="adv-card__img-wrap">
        <img :src="require(`@/assets/evaluate.svg`)" alt="#" class="adv-card__img">
      </div>

      <div class="adv-card__text-block">
        <h3 class="adv-card__title">
          Оценивайте
        </h3>
        <p class="adv-card__description">
          Анализурейте собственный прогресс тренировок
        </p>
      </div>
    </div>
    <div class="adv-card__wrapper">
      <div class="adv-card__img-wrap">
        <img :src="require(`@/assets/relax.svg`)" alt="#" class="adv-card__img">
      </div>

      <div class="adv-card__text-block">
        <h3 class="adv-card__title">
          Отдыхайте
        </h3>
        <p class="adv-card__description">
          Между занятиями важно помнить о&nbsp;сне и&nbsp;отдыхе
        </p>
      </div>
    </div>
    <div class="adv-card__wrapper">
      <div class="adv-card__img-wrap">
        <img :src="require(`@/assets/run.svg`)" alt="#" class="adv-card__img">
      </div>

      <div class="adv-card__text-block">
        <h3 class="adv-card__title">
          Бегайте
        </h3>
        <p class="adv-card__description">
          Чаще бегайте на улице, в зале или на беговой дорожке
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>

.adv-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  max-width: 1440px;
  column-gap: 80px;
}

.adv-card__wrapper{
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 277px;
}

.adv-card__img {
  width: 64px;
}

.adv-card__title {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.1;
}

.adv-card__description {
  font-size: 12px;
  line-height: 1.4;
  text-align: start;
}

.adv-card__text-block {
  display: flex;
  flex-direction: column;
  padding-left: 15px;
}

.adv-card__img-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 176px;
  height: 90px;
  background: #fff1ea;
  border-radius: 50%;
}
</style>
