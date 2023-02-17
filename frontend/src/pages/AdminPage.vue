<template>
  <section class="admin">
    <div class="admin__wrapper">
      <div class="admin__block">
        <h2 class="admin__title">
          Тренировки
        </h2>
        <div class="admin__head-workouts">
          <button class="admin__add" @click="CreateWorkout()">
            Создать тренировку
          </button>
          <input v-model="searchWorkout" type="search" class="admin__search" placeholder="Поиск тренировки">
        </div>
        <ul class="admin__workouts">
          <li v-for="(workout, index) in sortWorkouts" :key="index" class="admin__workout">
            <WorkoutsItem :workout="workout" />
            <div class="admin__actions">
              <button class="admin__change" @click="ChangeWorkout(workout)">
                Изменить
              </button>
              <button class="admin__delete" @click="DeleteWorkout(workout)">
                Удалить
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div class="admin__block">
        <h2 class="admin__title">
          Упражнения
        </h2>
        <div class="admin__head-workouts">
          <button class="admin__add" @click="CreateWorkout()">
            Создать упражнение
          </button>
          <input v-model="searchExercise" type="search" class="admin__search" placeholder="Поиск упражнения">
        </div>
        <ul class="admin__workouts">
          <li v-for="(exercise, index) in sortExercise" :key="index" class="admin__workout">
            <TheExercise :exercise="exercise" />
            <div class="admin__actions">
              <button class="admin__change" @click="ChangeWorkout(exercise)">
                Изменить
              </button>
              <button class="admin__delete" @click="DeleteWorkout(exercise)">
                Удалить
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Transition name="fade">
      <AdminPopupChange ref="adminmodal1" :workout="selectWorkout" />
    </Transition>
    <Transition name="fade">
      <AdminPopupDelete ref="adminmodal2" :workout="selectWorkout" />
    </Transition>
    <Transition name="fade">
      <AdminPopupCreate ref="adminmodal3" />r
    </Transition>
  </section>
</template>

<script>
import WorkoutsItem from '@/components/WorkoutsItem';
import AdminPopupChange from '@/components/AdminPopupChange';
import AdminPopupDelete from '@/components/AdminPopupDelete.vue';
import AdminPopupCreate from '@/components/AdminPopupCreate.vue';
import TheExercise from '@/components/TheExercise.vue';

