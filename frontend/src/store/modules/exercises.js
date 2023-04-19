import axios from 'axios';

export default {
  actions: {
    async fetchExercises({ commit }) {
      const res = await fetch('https://polyfit.live/api/exercise');
      let exercises = await res.json();
      commit('updateExercises', exercises);
    },
    async addExercise({ commit }, exercise) {
      try {
        const response = await axios.post('https://polyfit.live/api/exercise', exercise);
        commit('newExercise', response.data);
      } catch (error) {
        alert(error);
      }
    },
  },
  mutations: {
    updateExercises(state, exercises) {
      state.exercises = exercises;
    },
    newExercise: (state, exercise) => state.exercises.push(exercise),
  },
  state: {
    exercises: [],
    oldExercises: [
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
  getters: {
    allExercises(state) {
      return state.exercises;
    },
  },
};
