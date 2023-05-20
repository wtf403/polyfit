<template>
  <ThePopup ref="Popup">
    <template #actions="{ confirm, close }">
      <p class="popup__title">
        Сделайте выбор KPI
      </p>
      <p class="popup__text-info">
        (KPI – упражнения для определения ключевых показателей вашей эффективности)
      </p>
      <p class="popup__text">
        Мы предлагем вам лишь KPI относительно действующей вашей цели – <br><span style="font-weight: 500;">
          "{{purpose}}"
        </span>.
      </p>
      <ul class="popup__kpi-list">
        <li v-for="(kpi,index) in (idSelectedPurpose==1)?AllKPI.force:(idSelectedPurpose==2)?AllKPI.stamina:AllKPI.speed" :key="index" :class="(NewSelectedKPI.find(element => element == kpi)==kpi )?'popup__kpi-item popup__kpi-item--select':'popup__kpi-item'" :style="(idSelectedPurpose==1)?{backgroundColor: '#F4F4F4'}:(idSelectedPurpose==2)?{backgroundColor: '#FEE8DB'}:{backgroundColor: '#D9E8FF'}">
          <input :id="'checkbox'+index" v-model="NewSelectedKPI" :value="kpi" type="checkbox" class="popup__kpi-input">
          <label :for="'checkbox'+index" class="popup__kpi-label">
            {{kpi}}
          </label>
        </li>
      </ul>
      <div class="popup__actions">
        <button class="profile__button" :disabled="isConfirmationCorrect" @click="confirm">
          Сохранить
        </button>
        <button class="profile__button profile__button--cancel" :disabled="isConfirmationCorrect" @click="close">
          Отменить
        </button>
      </div>
    </template>
  </ThePopup>
</template>

<script>
import ThePopup from '@/components/ThePopup.vue';

export default {
  name: 'ThePopupKPIComponent',
  components: {
    ThePopup,
  },
  props: ['purpose', 'idSelectedPurpose', 'content'],
  data() {
    return {
      NewSelectedKPI: [],
      confirmation: '',
      AllKPI: {
        force: ['Классические\nотжимания', 'Классические\nПодтягивания', 'отжимания\nна пальцах', 'Классические\nПриседания', 'Приседания\nс весом', 'Подтягивания\nпишущая машинка', 'Приседания\nпистолетиком', 'отжимания\nна брусьях', 'отжимания\nв стойке на руках', 'отжимания\nна кулаках', 'Удержание пресса\nв уголке', 'отжимания\nв планше', 'Подтягивания\nразным хватом', 'Удержание пресса\nв планке', 'Жим\nот груди', 'отжимания\nна одной руке'],
        speed: ['Бег на\n30 метров', 'Бег на\n60 метров', 'Бег на\n100 метров', 'Бег на\n1000 метров', 'Бег на\n2000 метров', 'Бег на\n3000 метров', 'Кросс на\n5000 метров', 'Вис\nна время', 'Челночный бег\n3x10 метров', 'Прыжки в длинну\nс разбега', 'Прыжки в длинну\nс места'],
        stamina: ['Метание спортивного\nснаряда весом 700г', 'Наклон вперёд из\nположения стоя', 'Классические\nПриседания', 'Рывок гири\n16 кг', 'Классические\nотжимания', 'Классические\nПодтягивания', 'Жим\nот груди', 'Прыжки в длинну\nс места', 'Приседания\nпистолетиком', 'Удержание преса\nв планке'],
      },
    };
  },
  computed: {
    isConfirmationCorrect() {
      return this.confirmation === this.$options.CONFIRMATION_TEXT;
    },
  },
  methods: {
    async ChangeKPI() {
      this.confirmation = '';
      const popupResult = await this.$refs.Popup.open();
      if (popupResult) {
        for (let item in this.NewSelectedKPI) {
          this.NewSelectedKPI[item] = {
            name: this.NewSelectedKPI[item],
            units: 'незвестно',
            progress: [
              {
                date: 'скоро',
                result: 0,
              },
            ] };
        }
        this.$emit('update-kpi', this.NewSelectedKPI);
        this.NewSelectedKPI = [];
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

.popup__kpi-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 12px;
  max-height: calc(90vh - 380px);
  overflow: scroll;
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

.popup__kpi-item--select {
  background-color: rgba(255, 94, 0, 0.3) !important;
  border: 1px solid #f76c1e;
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
