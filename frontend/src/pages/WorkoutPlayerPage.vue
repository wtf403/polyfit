<template>
  <div class="player">
    <div class="player__wrapper wrapper">
      <div class="player__content">
        <WorkoutPlayerInfo />
        <WorkoutPlayerSwitch />
        <img :src="require('@/assets/player-img.png')" alt="player-img" class="player__img">
      </div>
    </div>
  </div>
</template>

<script>
import WorkoutPlayerInfo from '@/components/WorkoutPlayerPage/WorkoutPlayerInfo';
import WorkoutPlayerSwitch from '@/components/WorkoutPlayerPage/WorkoutPlayerSwitch';
export default {
  components: {
    WorkoutPlayerInfo, WorkoutPlayerSwitch,
  },
};
</script>

<style scoped>
.player__wrapper {
  position: relative;
  padding-top: 60px;
}

.player__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px;
}

.player__img {
  position: absolute;
  z-index: 0;
}


</style>
