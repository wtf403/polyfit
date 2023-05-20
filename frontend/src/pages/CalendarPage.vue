<template>
  <section class="calendar">
    <div class="calendar__wrapper">
      <div class="calendar__head">
        <p class="calendar__mode" :class="editMode?'calendar__mode--edit':'calendar__mode--simple'">
          {{!editMode?'Режим просмотра':'Режим редактирования'}}
        </p>
        <button class="calendar__button calendar__change-mode" :class="!editMode?'calendar__button--edit':'calendar__button--save'" @click="editMode = !editMode">
          {{!editMode?'Изменить':'Сохранить'}}
        </button>
      </div>
      <div class="calendar__content">
        <ul class="calendar__weekdays weekdays">
          <li v-for="(weekday, index) in weekdays" :key="index" class="weekdays__item">
            {{weekday}}
          </li>
        </ul>
        <ul class="calendar__workouts-list">
          <li v-for="(day, index) in getCalendar" :key="index" class="calendar__workouts-item" :class="day.active?'':'calendar__workouts-item--disable'">
            <div class="calendar__workouts-head">
              <p class="calendar__number-day">
                {{index%100}}
              </p>
              <button v-if="day.active&&editMode" class="calendar__button calendar__button--add" @click="addWorkout(day)">
                <svg viewBox="0 0 25 24" fill="none" width="24" height="24" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-iCfMLu iWfNDX">
                  <g><path d="M12.5 5V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.5 12H19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></g>
                </svg>
              </button>
            </div>
            <ul class="calendar__workouts-content">
              <li v-for="(object, i) in day.workouts" :key="i" class="calendar__workouts-object">
                <CalendarWorkoutsCard :workout="object" />
                <div v-if="editMode" class="calendar__actions">
                  <div class="calendar__subactions">
                    <router-link :to="{ path: '/workouts/'+object.id, query: {item: object}}" class="calendar__button calendar__button--edit">
                      Подробнее
                    </router-link>
                    <button class="calendar__button calendar__button--delete">
                      Удалить
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <Transition name="fade">
      <CalendarPopupAddWorkout ref="calendarAddWorkout" :day="selectDay" />
    </Transition>
  </section>
</template>

<script>
import CalendarPopupAddWorkout from '@/components/CalendarPage/CalendarPopupAddWorkout.vue';
import CalendarWorkoutsCard from '@/components/CalendarPage/CalendarWorkoutsCard.vue';

export default {
  components: {
    CalendarWorkoutsCard,
    CalendarPopupAddWorkout,
  },
  data() {
    return {
      editMode: false,
      selectDay: {},
      todayMonth: new Date().getMonth(),
      todayWeekday: new Date().getDay(),
      todayDay: new Date().getDate(),
      weekdays: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
      months: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
      calendar: {
        2: [
          {
            id: 15,
            image: require('@/assets/WorkoutImage-15.png'),
            name: 'Динамика и энергия',
            type: 'Выносливость',
            cal: 292,
            difficulty: 'средне',
            time: 46,
            rec: false,
            desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
            inventory: 'Гантели, спортивный коврик.',
            gender: 'Мужской',
          },
          {
            id: 15,
            image: require('@/assets/WorkoutImage-15.png'),
            name: 'Динамика и энергия',
            type: 'Выносливость',
            cal: 292,
            difficulty: 'средне',
            time: 46,
            rec: false,
            desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
            inventory: 'Гантели, спортивный коврик.',
            gender: 'Мужской',
          },
        ],
        20: [
          {
            id: 4,
            image: require('@/assets/WorkoutImage-4.png'),
            name: 'Мощь! И не только',
            type: 'Выносливость',
            cal: 288,
            difficulty: 'сложно',
            time: 33,
            rec: false,
            desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
            inventory: 'Гантели, спортивный коврик.',
            gender: 'Мужской',
          },
        ],
        21: [
          {
            id: 14,
            image: require('@/assets/WorkoutImage-14.png'),
            name: 'Тренировка, которая вгоняет В ритм жизни',
            type: 'Скоростная',
            cal: 116,
            difficulty: 'средне',
            time: 23,
            rec: false,
            desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
            inventory: 'Гантели, спортивный коврик.',
            gender: 'Мужской',
          },
          {
            id: 10,
            image: require('@/assets/WorkoutImage-10.png'),
            name: 'Утро бывает добрым',
            type: 'Силовая',
            cal: 112,
            difficulty: 'легко',
            time: 21,
            rec: false,
            desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
            inventory: 'Гантели, спортивный коврик.',
            gender: 'Мужской',
          },
        ],
        24: [{
          id: 9,
          image: require('@/assets/WorkoutImage-9.png'),
          name: 'Равномерная тренировка, которая тренирует ноги',
          type: 'Выносливость',
          cal: 110,
          difficulty: 'средне',
          time: 18,
          rec: false,
          desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
          inventory: 'Гантели, спортивный коврик.',
          gender: 'Мужской' },
        {
          id: 11,
          image: require('@/assets/WorkoutImage-11.png'),
          name: 'На все тело',
          type: 'Силовая',
          cal: 380,
          difficulty: 'средне',
          time: 67,
          rec: false,
          desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
          inventory: 'Гантели, спортивный коврик.',
          gender: 'Мужской',
        },
        ],
      },
    };
  },

  computed: {
    allWorkouts() {
      return this.$store.getters.allWorkouts;
    },
    getCalendar() {
      let date = new Date();
      let month = date.getMonth();
      let year = date.getFullYear();
      let daysInMonth = new Date(year, month + 1, 0).getDate();
      let daysObj = {};
      for (let i = 1; i <= daysInMonth; i++) {
        let dayOfWeek = new Date(year, month, i).getDay();
        daysObj[(month * 10).toString() + (i).toString()] = {
          active: true,
          weekday: dayOfWeek !== 0 ? this.weekdays[dayOfWeek - 1] : 'воскресение',
          date: new Date(year, month, i),
          workouts: this.calendar[i] ? this.calendar[i] : [ ],
        };
      }
      for (let i = 1; i < new Date(year, month, 1).getDay(); i++) {
        let dayOfWeek = new Date(year, month, i).getDay();
        let oldObj = {
          active: false,
          weekday: dayOfWeek !== 0 ? this.weekdays[dayOfWeek - 1] : 'воскресение',
          workouts: [ ],
        };
        let daysInLastMonth = new Date(year, month, 0).getDate();
        daysObj = Object.assign({[Number((month - 1).toString() + (daysInLastMonth - i + 1).toString())]: oldObj}, daysObj);
      }

      return daysObj;
    },
  },

  methods: {
    addWorkout(obj) {
      this.selectDay = obj;
      this.$refs.calendarAddWorkout.addWorkout();
    },
  },
};
</script>

