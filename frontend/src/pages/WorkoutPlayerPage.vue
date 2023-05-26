<template>
  <div class="player">
    <div class="player__wrapper wrapper">
      <div class="player__content">
        <WorkoutPlayerInfo class="player__info" :calories="workout.calories" :type="workout.type" :difficulty="workout.difficulty" :time="workout.time" />
        <WorkoutPlayerSwitch class="player__switch" />
        <WorkoutPlayerExercise v-if="backEx" :exercise="backEx" />
        <WorkoutPlayerExercise v-if="nowEx" :exercise="nowEx" active />
        <WorkoutPlayerExercise v-if="nextEx" :exercise="nextEx" />
        <div class="player__cover">
          <div class="player__timer timer">
            <p class="timer__time">
              {{timer}}
            </p>
            <p class="timer__sec">
              сек
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkoutPlayerExercise from '@/components/WorkoutPlayerPage/WorkoutPlayerExercise.vue';
import WorkoutPlayerInfo from '@/components/WorkoutPlayerPage/WorkoutPlayerInfo';
import WorkoutPlayerSwitch from '@/components/WorkoutPlayerPage/WorkoutPlayerSwitch';
export default {
  name: 'WorkoutsPlayer',
  components: {
    WorkoutPlayerInfo,
    WorkoutPlayerSwitch,
    WorkoutPlayerExercise,
  },
  data() {
    return {
      timer: 0,
      nowExID: 0,
    };
  },
  computed: {
    workout() {
      return this.$store.getters.selectWorkout;
    },
    nextEx() {
      let item = {};
      this.nowExID !== this.workout.exercise.length - 1 ? item = this.workout.exercise[this.nowExID + 1] : item = false;
      return item;
    },
    backEx() {
      let item = {};
      this.nowExID !== 0 ? item = this.workout.exercise[this.nowExID - 1] : item = false;
      return item;
    },
    nowEx() {
      let item = {};
      item = this.workout.exercise[this.nowExID];
      return item;
    },
  },
  async mounted() {
    await this.$store.dispatch('getWorkoutsByID', this.$route.params.id);
    this.$nextTick(function() {
      window.setInterval(() => {
        this.timer = this.timer + 1;
        this.timer === 20 ? this.startWoorkout() : false;
      }, 1000);
    });
  },
  methods: {
    startWoorkout() {
      for (let exi = 0; exi < this.workout.exercise.length; exi++) {
        this.nowExID = exi;
      }
    },
  },
};
</script>

<style scoped>
.player__wrapper {
  /* display: flex; */
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 80px 40px 0;
}

.player__content {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.player__info {
  position: absolute;
  left: 0;
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
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 156px;
  height: 156px;
  padding: 8px;
  overflow: hidden;
  background-color: #00000006;
  border: 6px solid #f66c1e;
  border-radius: 50%;

  &::before {
    position: absolute;
    top: -50%;
    left: -50%;
    z-index: -1;
    width: 200%;
    height: 200%;
    background: conic-gradient(transparent, #f66c1e88, transparent 50%);
    animation: rotate 60s linear infinite;
    content: '';
  }
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
</style>
