<template>
  <div class="player__switch switch">
    <img
      :src="require('@/assets/player-img-time.png')"
      alt="player-img-time"
      class="switch__img"
    >
    <div class="switch__buttons">
      <p class="switch__button">
        Предыдущее упражнение
      </p>
      <p class="switch__button switch__button--red">
        пауза
      </p>
      <p class="switch__button switch__button--blue">
        Следующее упражнение
      </p>
    </div>
  </div>
</template>

<style scoped>
.switch {
  z-index: 1;
  display: flex;
  flex-direction: column;
  row-gap: 100px;
  padding-top: 48px;
}

.switch__img {
  width: 150px;
}

.switch__buttons {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}

.switch__button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 167px;
  margin: auto;
  padding: 13px 0;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.16);
  border-radius: 14px;
}

.switch__button--red {
  color: #f66c1e;
  background: rgba(247, 108, 30, 0.16);
}

.switch__button--blue {
  color: #1070ff;
  background: rgba(16, 112, 255, 0.16);
}

@media (max-width: 1024px) {
  .switch__buttons {
    display: flex;
    flex-direction: row;
    column-gap: 30px;
  }
  .switch {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .switch__img {
    width: 100px;
  }

  .switch__button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 120px;
    margin: auto;
    padding: 13px 0;
    font-weight: 500;
    font-size: 13px;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
