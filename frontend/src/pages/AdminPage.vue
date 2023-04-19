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
          <li v-for="(exercise, index) in sortExercise" :key="index" class="admin__exercises">
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
      <AdminPopupCreateWorkout ref="adminCreateWorkout" :all-exercises="allExercises" />
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
    };
  },
  computed: {
    allWorkouts() {
      return this.$store.getters.allWorkouts;
    },
    allExercises() {
      return this.$store.getters.allExercises;
    },
    sortWorkouts() {
      let text = this.searchWorkout;
      let list = this.allWorkouts;
      list = this.sortBySearch(list, text);
      return list;
    },
    sortExercise() {
      let text = this.searchExercise;
      let list = this.allExercises;
      list = this.sortBySearchExercise(list, text);
      return list;
    },
  },
  async mounted() {
    this.$store.dispatch('fetchWorkouts');
    this.$store.dispatch('fetchExercises');
  },
  methods: {
    sortBySearch(list, text) {
      return list.filter(function(item) {
        return (item.title.toLowerCase().includes(text.toLowerCase()) || item.description.toLowerCase().includes(text.toLowerCase()));
      });
    },
    sortBySearchExercise(list, text) {
      return list.filter(function(item) {
        return (item.title.toLowerCase().includes(text.toLowerCase()));
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

.admin__exercises {
  position: relative;
  width: 250px;
  height: 250px;
}
</style>
