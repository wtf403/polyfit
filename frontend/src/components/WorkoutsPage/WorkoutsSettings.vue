<template>
  <div class="workouts-settings__wrapper">
    <div class="workouts-settings__search">
      <h3 class="workouts-settings__title">
        Найдите нужную для себя тренировку!
      </h3>
      <div class="workouts-settings__search search">
        <Transition name="fade-right">
          <input v-if="showSearch" v-model="searchInput" type="text" class="search__input" placeholder="Название или описание" @change="MySearch">
        </Transition>
        <button class="search__button" @click="showSearch=!showSearch">
          <svg v-if="!showSearch" class="search__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0001 14.3333L10.7708 10.104" stroke="#FCFCFD" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.00008 11.6667C9.9456 11.6667 12.3334 9.27885 12.3334 6.33333C12.3334 3.38781 9.9456 1 7.00008 1C4.05456 1 1.66675 3.38781 1.66675 6.33333C1.66675 9.27885 4.05456 11.6667 7.00008 11.6667Z" stroke="#FCFCFD" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg v-if="showSearch" width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.529247 0.528575C0.789596 0.268226 1.21171 0.268226 1.47206 0.528575L5.00065 4.05717L8.52925 0.528575C8.7896 0.268226 9.21171 0.268226 9.47206 0.528575C9.73241 0.788925 9.73241 1.21103 9.47206 1.47138L5.94346 4.99998L9.47206 8.52858C9.73241 8.78893 9.73241 9.21103 9.47206 9.47138C9.21171 9.73173 8.7896 9.73173 8.52925 9.47138L5.00065 5.94279L1.47206 9.47138C1.21171 9.73173 0.789596 9.73173 0.529247 9.47138C0.268897 9.21103 0.268897 8.78893 0.529247 8.52858L4.05784 4.99998L0.529247 1.47138C0.268897 1.21103 0.268897 0.788925 0.529247 0.528575Z" fill="#FCFCFD" />
          </svg>
        </button>
      </div>
    </div>
    <div class="workouts-settings__filters filters">
      <div class="filters__base">
        <div class="filters__dropdowm dropdown" style="z-index: 9;">
          <DropdownComponent :dropdown-content="dropdowns.sorter" @get-dropdown="MySort" />
        </div>
        <div class="filters__radio radio">
          <RadioComponent :radio-content="radio.type" @get-radio="MyType" />
        </div>
        <div class="filters__open">
          <FiltersButton @open-filters="showFilters = !showFilters" />
        </div>
      </div>
      <Transition name="fade">
        <div v-if="showFilters" class="filters__inputs">
          <div class="filters__dropdowm dropdown">
            <p class="dropdown__category">
              Ваш пол
            </p>
            <DropdownComponent :dropdown-content="dropdowns.gender" />
          </div>
          <!-- <div class="filters__dropdowm dropdown">
            <p class="dropdown__category">
              Инвентарь
            </p>
            <DropdownComponent :dropdown-content="dropdowns.inventory" />
          </div> -->
          <!-- <div class="filters__dropdowm dropdown">
            <p class="dropdown__category">
              Группа мышц
            </p>
            <DropdownComponent :dropdown-content="dropdowns.muscles" />
          </div> -->
          <div class="filters__dropdowm dropdown">
            <p class="dropdown__category">
              Сложность
            </p>
            <DropdownComponent :dropdown-content="dropdowns.difficulty" @get-dropdown="MyDifficulty" />
          </div>
          <div class="filters__range range">
            <p class="range__category">
              Продолжительность
            </p>
            <RangeComponent @get-range="MyRange" />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import DropdownComponent from '@/components/WorkoutsPage/WorkoutsSettingsDropdown';
import RadioComponent from '@/components/WorkoutsPage/WorkoutsSettingsRadio';
import FiltersButton from '@/components/WorkoutsPage/WorkoutsSettingsButton';
import RangeComponent from '@/components/WorkoutsPage/WorkoutsSettingsRange';



export default {
  name: 'WorkoutsSettingsComponent',
  components: {
    DropdownComponent,
    RadioComponent,
    FiltersButton,
    RangeComponent,
  },
  data() {
    return {
      showFilters: false,
      showSearch: false,
      searchInput: '',
      dropdowns: {
        sorter: {
          new: 'По новизне',
          cal: 'По каллориям',
          time: 'По длительности',
        },
        gender: {
          all: 'Для всех',
          man: 'Мужской',
          woman: 'Женский',
        },
        inventory: {
          all: 'Не имеет значения',
          hall: 'В зале с оборудованием',
          free_weight: 'Свободный вес',
          your_weight: 'Свой вес',
          expander: 'С эспандером',
        },
        muscles: {
          all: 'Все группы мышц',
          breast: 'Мышцы груди',
          back: 'Мышцы спины',
          belly: 'Мышцы живота',
          legs: 'Мышцы ног',
          neck: 'Мышцы шеи',
          hands: 'Мышцы рук',
        },
        difficulty: {
          all: 'Все сложности',
          easy: 'Легко',
          norm: 'Средне',
          hard: 'Сложно',
        },

      },
      radio: {
        type: {
          'Все тренировки': 'Все тренировки',
          'Силовая': 'Силовые',
          'Скоростная': 'Скоростные',
          'Выносливая': 'Выносливые',
        },
      },
    };
  },
  methods: {
    MySort(variant) {
      this.$emit('change-sort', variant);
    },
    MyType(variant) {
      this.$emit('change-type', variant);
    },
    MyRange(minTime, maxTime) {
      this.$emit('change-range', minTime, maxTime);
    },
    MyDifficulty(difficulty) {
      this.$emit('change-difficulty', difficulty);
    },
    MySearch() {
      this.$emit('change-search', this.searchInput.toString());
    },
  },
};
</script>

<style scoped>

.workouts-settings__wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 40px 0;
}

.workouts-settings__search {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}

.workouts-settings__title {
  font-weight: 400;
  font-size: 24px;
  line-height: 1.1;
}

.search__button {
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background: #f76c1e;
  border: none;
  border-radius: 100px;
  cursor: pointer;
}

.search__button:hover {
  background: #ff5e00;
}

.workouts-settings__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  row-gap: 20px;
  column-gap: 10px;
}

.workouts-settings__item {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 332px;
}

.filters__base {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 12px;
}

.filters__inputs {
  z-index: 999;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  row-gap: 12px;
  margin-top: 20px;
}

.dropdown__category, .range__category {
  margin-bottom: 8px;
  color: #b1b5c4;
  font-weight: 700;
  font-size: 12px;
  line-height: 1;
  text-transform: uppercase;
}


.fade-enter-active, .fade-leave-active, .fade-right-enter-active, .fade-right-leave-active  {
  transition: all 0.8s;
}

.fade-enter, .fade-leave-to {
  transform: translateY(-14px);
  opacity: 0;
}

.fade-right-enter, .fade-right-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(6px);
  opacity: 0;
}

.search__input {
  position: absolute;
  top: -5px;
  right: -5px;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 260px;
  height: 48px;
  padding: 8px 8px 8px 16px;
  color: #23262f;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.1;
  background: white;
  border: 2px solid #e6e8ec;
  border-radius: 90px;
}

</style>
