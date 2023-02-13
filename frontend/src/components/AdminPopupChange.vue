<template>
  <ProfilePopup ref="Popup">
    <template #actions="{ confirm, close }">
      <div class="popup__content">
        <form action="#" class="popup__form">
          <TheInput v-model="workoutContent.name" type="text" label="Название" @update:model-value="(newValue)=>(workoutContent.name=newValue)" />
          <TheTextarea v-model="workoutContent.desc" type="text" label="Описание" @update:model-value="(newValue)=>(workoutContent.name=newValue)" />
          <div class="popup__form-column">
            <p class="popup__radio-label">
              Тип
            </p>
            <TheRadio v-model="workoutContent.type" :radio-content="radio.type" />
          </div>
          <div class="popup__form-column">
            <p class="popup__radio-label">
              Сложность
            </p>
            <TheRadio v-model="workoutContent.difficulty" :radio-content="radio.difficulty" />
          </div>
          <div class="popup__form-row">
            <TheInput v-model="workoutContent.time" type="number" label="Длительность" @update:model-value="(newValue)=>(workoutContent.name=newValue)" />
            <TheInput v-model="workoutContent.cal" type="number" label="Калории" @update:model-value="(newValue)=>(workoutContent.name=newValue)" />
          </div>
          <TheInput v-model="workoutContent.inventory" type="text" label="Инвентарь" @update:model-value="(newValue)=>(workoutContent.name=newValue)" />
          <div class="popup__actions">
            <button class="profile__button" @click="confirm">
              Сохранить
            </button>
            <button class="profile__button profile__button--cancel" @click="close">
              Отменить
            </button>
          </div>
        </form>
      </div>
    </template>
  </ProfilePopup>
</template>

<script>
import ProfilePopup from '@/components/ProfilePopup.vue';
import TheInput from '@/components/TheInput.vue';
import TheTextarea from '@/components/TheTextarea.vue';
import TheRadio from './TheRadio.vue';

export default {
  name: 'AdminPopupChange',
  components: {
    ProfilePopup,
    TheInput,
    TheTextarea,
    TheRadio,
  },
  props: ['workout'],
  data() {
    return {
      confirmation: '',
      radio: {
        difficulty: {
          'легко': 'Легко',
          'средне': 'Средне',
          'сложно': 'Сложно',
        },
        type: {
          power: 'Силовая',
          speed: 'Скоростная',
          stamina: 'Выносливая',
        },
      },
    };
  },
  computed: {
    workoutContent() {
      let workout = {
        name: this.workout.name,
        desc: this.workout.desc,
        difficulty: this.workout.difficulty,
        time: this.workout.time,
        cal: this.workout.cal,
        type: this.workout.type,
        inventory: this.workout.inventory,
      };

      return workout;
    },
    isConfirmationCorrect() {
      return this.confirmation === this.$options.CONFIRMATION_TEXT;
    },
  },
  methods: {
    async ChangeWorkout() {
      this.confirmation = '';
      const popupResult = await this.$refs.Popup.open();
      if (popupResult) {
        console.log(1);
      }
    },
  },
};
</script>

<style scoped>

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
  margin-bottom: 12px;
  font-size: 18px;
}


.popup__form {
  display: flex;
  flex-direction: column;
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

.popup__kpi-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62px;
  background: rgba(56, 210, 90, 0.3);
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
}

.popup__form-row {
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
}

.popup__actions{
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

.popup__kpi-label {
  padding: 9px 11px;
  font-weight: 500;
  font-size: 18px;
  white-space: break-spaces;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
}

.popup__kpi-input {
  display: none;
}

.popup__kpi-input:active .popup__kpi-label {
  border: 1px solid black;
}

@media screen and (max-width: 900px) {
  .popup__text {
    font-size: 14px;
  }

  .popup__title {
    font-size: 20px;
  }

  .popup__kpi-label {
    padding: 5px 5px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
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
