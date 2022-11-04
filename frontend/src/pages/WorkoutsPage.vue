<template>
  <div>
    <section class="workouts-settings">
      <WorkoutsSettings :workout="workout" />
    </section>
    <section class="workouts-content">
      <WorkoutsContent :workouts="workouts" />
    </section>
  </div>
</template>

<script>
import WorkoutsContent from '@/components/WorkoutsContent';
import WorkoutsSettings from '@/components/WorkoutsSettings';

export default {
  components: {
    WorkoutsContent,
    WorkoutsSettings,
  },
  data() {
    return {
      workouts: [{
        image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        name: 'Тренируем нашу выносливость',
        type: 'Силовая',
        cal: 140,
        defficulty: 'Легкий',
        time: 25,
      }],
    };
  },
};
</script>
