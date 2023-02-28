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
      let list = this.allWorkouts;
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
