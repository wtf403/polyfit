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
      </div>

      <div class="calendar__wrapper">
        <ul class="calendar__list">
          <li v-for="(day, index) in days" :key="index" class="calendar__item">
            <p class="calendar__day">
              {{day.number}}
            </p>
            <ul class="calendar__workouts workouts">
              <li v-for="(workout, i) in day.workout" :key="i" class="workouts__item">
                {{workout}}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
  margin-top: 35px;
  padding: 0 60px;
}


</style>


