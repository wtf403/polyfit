<template>
  <ThePopup ref="Popup">
    <template #actions="{ confirm, close }">
      <div class="popup__content">
        <form action="#" class="popup__form" @submit.prevent>
          <TheInput v-model="workoutContent.title" type="text" label="Название" @update:model-value="(newValue)=>(workoutContent.title=newValue)" />
          <TheTextarea v-model="workoutContent.description" type="text" label="Описание" @update:model-value="(newValue)=>(workoutContent.description=newValue)" />
          <div class="popup__form-column">
            <p class="popup__radio-label">
              Обложка
            </p>
            <div class="popup__form-row popup__form-row--full">
              <TheInput v-if="showURL" v-model="file" class="popup__input-file" type="text" placeholder="Введите ссылку на изображение" @update:model-value="(newValue)=>(workoutContent.image=newValue)" />
              <TheInputFile v-if="!showURL" class="popup__input-file" label="Загрузите обложку" type="file" @update:model-value="(newValue)=>(newFile(newValue))" />
              <button class="popup__url-button" @click="()=>showURL = !showURL">
                URL
              </button>
            </div>
            <div class="popup__form-row">
              <img :src="file?file:workoutContent.image" alt="Big cover" class="popup__cover popup__cover--big">
              <img :src="file?file:workoutContent.image" alt="Small cover" class="popup__cover popup__cover--small">
            </div>
          </div>
          <div class="popup__form-column">
            <p class="popup__radio-label">
              Тип
            </p>
            <TheRadio v-model="workoutContent.type" :radio-content="radio.type" :radio-selected="workoutContent.type" @update:model-value="(newValue)=>(workoutContent.type=newValue)" />
          </div>
          <div class="popup__form-column">
            <p class="popup__radio-label">
              Сложность
            </p>
            <TheRadio v-model="workoutContent.difficulty" :radio-content="radio.difficulty" :radio-selected="workoutContent.difficulty" @update:model-value="(newValue)=>(workoutContent.difficulty=newValue)" />
          </div>
          <div class="popup__form-row">
            <TheInput v-model="workoutContent.time" type="number" label="Длительность" @update:model-value="(newValue)=>(workoutContent.time=newValue)" />
            <TheInput v-model="workoutContent.calories" type="number" label="Калории" @update:model-value="(newValue)=>(workoutContent.calories=newValue)" />
            <TheDropdown v-model="workoutContent.gender" :default-value="workout.gender" label="Пол" :model-value="radio.gender" @update:model-value="(newValue)=>(workoutContent.gender=newValue)" />
          </div>
          <TheInput v-model="workoutContent.inventory" type="text" label="Инвентарь" @update:model-value="(newValue)=>(workoutContent.inventory=newValue)" />
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
  </ThePopup>
</template>

<script>
import ThePopup from '@/components/ThePopup.vue';
import TheInput from '@/components/TheInput.vue';
import TheInputFile from '@/components/TheInputFile.vue';
import TheTextarea from '@/components/TheTextarea.vue';
import TheDropdown from '@/components/TheDropdown.vue';
import TheRadio from '@/components/TheRadio.vue';

import { mapActions } from 'vuex';

export default {
  name: 'AdminPopupChangeWorkout',
  components: {
    ThePopup,
    TheInput,
    TheTextarea,
    TheRadio,
    TheInputFile,
    TheDropdown,
  },
  props: ['workout'],
  data() {
    return {
      showURL: false,
      confirmation: '',
      file: '',
      radio: {
        difficulty: {
          'Легко': 'Легко',
          'Средне': 'Средне',
          'Сложно': 'Сложно',
        },
        type: {
          'Силовая': 'Силовая',
          'Скоростная': 'Скоростная',
          'Выносливость': 'Выносливая',
        },
        gender: {
          'Мужской': 'Мужской',
          'Женский': 'Женский',
          'Общий': 'Общий',
        },
      },
    };
  },
  computed: {
    workoutContent() {
      let workout = {
        title: this.workout.title,
        description: this.workout.description,
        difficulty: this.workout.difficulty,
        time: this.workout.time,
        calories: this.workout.calories,
        type: this.workout.type,
        inventory: this.workout.inventory,
        image: this.workout.image,
        gender: this.workout.gender,
        // id: this.workout.id,
      };
      return workout;
    },
    isConfirmationCorrect() {
      return this.confirmation === this.$options.CONFIRMATION_TEXT;
    },
  },
  methods: {
    ...mapActions(['patchWorkouts']),
    async ChangeWorkout() {
      this.confirmation = '';
      const popupResult = await this.$refs.Popup.open();
      if (popupResult) {
        let obj = {
          title: this.name,
          // description: this.desc,
          // calories: Number(this.cal),
          // type: this.type,
          // gender: this.gender,
          // image: this.file,
        };
        console.log(this.workoutContent);
        this.patchWorkouts(obj, this.workout.id);
      }
    },
    newFile(e) {
      const file = e.target.files[0];
      this.file = URL.createObjectURL(file);
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
  margin-bottom: 12px;
  font-size: 18px;
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
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
}


.popup__cover{
  object-fit: cover;
  border-radius: 8px;
  margin: 2px 0 12px;
  &--big {
    max-width: 316px;
    width: 100%;
    height: 198px;
  }
  &--small {
    width: 60px;
    height: 60px;
  }

}


.popup__input-file {
  width: calc(100% - 48px);
}

.popup__url-button {
  cursor: pointer;
  height: 44px;
  width: 44px;
  margin-top: 4px;
  color: #24292f;
  background-color: #f6f8fa;
  border-color: rgba(28, 36, 27, 0.15);
  text-decoration: none;
  border: 1px solid;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.42;
  text-align: center;
  box-shadow: 0 1px 0 rgba(27, 31, 36, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.03);
}

.popup__form-row--full {
  justify-content: space-between;
  gap: 4px;
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
