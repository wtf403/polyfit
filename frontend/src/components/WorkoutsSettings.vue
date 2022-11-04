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
        <DropdownComponent :dropdown-content="dropdowns.sorter" />
      </div>
    </div>
  </div>
</template>

<script>
import DropdownComponent from '@/components/WorkoutsSettingsDropdown';


export default {
  name: 'WorkoutsSettingsComponent',
  components: {
    DropdownComponent,
  },
  props: ['workouts'],
  data() {
    return {
      dropdowns: {
        sorter: {
          new: 'По новизне',
          cal: 'По каллориям',
          time: 'По длительности',
        },
      },
    };
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

.workouts-settings__image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 16px;
}

.workouts-settings__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.workouts-settings__name {
  display: -webkit-box;
  max-height: 48px;
  overflow: hidden;
  font-weight: 400;
  font-size: 24px;
  line-height: 1;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.workouts-settings__count {
  padding: 8px 12px;
  color: #f66c1e;
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  background-color: #f6f6f6;
  border-radius: 8px;
}
</style>
