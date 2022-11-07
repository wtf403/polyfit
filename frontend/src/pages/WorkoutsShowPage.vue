<template>
  <div>
    <section class="workout">
      <WorkoutInfoComponent :workout="workout" />
    </section>
    <section class="exercises">
      <ExercisesComponent :exercises="workout.exercises" />
    </section>
  </div>
</template>

<script>
import ExercisesComponent from '@/components/WorkoutsShowExercises';
import WorkoutInfoComponent from '@/components/WorkoutsShowInfo';

export default {
  components: {
    ExercisesComponent,
    WorkoutInfoComponent,
  },
  data() {
    return {
      workout: {
        image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        name: 'Тренируем нашу выносливость',
        type: 'Силовая',
        cal: 140,
        difficulty: 'Легкий',
        time: 25,
        desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
        inventory: 'Гантели, спортивный коврик.',
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
      },
    };
  },
  mounted() {
    let exercoses = this.workout.exercises;
    this.workout = this.$route.query.item;
    this.workout['exercises'] = exercoses;
  },
};
</script>
