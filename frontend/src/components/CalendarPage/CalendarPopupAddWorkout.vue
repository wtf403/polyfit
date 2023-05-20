<template>
  <ThePopup ref="Popup">
    <template #actions="{ confirm, close }">
      <div class="popup__content">
        <div class="popup__head">
          <h2 class="popup__title">
            Выбор тренировки
          </h2>
          <p class="popup__date">
            на {{day.date.toLocaleDateString("ru-RU")}}
          </p>
        </div>
        <div class="popup__search">
          <TheInput placeholder="123" />
        </div>
        <div class="popup__block">
          <h3 class="popup__category">
            Выбранные тренировки
          </h3>
          <ul class="popup__list">
            <li v-for="(workout, index) in day.workouts" :key="index" class="popup__item">
              <button class="popup__workout">
                <CalendarPopupWorkoutsCard :workout="workout" />
              </button>
            </li>
          </ul>
        </div>
        <div class="popup__block">
          <h3 class="popup__category">
            Силовые тренировки
          </h3>
          <ul class="popup__list">
            <li v-for="(workout, index) in sortByType(allWorkouts,'power')" :key="index" class="popup__item">
              <button class="popup__workout">
                <CalendarPopupWorkoutsCard :workout="workout" />
              </button>
            </li>
          </ul>
        </div>
        <div class="popup__block">
          <h3 class="popup__category">
            Скоростные тренировки
          </h3>
          <ul class="popup__list">
            <li v-for="(workout, index) in sortByType(allWorkouts,'speed')" :key="index" class="popup__item">
              <button class="popup__workout">
                <CalendarPopupWorkoutsCard :workout="workout" />
              </button>
            </li>
          </ul>
        </div>
        <div class="popup__actions">
          <button class="profile__button" @click="confirm">
            Сохранить
          </button>
          <button class="profile__button profile__button--cancel" @click="close">
            Отменить
          </button>
        </div>
      </div>
    </template>
  </ThePopup>
</template>

<script>
import ThePopup from '@/components/ThePopup.vue';
import CalendarPopupWorkoutsCard from './CalendarPopupWorkoutsCard.vue';
import TheInput from '@/components/TheInput.vue';

export default {
  name: 'CalendarPopupAddWorkout',
  components: {
    ThePopup,
    TheInput,
    CalendarPopupWorkoutsCard,
  },
  props: ['day'],
  data() {
    return {
      confirmation: '',
    };
  },
  computed: {
    isConfirmationCorrect() {
      return this.confirmation === this.$options.CONFIRMATION_TEXT;
    },
    allWorkouts() {
      return this.$store.getters.allWorkouts;
    },
  },
  methods: {
    async addWorkout() {
      this.confirmation = '';
      const popupResult = await this.$refs.Popup.open();
      if (popupResult) {
        console.log(1);
      }
    },
    sortBySearch(list, text) {
      return list.filter(function(item) {
        return (item.name.toLowerCase().includes(text.toLowerCase()) & item.desc.toLowerCase().includes(text.toLowerCase()));
      });
    },
    sortByType(list, type) {
      if (type === 'power') { return list.filter(function(item) { return item.type === 'Силовая'; }); }
      if (type === 'stamina') { return list.filter(function(item) { return item.type === 'Выносливость'; }); }
      if (type === 'speed') { return list.filter(function(item) { return item.type === 'Скоростная'; }); }
      return list;
    },
  },
};
</script>

<style lang="scss" scoped>

.popup__content {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: calc(90vh - 80px);
  gap: 6px;
}
.popup__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.popup__title {
  margin-bottom: 12px;
  font-size: 24px;
  line-height: 1.2;
}

.popup__category {
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 1.2;
}


.popup__text {
  margin-bottom: 12px;
  font-size: 18px;
}


.popup__list {
  display: flex;
  overflow-x: scroll;
  gap: 8px;
}


.popup__button {
  margin-top: 12px;
  padding: 13px 16px 14px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  background-color: #f76c1e;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.14s ease;
}

.popup__radio-label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: #6f645d;
  font-weight: 400;
  font-size: 14px;
}

.popup__button:hover {
  background-color: #ee6011;
}


.popup__form-row {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
}

.popup__workout {
  border: none;
  padding: 0;
  background: none;
  text-align: left;
}

.popup__actions{
  display: none;
  gap: 12px;
  margin-top: 12px;
}


.popup__cover{
  &--big {
    width: 316px;
    height: 198px;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 4px;
  }
  &--small {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 4px;
  }

}

@media screen and (max-width: 900px) {
  .popup__text {
    font-size: 14px;
  }

  .popup__title {
    font-size: 20px;
  }

  .popup__text-info {
    padding: 10px 16px;
    font-size: 15px;
  }

  .popup__kpi-list {
    gap: 8px;
    max-height: 240px;
    overflow: scroll;
  }
}
</style>
