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
          <li v-for="(workout, index) in getCalendar" :key="index" class="calendar__workouts-item">
            <div class="calendar__workouts-head">
              <p class="calendar__number-day">
                {{index}}
              </p>
              <button class="calendar__button calendar__button--add">
                <svg viewBox="0 0 25 24" fill="none" width="24" height="24" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-iCfMLu iWfNDX">
                  <g><path d="M12.5 5V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.5 12H19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></g>
                </svg>
              </button>
            </div>
            <ul class="calendar__workouts-content">
              <li v-for="(object, i) in workout" :key="i" class="workouts-object">
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
            id: '444-444-44',
            name: 'Hi',
          },
          {
            id: '444-444-44',
            name: 'Hi',
          },
        ],
        20: [
          {
            id: '444-444-44',
            name: 'Hi',
          },
          {
            id: '444-444-44',
            name: 'Hi',
          },
        ],
        21: [
          {
            id: '444-444-44',
            name: 'Hi',
          },
          {
            id: '444-444-44',
            name: 'Hi',
          },
        ],
        24: [
          {
            id: '444-444-44',
            name: 'Hi',
          },
          {
            id: '444-444-44',
            name: 'Hi',
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
        daysObj[i] = {
          weekday: dayOfWeek !== 0 ? this.weekdays[dayOfWeek - 1] : 'воскресение',
          workouts: [
            {
              id: '444-444-444',
              name: 'Hi',
            },
            {
              id: '444-444-444',
              name: 'Hi',
            },
          ],
        };
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
}

.calendar__workouts-list {
  display: grid;
  grid-template-columns: repeat(7, 194px);
  gap: 1px solid black;
}

.calendar__workouts-item {
  border: 1px solid #b8c2cc;
  border-top: none;
  border-right: none;
  &:nth-child(7n) {
    border-right: 1px solid #b8c2cc;
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


