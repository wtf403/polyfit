
<template>
  <div class="animate__animated animate__fadeIn">
    <section class="workouts-settings">
      <WorkoutsSettings @change-sort="ChangeSort" @change-type="ChangeType" @change-range="ChangeTime" @change-difficulty="ChangeDifficulty" @change-search="ChangeSearch" />
    </section>
    <section class="workouts-content">
      <div class="workouts-content__wrapper">
        <ul ref="parent" class="workouts-content__list">
          <li v-for="(workout, index) in sortWorkouts" :key="index" class="workouts-content__item">
            <WorkoutsItem :workout="workout" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import WorkoutsItem from '@/components/WorkoutsPage/WorkoutsItem';
import WorkoutsSettings from '@/components/WorkoutsPage/WorkoutsSettings';

export default {
  name: 'WorkoutsPage',
  components: {
    WorkoutsItem,
    WorkoutsSettings,
  },
  data() {
    return {
      id: 0,
      varSort: 'По новизне',
      varType: 'Все тренировки',
      varTime: [0, 67],
      varSearch: '',
      varDifficulty: 'Все сложности',
    };
  },
  computed: {
    allWorkouts() {
      return this.$store.getters.allWorkouts;
    },
    sortWorkouts() {
      let variant = this.varSort;
      let type = this.varType;
      let time = this.varTime;
      let text = this.varSearch;
      let difficulty = this.varDifficulty;
      let list = this.sortByType(this.allWorkouts, type);
      list = this.sortByTime(list, time);
      list = this.sortByDifficulty(list, difficulty);
      list = this.sortBySearch(list, text);
      if (variant === 'По новизне') { return list; }
      return list.slice().sort(function(a, b) {
        { return ((variant === 'По длительности') ? (a.calories > b.calories) : (a.calories > b.calories)) ? 1 : -1; }
      });
    },
  },
  async mounted() {
    this.$store.dispatch('fetchWorkouts');
  },
  methods: {
    sortByType(list, type) {
      if (type !== 'Все тренировки') { return list.filter(function(item) { return (item.type === null || item.type === type); }); }
      return list;
    },
    sortByDifficulty(list, difficulty) {
      if (difficulty !== 'Все сложности') { return list.filter(function(item) { return item.difficulty === difficulty; }); }
      return list;
    },
    sortByTime(list, time) {
      return list.filter(function(item) { return (Number(item.time) <= time[1]) & (Number(item.time) >= time[0]); });
    },
    sortBySearch(list, text) {
      // return list.filter(function(item) { return item.difficulty === 'сложно'; });
      return list.filter(function(item) {
        return (item.title.toLowerCase().includes(text.toLowerCase()) || item.description.toLowerCase().includes(text.toLowerCase()));
      });
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
    ChangeSearch(search) {
      this.varSearch = search;
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
