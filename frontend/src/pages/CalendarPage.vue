<template>
  <section class="calendar">
    <div class="calendar__wrapper">
      <TheDropdown :model-value="month" />
      <div class="calendar__content">
        <ul class="calendar__weekdays weekdays">
          <li v-for="(weekday, index) in weekdays" :key="index" class="weekdays__item">
            {{weekday}}
          </li>
        </ul>
        <ul class="calendar__workouts-list">
          <li v-for="(workout, index) in getCalendar" :key="index" class="calendar__workouts-item" :class="workout.active?'':'calendar__workouts-item--disable'">
            <div class="calendar__workouts-head">
              <p class="calendar__number-day">
                {{index%100}}
              </p>
              <button v-if="workout.active" class="calendar__button calendar__button--add">
                <svg viewBox="0 0 25 24" fill="none" width="24" height="24" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-iCfMLu iWfNDX">
                  <g><path d="M12.5 5V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.5 12H19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></g>
                </svg>
              </button>
            </div>
            <ul class="calendar__workouts-content">
              <li v-for="(object, i) in workout.workouts" :key="i" class="workouts-object">
                <CalendarWorkoutsCard :workout="object" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import TheDropdown from '@/components/TheDropdown.vue';
import CalendarWorkoutsCard from '@/components/CalendarWorkoutsCard';
// import MyDialog from '@/components/MyDialog';
export default {
  components: {
    TheDropdown,
    CalendarWorkoutsCard,
  },
  data() {
    return {
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
    showDialog() {
      this.dialogVisible = true;
    },

    hideDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>

$border: rgba(166, 168, 179, 0.12);
.calendar__wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 64px 40px 60px;
}

.calendar__content {
  overflow: scroll;
}

.calendar__weekdays {
  display: flex;
  align-items: center;
  list-style: none;
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
  gap: 1px solid black;
}

.calendar__workouts-item {
  border: 1px solid $border;
  border-top: none;
  border-right: none;
  height: 182px;
  &:nth-child(7n) {
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
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 2px;
  color: rgb(0, 0, 0);
  background-color: white;
  border: 1px solid black;
  color: black;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    filter: brightness(1.1);
    border: 1px solid rgba(0, 0, 0, 0);
    background-color: rgb(32, 129, 226);
    & svg {
      transform: scale(1.05);
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
  cursor: pointer;
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
</style>


