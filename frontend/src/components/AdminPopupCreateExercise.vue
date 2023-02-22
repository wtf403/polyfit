<template>
  <ProfilePopup ref="Popup">
    <template #actions="{ confirm, close }">
      <div class="popup__content">
        <form action="#" class="popup__form">
          <TheInput v-model="name" type="text" label="Наименование" @update:model-value="(newValue)=>(name=newValue)" />
          <div class="popup__form-column">
            <p class="popup__radio-label">
              Обложка
            </p>
            <TheInputFile label="Загрузите обложку" type="file" @update:model-value="(newValue)=>(newFile(newValue))" />
            <div class="popup__form-row">
              <img v-if="file" :src="file" alt="Big cover" class="popup__cover--big">
              <img v-if="file" :src="file" alt="Small cover" class="popup__cover--small">
            </div>
          </div>
          <TheDropdown v-model="type" label="Тип" :model-value="radio.type" @update:model-value="(newValue)=>(type=newValue)" />
          <div class="popup__form-row">
            <TheInput v-model="time" type="number" label="Длительность (сек.)" @update:model-value="(newValue)=>(time=newValue)" />
            <TheInput v-model="count" type="number" label="Количество повторений" @update:model-value="(newValue)=>(count=newValue)" />
            <TheInput v-model="cal" type="number" label="Каллории" @update:model-value="(newValue)=>(cal=newValue)" />
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
  </ProfilePopup>
</template>

<script>
import ProfilePopup from '@/components/ProfilePopup.vue';
import TheInput from '@/components/TheInput.vue';
import TheInputFile from '@/components/TheInputFile.vue';
import TheDropdown from '@/components/TheDropdown.vue';

export default {
  name: 'AdminPopupCreateExercise',
  components: {
    ProfilePopup,
    TheInput,
    TheInputFile,
    TheDropdown,
  },
  data() {
    return {
      confirmation: '',
      name: '',
      file: '',
      count: '',
      time: '',
      cal: '',
      type: '',
      radio: {
        type: {
          'На время': 'На время',
          'Повторения': 'Повторение',
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
    async CreateExercise() {
      this.confirmation = '';
      const popupResult = await this.$refs.Popup.open();
      if (popupResult) {
        console.log(1);
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
