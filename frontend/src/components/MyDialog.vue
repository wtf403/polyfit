<template>
  <div v-if="show" class="dialog" @click="hideDialog">
    <div class="dialog__content" @click.stop>
      <div class="dialog__text-block">
        <h2 class="dialog__heading">
          Выберите тренировку
        </h2>
        <p class="dialog__date">
          на 1 ноября 2022
        </p>
      </div>
      <input placeholder="Поиск по тренировкам" type="text" class="dialog__input">
      <h2 class="dialog__type">
        Рекомендуем
      </h2>
      <div class="dialog__cards cards">
        <ul class="cards__list">
          <li class="cards__item">
            <button class="cards__choose">
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.00049L4 8.00049L11 1.00049" stroke="black" stroke-linecap="square" />
              </svg>
            </button>
            <div>
              <p class="cards__type">
                силовая
              </p>
            </div>

            <p class="cards__title">
              Работа над резервной коп...
            </p>
            <div class="cards__info">
              <p class="cards__time">
                22 минуты
              </p>
              <p class="cards__time">
                •
              </p>
              <p class="cards__level">
                средне
              </p>
              <p class="cards__time">
                •
              </p>
              <p class="cards__burning">
                113 Ккал
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    hideDialog() {
      this.$emit('hideDialog', false);
    },
  },

};
</script>

<style  scoped>
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
}

.dialog__content {
  width: 680px;
  height: 700px;
  margin: auto;
  margin-top: 80px;
  padding: 40px;
  background: #ffffff;
  border-radius: 18px 0 0 18px;
}

.dialog__text-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

.dialog__heading {
  font-weight: 500;
  font-size: 36px;
}

.dialog__date {
  color: #f76c1e;
  font-weight: 300;
  font-size: 24px;
}

.dialog__input {
  width: 100%;
  height: 48px;
  margin-top: 17px;
  padding: 0 20px;
  border: 2px solid #000000;
  border-radius: 8px;
}

.dialog__type {
  margin-top: 9px;
  margin-bottom: 10px;
  font-size: 24px;
}

.cards__item {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 200px;
  height: 120px;
  padding: 7px;
  background-image: url('../assets/dialog-card-img1.png');
}

.cards__choose {
  position: absolute;
  top: 7px;
  left: 167px;
  padding: 0 5px;
  padding-bottom: 3px;
  border: 1px solid;
  border-radius: 50%;
}

.cards__info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.cards__title {
  color: #ffffff;
  font-size: 14px;
}

.cards__type {
  display: inline-block;
  padding: 0 2px;
  font-size: 10px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 2px;
}

.cards__time, .cards__level, .cards__burning {
  color: rgba(255, 255, 255, 0.8);
  font-size: 10px;
}

.cards__info > p {
  color: rgba(255, 255, 255, 0.8);
}
</style>