<style lang="scss" scoped>

$border: rgba(166, 168, 179, 0.12);
$primary: #f66c1e;
$speed: #1070FF;

.calendar {
  background-color: #e4e6f550;
}
.calendar__wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 64px 40px 60px;
}

.calendar__head {
  display: flex;
  padding: 4px 0 8px;
  gap: 8px;
  align-items: center;
}
.calendar__content {
  overflow-x: scroll;
  background-color: white;
  border-radius: 12px 12px 4px 4px;
}

.calendar__weekdays {
  display: flex;
  align-items: center;
  list-style: none;
}

.popup {
  overflow: hidden;
}
.weekdays__item {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 194px;
  padding: 20px 0;
  border: 1px solid $border;
  border-right: 0;
  &:last-child {
    border-right: 1px solid $border;
    border-radius: 0 12px 0 0;
  }
  &:first-child {
    border-radius: 12px 0 0 0;
  }
}

.calendar__workouts-list {
  display: grid;
  grid-template-columns: repeat(7, 194px);
}

.calendar__workouts-item {
  border: 1px solid $border;
  border-top: none;
  border-right: none;
  height: 182px;
  &:nth-child(7n), &:last-child {
    border-right: 1px solid $border;
  }
  &--disable {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f9f9fa' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");    cursor: not-allowed;
  }
}

.calendar__workouts-content {
  overflow: scroll;
}

.calendar__button {
  display: flex;
  cursor: pointer;
  height: fit-content;
  width: fit-content;
  text-decoration: none;
  border: 1px solid;
  border-radius: 6px;
  color:white;
  font-size: 14px;
  padding: 6px 12px;
  box-shadow: 0 1px 0 rgba(27,31,36,0.1),inset 0 1px 0 rgba(255,255,255,0.03);
  &--add, &--save {
    background-color: #2da44e;
    border-color:rgba(28, 36, 27, 0.15);
    &:hover {
      background-color: #2c974b;
      border-color:rgba(28, 36, 27, 0.25);
    }
  }
  &--add {
    padding: 2px;
    position: absolute;
    right: 2px;
    top: 2px;
    & svg {
      height: 20px;
      width: 20px;
    }
  }

  &--edit {
    background-color: #218bff;
    border-color: rgba(27,31,36,0.15);
    &:hover {
      background-color: #0969da;
      border-color: rgba(27,31,36,0.25);
    }
  }

  &--delete {
    background-color: #da2e2b;
    border-color:rgba(36, 27, 27, 0.15);
    &:hover {
      background-color: #bc1714;
      border-color:rgba(36, 27, 27, 0.25);
    }
  }
}

.calendar__workouts-head {
  position: relative;
  display: flex;
  padding: 2px;
  justify-content: center;
  align-items: center;
}

.calendar__number-day {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  text-align: center;
  border-radius: 20px;
  font-size: 16px;
  background-color: none;
  opacity: 0.8;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    opacity: 1;
  }
}

.calendar__mode {
  min-width: 160px;
  font-size: 14px;
  color: black;
  font-size: 12px;
  font-weight: 500;
  padding: 6px 10px;
  border-radius: 20px;
  text-align: center;
  &--edit {
    background-color: #ece7fe;
    color: #8972f3;
    border: 1px solid #8972f3;
  }
  &--simple {
    background-color: #e0fbf6;
    color: #58c2a9;
    border: 1px solid #58c2a9;
  }
}

.calendar__workouts-object {
  position: relative;
}

.calendar__actions {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &:hover {
    & .calendar__subactions {
      transition: all 250ms linear;
      opacity: 1;
    }
  }
}

.calendar__subactions {
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  gap: 4px;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.40);
  backdrop-filter: blur(16px);
  z-index: 4;
}

.calendar__change-mode {
  min-width: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>


