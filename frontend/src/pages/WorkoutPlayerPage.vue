<template>
  <div class="player">
    <div v-if="chill" class="player__chill chill">
      <p class="chill__title">
        Время отдохнуть!
      </p>
      <p class="chill__text">
        Следующее упражнение начнется через {{10 - timer}} секунд.
      </p>
    </div>
    <div class="player__wrapper">
      <h2 class="player__title">
        {{workout.title}}
      </h2>
      <div class="player__cover">
        <div class="player__timer timer">
          <svg class="player__progress" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <circle class="sector" r="25" cx="50" cy="50" />
            <circle class="border" r="49.5" cx="50" cy="50" />
          </svg>
          <p class="timer__time">
            {{timer}}
          </p>
          <p class="timer__sec">
            сек
          </p>
        </div>
      </div>
      <div class="player__actions">
        <button class="player__button" @click="pause = true">
          <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h48v48H0z" fill="none" /><path d="M18 32h4V16h-4v16zm6-28C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm2-8h4V16h-4v16z" />
          </svg>
        </button>
        <button class="player__button" @click="pause = false">
          <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h48v48H0z" fill="none" /><path d="M20 33l12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z" />
          </svg>
        </button>
      </div>
      <div class="player__content">
        <WorkoutPlayerExercise :exercise="backEx" back @changid="(n) => {nowExID += n; timer = 0}" />
        <WorkoutPlayerExercise :exercise="nowEx" active />
        <WorkoutPlayerExercise :exercise="nextEx" next @changid="(n) => {nowExID += n; timer = 0}" />
      </div>
      <WorkoutPlayerInfo class="player__info" :calories="workout.calories" :type="workout.type" :difficulty="workout.difficulty" :time="workout.time" />
    </div>
  </div>
</template>

<script>
import WorkoutPlayerExercise from '@/components/WorkoutPlayerPage/WorkoutPlayerExercise.vue';
import WorkoutPlayerInfo from '@/components/WorkoutPlayerPage/WorkoutPlayerInfo';

export default {
  name: 'WorkoutsPlayer',
  components: {
    WorkoutPlayerInfo,
    WorkoutPlayerExercise,
  },
  data() {
    return {
      pause: false,
      timer: 0,
      nowExID: 0,
      chill: false,
    };
  },
  computed: {
    workout() {
      return this.$store.getters.selectWorkout;
    },
    nextEx() {
      let item = {};
      this.nowExID < this.workout.exercise.length - 1 ? item = this.workout.exercise[this.nowExID + 1] : item = {name: ''};
      return item;
    },
    backEx() {
      let item = {};
      this.nowExID > 0 ? item = this.workout.exercise[this.nowExID - 1] : item = {name: ''};
      return item;
    },
    nowEx() {
      let item = {};
      item = this.workout.exercise[this.nowExID];
      return item;
    },
  },
  created() {
    // this.$router.go(0);
  },
  async mounted() {
    await this.$store.dispatch('getWorkoutsByID', this.$route.params.id);
    this.$nextTick(function() {
      window.setInterval(() => {
        !this.pause ? this.timer = this.timer + 1 : false;
        const sector = document.querySelector('.sector');
        const strokeLength = sector.getTotalLength();
        let part = this.timer;
        let result = 0;
        if (this.chill) { result = strokeLength / 10 * part; } else { result = strokeLength / this.nowEx.time * part; }
        sector.style.strokeDasharray = result + ',' + strokeLength;
        if (this.timer > this.nowEx.time && this.chill === false) {
          this.timer = 0;
          this.chill = true;
        }
        if (this.chill === true && this.timer === 10) {
          this.nowExID++;
          this.timer = 0;
          this.chill = false;
        }
      }, 1000);
    });
  },
  methods: {
    newID(num) {
      this.nowExID += num;
    },
  },
};
</script>

<style scoped>
.player {
  position: relative;
}

.player__wrapper {
  position: relative;
  max-width: 2200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 80px 40px 0;
}

.player__content {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 54px;

  @media screen and (max-width: 640px) {
    gap: 12px;
  }
}

.player__switch {
  position: absolute;
  right: 0;
}

.player__cover {
  position: absolute;
  right: 40px;
  display: flex;
}

.timer__time {
  font-weight: 600;
  font-size: 56px;
}

.timer__sec {
  padding-bottom: 10px;
  font-size: 36px;
  font-variant: all-small-caps;
  line-height: 0.6;
}

.player__timer {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 156px;
  height: 156px;
  padding: 8px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.7);
  border: 6px solid #f66c1e;
  border-radius: 50%;
  backdrop-filter: blur(8px);

  @media screen and (max-width: 640px) {
    width: 120px;
    height: 120px;
  }
}

.player__title {
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.1;
  text-align: center;
}

.chill{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 20px;
  text-align: center;
  background-color: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(6px);
}

.chill__title {
  margin-bottom: 16px;
  color: white;
  font-weight: 700;
  font-size: 42px;
}

.chill__text {
  color: white;
  font-size: 24px;
}

.player__progress {
  position: absolute;
  z-index: -1;
  height: 100%;
}

.border{
  fill: none;
  stroke: transparent;
  stroke-width: 1px;
}

.sector{
  fill: none;
  stroke: #fff1e9;
  stroke-width: 50px;
}

.player__button {
  background: none;
  border: none;
  cursor: pointer;
  fill: #f66c1e;
}

.player__actions {
  position: absolute;
  top: 100px;
  right: 70px;
  z-index: 2;
}
</style>
