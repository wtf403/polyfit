<template>
  <div class="player__info info">
    <div class="info__card card card--gray">
      <img :src="require('@/assets/player-icon-type.svg')" alt="player-icon-type" class="card__img">
      <p class="card__title">
        силовая
      </p>
      <p class="card__subtitle">
        тренировка
      </p>
    </div>
    <div class="info__card card card--red">
      <img :src="require('@/assets/player-icon-burning.svg')" alt="player-icon-burning" class="card__img">
      <p class="card__title">
        140
      </p>
      <p class="card__subtitle">
        Ккал
      </p>
    </div>
    <div class="info__card card card--yellow">
      <img :src="require('@/assets/player-icon-difficult.svg')" alt="player-icon-difficult" class="card__img">
      <p class="card__title">
        легкий
      </p>
      <p class="card__subtitle">
        уровень
      </p>
    </div>
    <div class="info__card card card--blue">
      <img :src="require('@/assets/player-icon-time.svg')" alt="player-icon-time" class="card__img">
      <p class="card__title">
        ~25
      </p>
      <p class="card__subtitle">
        МИНУТ
      </p>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style  scoped>
.info {
  z-index: 1;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-top: 126px;
  margin-bottom: 126px;
}

.card__title {
  font-weight: 500;
  font-size: 22px;
}

.card__subtitle {
  color: rgba(0, 0, 0, 0.4);
  font-weight: 400;
  font-size: 14px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
}

.card__img {
  margin-bottom: 16px;
}

.card--gray {
  background-color: #f4f4f4;
  border-radius: 16px;
}

.card--red {
  background-color: #ffecec;
  border-radius: 16px;
}

.card--yellow {
  background-color: #fff6e9;
  border-radius: 16px;
}

.card--blue {
  background-color: #d7f2f4;
  border-radius: 16px;
}



@media (max-width: 1024px) {
  .info {
  flex-direction: row;
  justify-content: space-around;
}

.info__card {
  width: 15%;
}

}
</style>
