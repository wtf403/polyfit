<template>
  <div class="player">
    <div class="player__wrapper wrapper">
      <div class="player__content">
        <WorkoutPlayerInfo class=".WorkoutPlayerInfo" />
        <div class="player__img-wrapper">
          <img :src="require('@/assets/player-img.png')" alt="player-img" class="player__img">
        </div>
        <WorkoutPlayerSwitch />
        <!-- <img :src="require('@/assets/player-img.png')" alt="player-img" class="player__img"> -->
      </div>
    </div>
  </div>
</template>

<script>
import WorkoutPlayerInfo from '@/components/WorkoutPlayerPage/WorkoutPlayerInfo';
import WorkoutPlayerSwitch from '@/components/WorkoutPlayerPage/WorkoutPlayerSwitch';
export default {
  name: 'WorkoutsPlayer',
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
.player__img-wrapper{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.player__img {

  max-width: 100%;
}

@media (max-width: 1024px) {
  .player__content {
    display: flex;
    flex-direction: column-reverse;
  }

}

</style>
