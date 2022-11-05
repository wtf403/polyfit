<template>
  <div class="workouts-settings__wrapper">
    <div class="workouts-settings__search">
      <h3 class="workouts-settings__title">
        Найдите нужную для себя тренировку!
      </h3>
      <button class="workouts-settings__search-button">
        <svg class="workouts-settings__search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0001 14.3333L10.7708 10.104" stroke="#FCFCFD" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7.00008 11.6667C9.9456 11.6667 12.3334 9.27885 12.3334 6.33333C12.3334 3.38781 9.9456 1 7.00008 1C4.05456 1 1.66675 3.38781 1.66675 6.33333C1.66675 9.27885 4.05456 11.6667 7.00008 11.6667Z" stroke="#FCFCFD" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
    <div class="workouts-settings__filters filters">
      <div class="filters__base">
        <div class="filters__dropdowm dropdown">
          <DropdownComponent :dropdown-content="dropdowns.sorter" />
        </div>
        <div class="filters__radio radio">
          <RadioComponent :radio-content="radio.type" />
        </div>
        <div class="filters__open">
          <FiltersButton @open-filters="ShowFilters()" />
        </div>
      </div>
      <Transition name="bounce">
        <div v-if="showFilters" class="filters__inputs">
          <div class="filters__dropdowm dropdown">
            <p class="dropdown__category">
              Ваш пол
            </p>
            <DropdownComponent :dropdown-content="dropdowns.gender" />
          </div>
          <div class="filters__dropdowm dropdown">
            <p class="dropdown__category">
              Инвентарь
            </p>
            <DropdownComponent :dropdown-content="dropdowns.inventory" />
          </div>
          <div class="filters__dropdowm dropdown">
            <p class="dropdown__category">
              Группа мышц
            </p>
            <DropdownComponent :dropdown-content="dropdowns.muscles" />
          </div>
          <div class="filters__dropdowm dropdown">
            <p class="dropdown__category">
              Сложность
            </p>
            <DropdownComponent :dropdown-content="dropdowns.difficulty" />
          </div>
          <div class="filters__range range">
            <p class="range__category">
              Продолжительность
            </p>
            <RangeComponent />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import DropdownComponent from '@/components/WorkoutsSettingsDropdown';
import RadioComponent from '@/components/WorkoutsSettingsRadio';
import FiltersButton from '@/components/WorkoutsSettingsButton';
import RangeComponent from '@/components/WorkoutsSettingsRange';



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
          all: 'Все тренировки',
          power: 'Силовые',
          speed: 'Скоростные',
          stamina: 'Выносливые',
        },
      },
    };
  },
  methods: {
    ShowFilters() {
      this.showFilters = !this.showFilters;
      console.log(111);
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.workouts-settings__title {
  font-weight: 400;
  font-size: 24px;
  line-height: 1.1;
}

.workouts-settings__search-button {
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
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

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}

@keyframes bounce-in {
  0% {
    transform: translateY(-16px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
