<template>
  <div class="animate__animated animate__fadeIn">
    <section class="workouts-settings">
      <WorkoutsSettings @change-sort="ChangeSort" @change-type="ChangeType" @change-range="ChangeTime" @change-difficulty="ChangeDifficulty" />
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
      id: 0,
      varSort: 'По новизне',
      varType: 'all',
      varTime: [0, 67],
      varDifficulty: 'all',
      workouts: [{
        image: require('@/assets/WorkoutImage-0.png'),
        name: 'Работа над резервной копией',
        type: 'Силовая',
        cal: 113,
        difficulty: 'средне',
        time: 22,
        rec: true,
        desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
        inventory: 'Спортивный коврик.',

      },
      {
        id: 1,
        image: require('@/assets/WorkoutImage-1.png'),
        name: 'Тренируем нашу выносливость',
        type: 'Скоростная',
        cal: 140,
        difficulty: 'легко',
        time: 25,
        rec: true,
        desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
        inventory: 'Гантели, спортивный коврик.',

      },
      {
        id: 2,
        image: require('@/assets/WorkoutImage-2.png'),
        name: 'Тренировка на различные группы мышц',
        type: 'Скоростная',
        cal: 260,
        difficulty: 'сложно',
        time: 30,
        rec: true,
        desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
        inventory: 'Спортивный коврик.',

      },
      {
        id: 3,
        image: require('@/assets/WorkoutImage-3.png'),
        name: 'Бубновый валет',
        type: 'Выносливость',
        cal: 132,
        difficulty: 'легко',
        time: 23,
        rec: false,
        desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
        inventory: 'Гантели, спортивный коврик.',
      },
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
      },
      {
        id: 5,
        image: require('@/assets/WorkoutImage-5.png'),
        name: 'Безграничные возможности',
        type: 'Силовая',
        cal: 180,
        difficulty: 'средне',
        time: 29,
        rec: false,
        desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
        inventory: 'Спортивный коврик.',
      },
      {
        id: 6,
        image: require('@/assets/WorkoutImage-6.png'),
        name: 'На благо своего здоровья',
        type: 'Скоростная',
        cal: 102,
        difficulty: 'средне',
        time: 16,
        rec: false,
        desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
        inventory: 'Гантели, спортивный коврик.',
      },
      {
        id: 7,
        image: require('@/assets/WorkoutImage-7.png'),
        name: 'Стремление к усовершенствованию',
        type: 'Силовая',
        cal: 174,
        difficulty: 'сложно',
        time: 35,
        rec: false,
        desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
        inventory: 'Гантели, спортивный коврик.',
      },
      {
        id: 8,
        image: require('@/assets/WorkoutImage-8.png'),
        name: 'Улучшаем свои характеристики',
        type: 'Скоростная',
        cal: 94,
        difficulty: 'легко',
        time: 20,
        rec: false,
        desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
        inventory: 'Гантели, спортивный коврик.',
      },
      {
        id: 9,
        image: require('@/assets/WorkoutImage-9.png'),
        name: 'Равномерная тренировка с направленностью на ноги',
        type: 'Выносливость',
        cal: 110,
        difficulty: 'средне',
        time: 18,
        rec: false,
        desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
        inventory: 'Гантели, спортивный коврик.',
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
      },
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
      },
      {
        id: 12,
        image: require('@/assets/WorkoutImage-12.png'),
        name: 'Утепляемся сами!',
        type: 'Выносливость',
        cal: 263,
        difficulty: 'сложно',
        time: 46,
        rec: false,
        desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
        inventory: 'Гантели, спортивный коврик.',
      },
      {
        id: 13,
        image: require('@/assets/WorkoutImage-13.png'),
        name: 'Держим свое тело в тонусе',
        type: 'Силовая',
        cal: 140,
        difficulty: 'легко',
        time: 24,
        rec: false,
        desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
        inventory: 'Гантели, спортивный коврик.',
      },
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
      }],
    };
  },
  computed: {
    sortWorkouts() {
      let variant = this.varSort;
      let type = this.varType;
      let time = this.varTime;
      let difficulty = this.varDifficulty;
      let list = this.sortByType(this.workouts, type);
      list = this.sortByTime(list, time);
      list = this.sortByDifficulty(list, difficulty);
      if (variant === 'По новизне') { return list; }
      return list.slice().sort(function(a, b) {
        { return ((variant === 'По длительности') ? (a.time > b.time) : (a.cal > b.cal)) ? 1 : -1; }
      });
    },
  },
  methods: {
    sortByType(list, type) {
      if (type === 'power') { return list.filter(function(item) { return item.type === 'Силовая'; }); }
      if (type === 'stamina') { return list.filter(function(item) { return item.type === 'Выносливость'; }); }
      if (type === 'speed') { return list.filter(function(item) { return item.type === 'Скоростная'; }); }
      return list;
    },
    sortByDifficulty(list, difficulty) {
      if (difficulty === 'Легко') { return list.filter(function(item) { return item.difficulty === 'легко'; }); }
      if (difficulty === 'Средне') { return list.filter(function(item) { return item.difficulty === 'средне'; }); }
      if (difficulty === 'Сложно') { return list.filter(function(item) { return item.difficulty === 'сложно'; }); }
      return list;
    },
    sortByTime(list, time) {
      return list.filter(function(item) { return (item.time <= time[1]) & (item.time >= time[0]); });
    },
    ChangeSort(variant) {
      this.varSort = variant;
    },
    ChangeType(variant) {
      this.varType = variant;
    },
    ChangeDifficulty(difficulty) {
      this.varDifficulty = difficulty;
    },
    ChangeTime(minTime, maxTime) {
      this.varTime = [minTime, maxTime];
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
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style: none;
}
</style>