export default {
  components: {
    WorkoutsItem,
    AdminPopupChange,
    AdminPopupDelete,
    AdminPopupCreate,
    TheExercise,
  },
  data() {
    return {
      searchWorkout: '',
      selectWorkout: {},
      searchExercise: '',
      selectExercise: {},
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
      exercises: [
        {
          exerciseName: 'Подъем на носки',
          exerciseImage: 'https://static.w.f-365.ru/imported/webp/8/001.webp',
          exerciseCount: '16 повторений',
        },
        {
          exerciseName: 'Приседания',
          exerciseImage: 'https://static.w.f-365.ru/imported/webp/8/002.webp',
          exerciseCount: '20 повторений',
        },
        {
          exerciseName: 'Пружинка в приседе нонстоп',
          exerciseImage: 'https://static.w.f-365.ru/imported/webp/8/004x002.webp',
          exerciseCount: '16 повторений',
        },
        {
          exerciseName: 'Высокая планка',
          exerciseImage: 'https://static.w.f-365.ru/imported/webp/8/150.webp',
          exerciseCount: '16 повторений',
        },
        {
          exerciseName: 'Колени в пол в планке на локтях',
          exerciseImage: 'https://static.w.f-365.ru/imported/webp/8/157.webp',
          exerciseCount: '12 повторений',
        },
        {
          exerciseName: 'Руки-локти в планке',
          exerciseImage: 'https://static.w.f-365.ru/imported/webp/8/158.webp',
          exerciseCount: '12 повторений',
        },
        {
          exerciseName: 'Жим от плеч двумя руками',
          exerciseImage: 'https://static.w.f-365.ru/imported/webp/8/196.webp',
          exerciseCount: '16 повторений',
        },
        {
          exerciseName: 'Пружинка в гиперэкстензии',
          exerciseImage: 'https://static.w.f-365.ru/imported/webp/8/226x225.webp',
          exerciseCount: '16 повторений',
        },
        {
          exerciseName: 'Разведение гантелей лежа на 2 счета',
          exerciseImage: 'https://static.w.f-365.ru/imported/webp/8/250.webp',
          exerciseCount: '40 секунд',
        },
        {
          exerciseName: 'Жим узкий- французский поочередно на 2 счета',
          exerciseImage: 'https://static.w.f-365.ru/imported/webp/8/262.webp',
          exerciseCount: '1 минута 20 секунд',
        },
        {
          exerciseName: 'Опускание согнутых ног по одной',
          exerciseImage: 'https://static.w.f-365.ru/imported/webp/8/276.webp',
          exerciseCount: '18 повторений',
        },
        {
          exerciseName: 'Пружинка скручивания руки за головой',
          exerciseImage: 'https://static.w.f-365.ru/imported/webp/8/278x277.webp',
          exerciseCount: '16 повторений',
        },
        {
          exerciseName: 'Ситапы',
          exerciseImage: 'https://static.w.f-365.ru/imported/webp/8/285.webp',
          exerciseCount: '20 повторений',
        },
        {
          exerciseName: 'Крисс-кросс сидя колено-локоть',
          exerciseImage: 'https://static.w.f-365.ru/imported/webp/8/292.webp',
          exerciseCount: '24 повторений',
        },
      ],
    };
  },
  computed: {
    allWorkouts() {
      return this.$store.getters.allWorkouts;
    },
    sortWorkouts() {
      let text = this.searchWorkout;
      let list = this.workouts;
      list = this.sortBySearch(list, text);
      return list;
    },
    sortExercise() {
      let text = this.searchExercise;
      let list = this.exercises;
      list = this.sortBySearchExercise(list, text);
      return list;
    },
  },
  async mounted() {
    this.$store.dispatch('fetchWorkouts');
  },
  methods: {
    sortBySearch(list, text) {
      return list.filter(function(item) {
        return (item.name.toLowerCase().includes(text.toLowerCase()) || item.desc.toLowerCase().includes(text.toLowerCase()));
      });
    },
    sortBySearchExercise(list, text) {
      return list.filter(function(item) {
        return (item.exerciseName.toLowerCase().includes(text.toLowerCase()) || item.exerciseCount.toLowerCase().includes(text.toLowerCase()));
      });
    },
    ChangeWorkout(obj) {
      this.selectWorkout = obj;
      this.$refs.adminmodal1.ChangeWorkout();
    },
    DeleteWorkout(obj) {
      this.selectWorkout = obj;
      this.$refs.adminmodal2.DeleteWorkout();
    },
    CreateWorkout() {
      this.$refs.adminmodal3.CreateWorkout();
    },
  },
};
</script>

<style lang="scss" scoped>
.admin__wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 64px 40px 60px;
}

.admin__title {
  font-size: 24px;
  margin-bottom: 12px;
}

.admin__workouts {
  position: relative;
  display: flex;
  gap: 20px;
  list-style: none;
  max-height: 400px;
  overflow: scroll;
  padding-bottom: 16px;
  margin-top: 24px;
}

.admin__workout {
  position: relative;
}

.admin__actions {
  position: absolute;
  border: 1px solid black;
  border-radius: 8px;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.20);
  backdrop-filter: blur(3px);
  opacity: 0;
  &:hover {
    opacity: 1;
    transition: all 100ms ease-out;
  }
}

.admin__change {
  cursor: pointer;
  padding: 6px 12px;
  gap: 2px;
  border: 0;
  text-decoration: none;
  background-color: #2C7CDECC;
  border: 1px solid #2688EB;
  backdrop-filter: blur(2px);
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.3;
  color:white;
  &:hover {
    background-color: #1E6FDB;
  }
}

.admin__delete {
  cursor: pointer;
  padding: 6px 12px;
  gap: 2px;
  border: 0;
  text-decoration: none;
  border-radius: 8px;
  background-color: #D83E3CCC;
  border: 1px solid #E64646;
  backdrop-filter: blur(2px);
  font-size: 15px;
  line-height: 1.3;
  color:white;
  &:hover {
    background-color: #C93633;
  }
}

.admin__head-workouts {
  display: flex;
  justify-content: space-between;
}

.admin__add {
  cursor: pointer;
  width: 180px;
  height: 36px;
  padding: 12px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 15px;
  color: white;
  background-color: #3CA03E;
  border: 1px solid #4BB34B;
  &:hover {
    background-color: #2F8D32;
  }
}

.admin__search {

  display: flex;
  align-items: center;
  width: 260px;
  height: 36px;
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
