import axios from 'axios';

let oldWorkouts = [{
  id: 0,
  image: require('@/assets/WorkoutImage-0.png'),
  name: 'Работа над резервной копией',
  type: 'Силовая',
  cal: 113,
  difficulty: 'средне',
  time: 22,
  rec: true,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Спортивный коврик.',
  gender: 'Мужской',
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
{
  id: 1,
  image: require('@/assets/WorkoutImage-1.png'),
  name: 'Тренируем нашу выносливость',
  type: 'Скоростная',
  cal: 140,
  difficulty: 'легко',
  time: 25,
  rec: true,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Гантели, спортивный коврик.',
  gender: 'Мужской',
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
{
  id: 2,
  image: require('@/assets/WorkoutImage-2.png'),
  name: 'Тренировка на различные группы мышц',
  type: 'Скоростная',
  cal: 260,
  difficulty: 'сложно',
  time: 30,
  rec: true,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Спортивный коврик.',
  gender: 'Мужской',
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
{
  id: 3,
  image: require('@/assets/WorkoutImage-3.png'),
  name: 'Бубновый валет',
  type: 'Выносливость',
  cal: 132,
  difficulty: 'легко',
  time: 23,
  rec: false,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Гантели, спортивный коврик.',
  gender: 'Мужской',
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
{
  id: 4,
  image: require('@/assets/WorkoutImage-4.png'),
  name: 'Мощь! И не только',
  type: 'Выносливость',
  cal: 288,
  difficulty: 'сложно',
  time: 33,
  rec: false,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Гантели, спортивный коврик.',
  gender: 'Мужской',
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
{
  id: 5,
  image: require('@/assets/WorkoutImage-5.png'),
  name: 'Безграничные возможности',
  type: 'Силовая',
  cal: 180,
  difficulty: 'средне',
  time: 29,
  rec: false,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Спортивный коврик.',
  gender: 'Мужской',
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
{
  id: 6,
  image: require('@/assets/WorkoutImage-6.png'),
  name: 'На благо своего здоровья',
  type: 'Скоростная',
  cal: 102,
  difficulty: 'средне',
  time: 16,
  rec: false,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Гантели, спортивный коврик.',
  gender: 'Мужской',
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
{
  id: 7,
  image: require('@/assets/WorkoutImage-7.png'),
  name: 'Стремление к усовершенствованию',
  type: 'Силовая',
  cal: 174,
  difficulty: 'сложно',
  time: 35,
  rec: false,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Гантели, спортивный коврик.',
  gender: 'Мужской',
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
{
  id: 8,
  image: require('@/assets/WorkoutImage-8.png'),
  name: 'Улучшаем свои характеристики',
  type: 'Скоростная',
  cal: 94,
  difficulty: 'легко',
  time: 20,
  rec: false,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Гантели, спортивный коврик.',
  gender: 'Мужской',
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
{
  id: 9,
  image: require('@/assets/WorkoutImage-9.png'),
  name: 'Равномерная тренировка с направленностью на ноги',
  type: 'Выносливость',
  cal: 110,
  difficulty: 'средне',
  time: 18,
  rec: false,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Гантели, спортивный коврик.',
  gender: 'Мужской',
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
{
  id: 10,
  image: require('@/assets/WorkoutImage-10.png'),
  name: 'Утро бывает добрым',
  type: 'Силовая',
  cal: 112,
  difficulty: 'легко',
  time: 21,
  rec: false,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Гантели, спортивный коврик.',
  gender: 'Мужской',
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
{
  id: 11,
  image: require('@/assets/WorkoutImage-11.png'),
  name: 'На все тело',
  type: 'Силовая',
  cal: 380,
  difficulty: 'средне',
  time: 67,
  rec: false,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Гантели, спортивный коврик.',
  gender: 'Мужской',
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
{
  id: 12,
  image: require('@/assets/WorkoutImage-12.png'),
  name: 'Утепляемся сами!',
  type: 'Выносливость',
  cal: 263,
  difficulty: 'сложно',
  time: 46,
  rec: false,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Гантели, спортивный коврик.',
  gender: 'Мужской',
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
{
  id: 13,
  image: require('@/assets/WorkoutImage-13.png'),
  name: 'Держим свое тело в тонусе',
  type: 'Силовая',
  cal: 140,
  difficulty: 'легко',
  time: 24,
  rec: false,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Гантели, спортивный коврик.',
  gender: 'Мужской',
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
{
  id: 14,
  image: require('@/assets/WorkoutImage-14.png'),
  name: 'Тренировка, которая вгоняет В ритм жизни',
  type: 'Скоростная',
  cal: 116,
  difficulty: 'средне',
  time: 23,
  rec: false,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Гантели, спортивный коврик.',
  gender: 'Мужской',
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
{
  id: 15,
  image: require('@/assets/WorkoutImage-15.png'),
  name: 'Динамика и энергия',
  type: 'Выносливость',
  cal: 292,
  difficulty: 'средне',
  time: 46,
  rec: false,
  desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
  inventory: 'Гантели, спортивный коврик.',
  gender: 'Мужской',
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
}];
export default {
  actions: {
    async fetchWorkouts({ commit }) {
      const res = await fetch('https://polyfit.live/api/workouts');
      let workouts = await res.json();
      // const res = await axios.get('https://polyfit.live/api/workouts', {mode: 'no-cors'});
      // let workouts = res.data;
      commit('updateWorkouts', workouts);
    },
    async addWorkouts({ commit }, workout) {
      try {
        const response = await axios.post('https://polyfit.live/api/workouts', workout);
        commit('newWorkout', response.data);
      } catch (error) {
        alert(error);
      }
    },
    async deleteWorkouts({ commit }, workoutID) {
      try {
        const response = await axios.delete(`https://polyfit.live/api/workouts/${workoutID}`);
        commit('dltWorkout', workoutID);
        console.log(response);
      } catch (error) {
        alert(error);
      }
    },
    async patchWorkouts({ commit }, workout, workoutID) {
      try {
        // const response = await axios.patch(`https://polyfit.live/api/workouts/${workout.id}`);
        commit('ptchWorkout', workout, workoutID);
        // console.log(response);
      } catch (error) {
        alert(error);
      }
    },
  },
  mutations: {
    updateWorkouts(state, workouts) {
      state.workouts = workouts;
    },
    newWorkout: (state, workout) => state.workouts.push(workout),
    dltWorkout: (state, workoutID) => state.workouts.filter(function(item) {
      return item.id !== workoutID;
    }),
    ptchWorkout(state, workout, workoutID) {
      state.workouts[state.workouts.findIndex((obj) => obj.id === workoutID)] = workout;
    },
  },
  state: {
    workoutse: [{
      id: 0,
      image: require('@/assets/WorkoutImage-0.png'),
      name: 'Работа над резервной копией',
      type: 'Силовая',
      cal: 113,
      difficulty: 'средне',
      time: 22,
      rec: true,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Спортивный коврик.',
      gender: 'Мужской',
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
    {
      id: 1,
      image: require('@/assets/WorkoutImage-1.png'),
      name: 'Тренируем нашу выносливость',
      type: 'Скоростная',
      cal: 140,
      difficulty: 'легко',
      time: 25,
      rec: true,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Гантели, спортивный коврик.',
      gender: 'Мужской',
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
    {
      id: 2,
      image: require('@/assets/WorkoutImage-2.png'),
      name: 'Тренировка на различные группы мышц',
      type: 'Скоростная',
      cal: 260,
      difficulty: 'сложно',
      time: 30,
      rec: true,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Спортивный коврик.',
      gender: 'Мужской',
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
    {
      id: 3,
      image: require('@/assets/WorkoutImage-3.png'),
      name: 'Бубновый валет',
      type: 'Выносливость',
      cal: 132,
      difficulty: 'легко',
      time: 23,
      rec: false,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Гантели, спортивный коврик.',
      gender: 'Мужской',
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
    {
      id: 4,
      image: require('@/assets/WorkoutImage-4.png'),
      name: 'Мощь! И не только',
      type: 'Выносливость',
      cal: 288,
      difficulty: 'сложно',
      time: 33,
      rec: false,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Гантели, спортивный коврик.',
      gender: 'Мужской',
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
    {
      id: 5,
      image: require('@/assets/WorkoutImage-5.png'),
      name: 'Безграничные возможности',
      type: 'Силовая',
      cal: 180,
      difficulty: 'средне',
      time: 29,
      rec: false,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Спортивный коврик.',
      gender: 'Мужской',
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
    {
      id: 6,
      image: require('@/assets/WorkoutImage-6.png'),
      name: 'На благо своего здоровья',
      type: 'Скоростная',
      cal: 102,
      difficulty: 'средне',
      time: 16,
      rec: false,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Гантели, спортивный коврик.',
      gender: 'Мужской',
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
    {
      id: 7,
      image: require('@/assets/WorkoutImage-7.png'),
      name: 'Стремление к усовершенствованию',
      type: 'Силовая',
      cal: 174,
      difficulty: 'сложно',
      time: 35,
      rec: false,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Гантели, спортивный коврик.',
      gender: 'Мужской',
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
    {
      id: 8,
      image: require('@/assets/WorkoutImage-8.png'),
      name: 'Улучшаем свои характеристики',
      type: 'Скоростная',
      cal: 94,
      difficulty: 'легко',
      time: 20,
      rec: false,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Гантели, спортивный коврик.',
      gender: 'Мужской',
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
    {
      id: 9,
      image: require('@/assets/WorkoutImage-9.png'),
      name: 'Равномерная тренировка с направленностью на ноги',
      type: 'Выносливость',
      cal: 110,
      difficulty: 'средне',
      time: 18,
      rec: false,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Гантели, спортивный коврик.',
      gender: 'Мужской',
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
    {
      id: 10,
      image: require('@/assets/WorkoutImage-10.png'),
      name: 'Утро бывает добрым',
      type: 'Силовая',
      cal: 112,
      difficulty: 'легко',
      time: 21,
      rec: false,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Гантели, спортивный коврик.',
      gender: 'Мужской',
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
    {
      id: 11,
      image: require('@/assets/WorkoutImage-11.png'),
      name: 'На все тело',
      type: 'Силовая',
      cal: 380,
      difficulty: 'средне',
      time: 67,
      rec: false,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Гантели, спортивный коврик.',
      gender: 'Мужской',
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
    {
      id: 12,
      image: require('@/assets/WorkoutImage-12.png'),
      name: 'Утепляемся сами!',
      type: 'Выносливость',
      cal: 263,
      difficulty: 'сложно',
      time: 46,
      rec: false,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Гантели, спортивный коврик.',
      gender: 'Мужской',
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
    {
      id: 13,
      image: require('@/assets/WorkoutImage-13.png'),
      name: 'Держим свое тело в тонусе',
      type: 'Силовая',
      cal: 140,
      difficulty: 'легко',
      time: 24,
      rec: false,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Гантели, спортивный коврик.',
      gender: 'Мужской',
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
    {
      id: 14,
      image: require('@/assets/WorkoutImage-14.png'),
      name: 'Тренировка, которая вгоняет В ритм жизни',
      type: 'Скоростная',
      cal: 116,
      difficulty: 'средне',
      time: 23,
      rec: false,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Гантели, спортивный коврик.',
      gender: 'Мужской',
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
    {
      id: 15,
      image: require('@/assets/WorkoutImage-15.png'),
      name: 'Динамика и энергия',
      type: 'Выносливость',
      cal: 292,
      difficulty: 'средне',
      time: 46,
      rec: false,
      desc: 'Данная тренировка расчитана на улучшение выносливости тела к умеренным физическим нагрузкам. Время, выделенное на выполнение упражнений соответсвует уровню сложности данной тренировки.',
      inventory: 'Гантели, спортивный коврик.',
      gender: 'Мужской',
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
    }],
    workouts: [],
  },
  getters: {
    allWorkouts(state) {
      return state.workouts;
    },
  },
};

console.log(oldWorkouts);
