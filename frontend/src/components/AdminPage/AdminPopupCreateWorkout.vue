<template>
  <ThePopup ref="Popup">
    <template #actions="{ confirm, close }">
      <div class="popup__content">
        <p v-if="showError" class="popup__error">
          Введены не все поля для создания тренировки
        </p>
        <form action="#" class="popup__form" @submit.prevent>
          <TheInput v-model="title" type="text" label="Название" @update:model-value="(newValue)=>(title=newValue)" />
          <TheTextarea v-model="desc" type="text" label="Описание" @update:model-value="(newValue)=>(desc=newValue)" />
          <div class="popup__form-column">
            <p class="popup__radio-label">
              Обложка
            </p>
            <div class="popup__form-row popup__form-row--full">
              <TheInput v-if="showURL" v-model="file" class="popup__input-file" type="text" placeholder="Введите ссылку на изображение" @update:model-value="(newValue)=>(file=newValue)" />
              <TheInputFile v-if="!showURL" class="popup__input-file" label="Загрузите обложку" type="file" @update:model-value="(newValue)=>(newFile(event, newValue))" />
              <button class="popup__url-button" @click="()=>showURL = !showURL">
                URL
              </button>
            </div>
            <div class="popup__form-row">
              <img v-if="file" :src="file" alt="Big cover" class="popup__cover--big">
              <img v-if="file" :src="file" alt="Small cover" class="popup__cover--small">
            </div>
          </div>
          <div class="popup__form-column">
            <p class="popup__radio-label">
              Тип
            </p>
            <TheRadio v-model="type" :radio-content="radio.type" :radio-selected="type" @update:model-value="(newValue)=>(type=newValue)" />
          </div>
          <div class="popup__form-column">
            <p class="popup__radio-label">
              Сложность
            </p>
            <TheRadio v-model="difficulty" :radio-content="radio.difficulty" :radio-selected="difficulty" @update:model-value="(newValue)=>(difficulty=newValue)" />
          </div>
          <div class="popup__form-row">
            <TheInput v-model="time" type="number" label="Длительность" @update:model-value="(newValue)=>(time=newValue)" />
            <TheInput v-model="cal" type="number" label="Калории" @update:model-value="(newValue)=>(cal=newValue)" />
            <TheDropdown v-model="gender" label="Пол" :model-value="radio.gender" @update:model-value="(newValue)=>(gender=newValue)" />
          </div>
          <TheInput v-model="inventory" type="text" label="Инвентарь" @update:model-value="(newValue)=>(inventory=newValue)" />
          <div class="popup__form-row">
            <TheInput v-model="search" label="Поиск среди упражнений" @update:model-value="(newValue)=>(search=newValue)" />
            <ul class="popup__list-exercises">
              <li v-for="(item,index) in allExercises" :key="index" class="popup__item-exercises">
                <TheExercise class="popup__object-exercises" :exercise="item" :check="true" type="mini" />
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
import TheExercise from '@/components/TheExercise.vue';

import { mapActions } from 'vuex';


export default {
  name: 'AdminPopupCreateWorkout',
  components: {
    ThePopup,
    TheInput,
    TheTextarea,
    TheRadio,
    TheInputFile,
    TheDropdown,
    TheExercise,
  },
  props: {
    allExercises: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      showError: false,
      showURL: false,
      confirmation: '',
      title: '',
      desc: '',
      file: '',
      difficulty: '',
      time: '',
      cal: '',
      type: '',
      inventory: '',
      gender: '',
      search: '',
      selectedExercises: [],
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
          'муж': 'Мужской',
          'жен': 'Женский',
          'общая': 'Общий',
        },
      },
    };
  },
  computed: {
    isConfirmationCorrect() {
      return this.confirmation === this.$options.CONFIRMATION_TEXT;
    },
  },
  methods: {
    ...mapActions(['addWorkouts']),
    async CreateWorkout() {
      this.confirmation = '';
      const popupResult = await this.$refs.Popup.open();
      if (popupResult) {
        let obj = {
          title: this.title,
          description: this.cal === '' ? 'Обычная тренировка для обычных спортсменов.' : this.desc,
          calories: this.cal === '' ? 0 : Number(this.cal),
          // difficulty: this.difficulty,
          // type: this.type,
          // time: this.time,
          // gender: this.gender,
          // image: this.file,
          // inventory: this.inventory,
          // exercise: [],
        };

        obj.title ? this.addWorkouts(obj) : console.log(0);
      }
    },
    newFile(event) {
      // this.file = URL.createObjectURL(e.target.files[0]);
      this.file = event.target.files[0];
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
  gap: 12px;
  margin-top: 12px;
}

.popup__list-exercises {
  display: flex;
  gap: 10px;
  overflow-x: scroll;
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

.popup_error {
  color:red;
}
</style>
