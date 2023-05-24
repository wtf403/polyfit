<template>
  <ThePopup ref="Popup">
    <template #actions="{ confirm, close }">
      <div class="popup__content">
        <p class="popup__title">
          Удаление тренировки
        </p>
        <p class="popup__text">
          Вы уверены, что хотите удалить данную тренировку?
        </p>
        <div class="popup__actions">
          <button class="profile__button" @click="confirm">
            Удалить
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
import { mapActions } from 'vuex';

export default {
  name: 'AdminPopupDelete',
  components: {
    ThePopup,
  },
  props: ['workout'],
  data() {
    return {
      confirmation: '',
    };
  },
  computed: {
    isConfirmationCorrect() {
      return this.confirmation === this.$options.CONFIRMATION_TEXT;
    },
  },
  methods: {
    ...mapActions(['deleteWorkouts']),
    async DeleteWorkout() {
      this.confirmation = '';
      const popupResult = await this.$refs.Popup.open();
      if (popupResult) {
        await this.deleteWorkouts(this.workout.id);
        this.$router.go(0);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.popup__title {
  margin-bottom: 12px;
  font-size: 24px;
  line-height: 1.2;
}

.popup__text-info {
  margin-bottom: 12px;
  padding: 16px 20px;
  font-size: 18px;
  line-height: 1.2;
  background-color: #f76c1e4d;
  border: 1px solid #f76c1e;
  border-radius: 12px;
}


.popup__text {
  margin-bottom: 24px;
  font-size: 18px;
  color:#6f645d;
}


.popup__form {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: calc(90vh - 80px);
  gap: 6px;
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

.popup__form-column {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.popup__actions{
  display: flex;
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
