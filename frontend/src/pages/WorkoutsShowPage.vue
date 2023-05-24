<template>
  <div>
    <section class="workout">
      <WorkoutInfoComponent :workout="SelectWorkout" />
    </section>
    <section class="exercises">
      <ExercisesComponent :exercises="SelectWorkout.exercise" />
    </section>
  </div>
</template>

<script>
import ExercisesComponent from '@/components/WorkoutsShowPage/WorkoutsShowExercises';
import WorkoutInfoComponent from '@/components/WorkoutsShowPage/WorkoutsShowInfo';

// import { mapActions } from 'vuex';

export default {
  name: 'WorkoutsShow',
  components: {
    ExercisesComponent,
    WorkoutInfoComponent,
  },
  computed: {
    SelectWorkout() {
      return this.$store.getters.selectWorkout;
    },
  },
  async mounted() {
    this.$store.dispatch('getWorkoutsByID', this.$route.params.id);
  },
};
</script>
