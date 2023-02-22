<template>
  <section class="admin">
    <div class="admin__wrapper">
      <div class="admin__block">
        <h2 class="admin__title">
          Тренировки
        </h2>
        <div class="admin__head">
          <div class="admin__head-actions">
            <button class="admin__button admin__button--add" @click="CreateWorkout()">
              Создать тренировку
            </button>
            <button class="admin__button admin__button--show" @click="showListWorkouts = !showListWorkouts">
              {{showListWorkouts?'Отобразить слайдером':'Плиточное отображение'}}
            </button>
          </div>
          <TheInput v-model="searchWorkout" placeholder="Поиск тренировки" type="search" @update:model-value="(newValue)=>(searchWorkout=newValue)" />
        </div>
        <ul class="admin__list" :class="showListWorkouts?'admin__list--full':''">
          <li v-for="(workout, index) in sortWorkouts" :key="index" class="admin__workout">
            <WorkoutsItem :workout="workout" />
            <div class="admin__actions">
              <div class="admin__subactions">
                <button class="admin__button admin__button--change" @click="ChangeWorkout(workout)">
                  Изменить
                </button>
                <button class="admin__button admin__button--delete" @click="DeleteWorkout(workout)">
                  Удалить
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="admin__block">
        <h2 class="admin__title">
          Упражнения
        </h2>
        <div class="admin__head">
          <div class="admin__head-actions">
            <button class="admin__button admin__button--add" @click="CreateExercise()">
              Создать упражнение
            </button>
            <button class="admin__button admin__button--show" @click="showListExercises = !showListExercises">
              {{showListExercises?'Отобразить слайдером':'Плиточное отображение'}}
            </button>
          </div>
          <TheInput v-model="searchExercise" placeholder="Поиск упражнения" type="search" @update:model-value="(newValue)=>(searchExercise=newValue)" />
        </div>
        <ul class="admin__list" :class="showListExercises?'admin__list--full':''">
          <li v-for="(exercise, index) in sortExercise" :key="index" class="admin__workout">
            <TheExercise :exercise="exercise" />
            <div class="admin__actions">
              <div class="admin__subactions">
                <button class="admin__button admin__button--change" @click="ChangeExercise(exercise)">
                  Изменить
                </button>
                <button class="admin__button admin__button--delete" @click="DeleteWorkout(exercise)">
                  Удалить
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Transition name="fade">
      <AdminPopupChangeExercise ref="adminChangeExercise" :exercise="selectExercise" />
    </Transition>
    <Transition name="fade">
      <AdminPopupChangeWorkout ref="adminChangeWorkout" :workout="selectWorkout" />
    </Transition>
    <Transition name="fade">
      <AdminPopupDeleteWorkout ref="adminDeleteWorkout" :workout="selectWorkout" />
    </Transition>
    <Transition name="fade">
      <AdminPopupCreateWorkout ref="adminCreateWorkout" />
    </Transition>
    <Transition name="fade">
      <AdminPopupCreateExercise ref="adminCreateExercise" />
    </Transition>
  </section>
</template>

<script>
import WorkoutsItem from '@/components/WorkoutsItem';
import TheInput from '@/components/TheInput';
import AdminPopupChangeWorkout from '@/components/AdminPopupChangeWorkout';
import AdminPopupDeleteWorkout from '@/components/AdminPopupDeleteWorkout.vue';
import AdminPopupCreateWorkout from '@/components/AdminPopupCreateWorkout.vue';
import TheExercise from '@/components/TheExercise.vue';
import AdminPopupCreateExercise from '@/components/AdminPopupCreateExercise.vue';
import AdminPopupChangeExercise from '@/components/AdminPopupChangeExercise.vue';

export default {
  components: {
    WorkoutsItem,
    AdminPopupChangeWorkout,
    AdminPopupDeleteWorkout,
    AdminPopupCreateWorkout,
    TheExercise,
    TheInput,
    AdminPopupCreateExercise,
    AdminPopupChangeExercise,
  },
  data() {
    return {
      showListExercises: false,
      showListWorkouts: false,
      selectWorkout: {},
      searchWorkout: '',
      selectExercise: {},
      searchExercise: '',
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
        gender: 'Мужской',
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
        gender: 'Мужской',

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
        gender: 'Мужской',

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
        gender: 'Мужской',
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
        gender: 'Мужской',
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
        gender: 'Мужской',
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
        gender: 'Мужской',
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
        gender: 'Мужской',
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
        gender: 'Мужской',
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
        gender: 'Мужской',
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
        gender: 'Мужской',
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
      this.$refs.adminChangeWorkout.ChangeWorkout();
    },
    DeleteWorkout(obj) {
      this.selectWorkout = obj;
      this.$refs.adminDeleteWorkout.DeleteWorkout();
    },
    CreateWorkout() {
      this.$refs.adminCreateWorkout.CreateWorkout();
    },
    CreateExercise() {
      this.$refs.adminCreateExercise.CreateExercise();
    },
    ChangeExercise(obj) {
      this.selectExercise = obj;
      this.$refs.adminChangeExercise.ChangeExercise();
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

.admin__block {
  margin-bottom: 40px;
}

.admin__title {
  font-size: 24px;
  margin-bottom: 12px;
}

.admin__list {
  position: relative;
  display: flex;
  gap: 20px;
  list-style: none;
  max-height: 400px;
  overflow: scroll;
  // padding-bottom: 16px;
  margin-bottom: 24px;
  &--full {
    flex-wrap: wrap;
    overflow: auto;
    height: 100%;
    max-height: none;
  }
}

.admin__workout {
  position: relative;
}

.admin__actions {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &:hover {
    & .admin__subactions {
    transition: all 200ms ease;
      opacity: 1;
    }
  }
}

.admin__subactions {
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  gap: 8px;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.40);
  backdrop-filter: blur(16px);
  z-index: 4;
}
.admin__button{
  cursor: pointer;
  height: fit-content;
  padding: 6px 12px;
  text-decoration: none;
  border: 1px solid;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.42;
  color:white;
  box-shadow: 0 1px 0 rgba(27,31,36,0.1),inset 0 1px 0 rgba(255,255,255,0.03);

  &:focus {
      box-shadow: none;
      outline: 1px solid #0000;
  }

  &--change {
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
    width: 100%;
    &:hover {
      background-color: #bc1714;
      border-color:rgba(36, 27, 27, 0.25);
    }
  }

  &--add {
    background-color: #2da44e;
    border-color:rgba(28, 36, 27, 0.15);
    &:hover {
      background-color: #2c974b;
      border-color:rgba(28, 36, 27, 0.25);
    }
  }

  &--show {
    color: #24292f;
    background-color: #f6f8fa;
    border-color:rgba(28, 36, 27, 0.15);
    &:hover {
      background-color: #f3f4f6;
      border-color:rgba(28, 36, 27, 0.25);
    }
  }
}

.admin__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.admin__head-actions {
  display: flex;
  gap: 12px;
}
</style>
