<template>
  <div>
    <section class="hero">
      <div class="hero__wrapper wrapper">
        <h1 class="hero__heading">
          Занимайся <br> планированием
        </h1>
        <p class="hero__description">
          Создай расписание занятий и под строй <br> под свой распорядок дня.
        </p>
      </div>
    </section>

    <section class="calendar-list">
      <div class="wrapper">
        <div class="calendar-list__head">
          <h3 class="calendar-list__heading">
            Выбери свою тренировку!
          </h3>
          <p class="calendar-list__month">
            Ноябрь
          </p>
        </div>
      </div>

      <div class="calendar__wrapper">
        <ul class="day-week__list">
          <li class="day-week__item">
            понедельник
          </li>
          <li class="day-week__item">
            вторник
          </li>
          <li class="day-week__item">
            среда
          </li>
          <li class="day-week__item">
            четверг
          </li>
          <li class="day-week__item">
            пятница
          </li>
          <li class="day-week__item">
            суббота
          </li>
          <li class="day-week__item">
            воскресенье
          </li>
        </ul>
        <ul class="calendar__list">
          <li v-for="(day, index) in days" :key="index" class="calendar__item">
            <div class="calendar__add">
              <p class="calendar__day">
                {{day.number}}
              </p>
              <button class="calender__button">
                +
              </button>
            </div>
            <ul class="calendar__workouts workouts">
              <li v-for="(workout, i) in day.workout" :key="i" class="workouts__item">
                <WorkoutCard :workout="workout" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import WorkoutCard from '@/components/WorkoutCard';
export default {
  components: {
    WorkoutCard,
  },
  data() {
    return {
      days: [],
    };
  },

  mounted() {
    this.fetchDays();
  },

  methods: {
    async fetchDays() {
      try {
        const response = await fetch('https://my-json-server.typicode.com/KreshX/fakeApi/db');
        const daysResponse = await response.json();
        this.days = JSON.parse(JSON.stringify(daysResponse)).days;
      } catch (e) {
        alert('Ошибка');
      }
    },
  },

};
</script>

<style  scoped>

.hero {
  padding-top: 65px;
}

.hero__wrapper {
  height: 750px;
  padding-left: 40px;
  background-image: url('../assets/hero cover (1).png');
  background-position: center;
}

.hero__heading {
  padding-top: 458px;
  padding-left: 40px;
  font-weight: 700;
  font-size: 64px;
  line-height: 1.1;
}

.hero__description {
  margin-top: 20px;
  padding-left: 40px;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;
}

.calendar-list__head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px;
}

.calendar-list__heading, .calendar-list__month {
  font-size: 36px;
}

.day-week__list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 1440px;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 35px;
  padding: 0 40px;
}

.day-week__item {
  width: 194px;
  text-align: center;
}

.calendar__add {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 10px;
  padding: 0 10px;
  padding-top: 13px;
}

.calender__button {
  width: 40px;
  height: 40px;
  color: #f76c1e;
  font-weight: 700;
  background: #ffffff;
  border: 1px solid #f76c1e;
  border-radius: 8px;
}

.calendar__list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 1440px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
}

.calendar__item {
  width: 194px;
  height: 194px;
  border: 1px solid #d5d5d5;
}

.calendar__day {
  padding: 0 6px;
  font-weight: 700;
  font-size: 32px;
}

</style>


