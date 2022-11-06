<template>
  <div>
    <section class="workouts-settings">
      <WorkoutsSettings @change-sort="ChangeSort" @change-type="ChangeType" />
    </section>
    <section class="workouts-content">
      <div class="workouts-content__wrapper">
        <ul class="workouts-content__list">
          <li v-for="(workout, index) in sortWorkouts" :key="index" class="workouts-content__item">
            <WorkoutsItem :workout="workout" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import WorkoutsItem from '@/components/WorkoutsItem';
import WorkoutsSettings from '@/components/WorkoutsSettings';

export default {
  components: {
    WorkoutsItem,
    WorkoutsSettings,
  },
  data() {
    return {
      varSort: 'По новизне',
      varType: 'Все тренировки',
      workouts: [{
        image: require('@/assets/WorkoutImage-0.png'),
        name: 'Работа над резервной копией',
        type: 'силовая',
        cal: 113,
        defficulty: 'средне',
        time: 22,
        rec: true,
      },
      {
        image: require('@/assets/WorkoutImage-1.png'),
        name: 'Тренируем нашу выносливость',
        type: 'Скоростная',
        cal: 140,
        defficulty: 'легко',
        time: 25,
        rec: true,
      },
      {
        image: require('@/assets/WorkoutImage-2.png'),
        name: 'Тренировка на различные группы мышц',
        type: 'Скоростная',
        cal: 260,
        defficulty: 'сложно',
        time: 30,
        rec: true,
      },
      {
        image: require('@/assets/WorkoutImage-3.png'),
        name: 'Бубновый валет',
        type: 'Выносливость',
        cal: 132,
        defficulty: 'легко',
        time: 23,
        rec: false,
      },
      {
        image: require('@/assets/WorkoutImage-4.png'),
        name: 'Мощь! И не только',
        type: 'Выносливость',
        cal: 288,
        defficulty: 'сложно',
        time: 33,
        rec: false,
      },
      {
        image: require('@/assets/WorkoutImage-5.png'),
        name: 'Безграничные возможности',
        type: 'Силовая',
        cal: 180,
        defficulty: 'средне',
        time: 29,
        rec: false,
      },
      {
        image: require('@/assets/WorkoutImage-6.png'),
        name: 'На благо своего здоровья',
        type: 'Скоростная',
        cal: 102,
        defficulty: 'средне',
        time: 16,
        rec: false,
      },
      {
        image: require('@/assets/WorkoutImage-7.png'),
        name: 'Стремление к усовершенствованию',
        type: 'Силовая',
        cal: 174,
        defficulty: 'сложно',
        time: 35,
        rec: false,
      },
      {
        image: require('@/assets/WorkoutImage-8.png'),
        name: 'Улучшаем свои характеристики',
        type: 'Скоростная',
        cal: 94,
        defficulty: 'легко',
        time: 20,
        rec: false,
      },
      {
        image: require('@/assets/WorkoutImage-9.png'),
        name: 'Равномерная тренировка с направленностью на ноги',
        type: 'Выносливость',
        cal: 110,
        defficulty: 'средне',
        time: 18,
        rec: false,
      },
      {
        image: require('@/assets/WorkoutImage-10.png'),
        name: 'Утро бывает добрым',
        type: 'Силовая',
        cal: 112,
        defficulty: 'легко',
        time: 21,
        rec: false,
      },
      {
        image: require('@/assets/WorkoutImage-11.png'),
        name: 'На все тело',
        type: 'Силовая',
        cal: 380,
        defficulty: 'средне',
        time: 67,
        rec: false,
      },
      {
        image: require('@/assets/WorkoutImage-12.png'),
        name: 'Утепляемся сами!',
        type: 'Выносливость',
        cal: 263,
        defficulty: 'сложно',
        time: 46,
        rec: false,
      },
      {
        image: require('@/assets/WorkoutImage-13.png'),
        name: 'Держим свое тело в тонусе',
        type: 'Силовая',
        cal: 140,
        defficulty: 'легко',
        time: 24,
        rec: false,
      },
      {
        image: require('@/assets/WorkoutImage-14.png'),
        name: 'Тренировка, которая вгоняет В ритм жизни',
        type: 'Скоростная',
        cal: 116,
        defficulty: 'средне',
        time: 23,
        rec: false,
      },
      {
        image: require('@/assets/WorkoutImage-15.png'),
        name: 'Динамика и энергия',
        type: 'Выносливость',
        cal: 292,
        defficulty: 'средне',
        time: 46,
        rec: false,
      }],
    };
  },
  computed: {
    sortWorkouts() {
      let variant = this.varSort;
      if (variant === 'По новизне') { return this.workouts; }
      return this.workouts.slice().sort(function(a, b) {
        { return ((variant === 'По длительности') ? (a.time > b.time) : (a.cal > b.cal)) ? 1 : -1; }
      });
    },
  },
  methods: {
    ChangeSort(variant) {
      this.varSort = variant;
    },
    ChangeType(variant) {
      this.varType = variant;
    },
  },
};
</script>

<style scoped>
.workouts-content__wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 40px 60px;
}

.workouts-content__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
}
</style>
