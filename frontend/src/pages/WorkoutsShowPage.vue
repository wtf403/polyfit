<template>
  <div>
    <section class="workout">
      <div class="workout__wrapper">
        <img :src="workout.image" alt="Image for workout" class="workout__cover">
        <div clas="workout__info">
          <h2 class="workout__name">
            {{workout.name}}
          </h2>
          <ul class="workout__features-list">
            <li class="workout__features-item workout__features-item--type">
              <p class="workout__features-icon">
                🏋️‍♂️
              </p>
              <p class="workout__features-content">
                {{workout.type}}
              </p>
              <p class="workout__features-title">
                тренировка
              </p>
            </li>
            <li class="workout__features-item workout__features-item--cal">
              <p class="workout__features-icon">
                🔥
              </p>
              <p class="workout__features-content">
                {{workout.cal}}
              </p>
              <p class="workout__features-title">
                Ккал
              </p>
            </li>
            <li class="workout__features-item workout__features-item--defficulty">
              <p class="workout__features-icon">
                💪
              </p>
              <p class="workout__features-content">
                {{workout.defficulty}}
              </p>
              <p class="workout__features-title">
                уровень
              </p>
            </li>
            <li class="workout__features-item workout__features-item--time">
              <p class="workout__features-icon">
                ⏱️
              </p>
              <p class="workout__features-content">
                ~{{workout.time}}
              </p>
              <p class="workout__features-title">
                минут
              </p>
            </li>
          </ul>
          <div class="workout__block">
            <h3 class="workout__category">
              Описание
            </h3>
            <p class="workout__text">
              {{workout.desc}}
            </p>
          </div>
          <div class="workout__block">
            <h3 class="workout__category">
              Инвентарь
            </h3>
            <p class="workout__text">
              {{workout.inventory}}
            </p>
          </div>
          <div class="workout__actions">
            <a href="#" class="workout__start">Начать тренировку</a>
            <a href="#" class="workout__add-calendar">Добавить в календарь</a>
          </div>
        </div>
      </div>
    </section>
    <section class="exercises">
      <div class="exercises__wrapper">
        <h3 class="exercises__title">
          Перечень упражнений
        </h3>
        <ul class="exercises__list">
          <li v-for="(exercise, index) in workout.exercises" :key="index" class="exercises__item">
            <img :src="exercise.exerciseImage" alt="Image for exercise" class="exercises__image">
            <div class="exercises__info">
              <h4 class="exercises__name">
                {{exercise.exerciseName}}
              </h4>
              <p class="exercises__count">
                {{exercise.exerciseCount}}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      workout: {
        image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        name: 'Тренируем нашу выносливость',
        type: 'Силовая',
        cal: 140,
        defficulty: 'Легкий',
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
            exerciseCount: '12 повторений',
          },
          {
            exerciseName: 'Жим узкий- французский поочередно на 2 счета',
            exerciseImage: 'https://static.w.f-365.ru/imported/webp/8/262.webp',
            exerciseCount: '12 повторений',
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
};
</script>

<style  scoped>
.workout__wrapper {
  display: flex;
  gap: 20px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 40px 0;
}

.workout__cover{
  width: 100%;
  max-width: 664px;
  height: auto;
  max-height: 640px;
  border-radius: 16px;
  object-fit: cover;
}

@media screen and (max-width: 1080px) {
  .workout__cover{
    max-width: 464px;
  }
}

@media screen and (max-width: 848px) {
  .workout__wrapper {
    flex-direction: column;
  }

  .workout__cover{
    max-width: 100%;
  }
}

.workout__info {
  margin-right: 20px;
}

.workout__name {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.1;
}

.workout__category {
  margin-bottom: 6px;
  color: #00000099;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
}

.workout__text {
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
}

.workout__features-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.workout__start {
  padding: 16px 16px 14px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  text-transform: uppercase;
  background: #f66c1e;
  border-radius: 14px;
}

.workout__actions {
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;
  margin-top: 33px;
  column-gap: 20px;
}

.workout__add-calendar {
  padding: 16px 16px 14px;
  color: #f66c1e;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  text-transform: uppercase;
  background: #f66c1e29;
  border-radius: 14px;
}

.workout__features-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 132px;
  height: 132px;
  padding: 20px 40px;
  background: #f4f4f4;
  border-radius: 16px;
}

.workout__features-item--cal {
  background: #ffecec;
}

.workout__features-item--defficulty {
  background: #fff6e9;
}

.workout__features-item--time {
  background: #d7f2f4;
}


.workout__features-icon {
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 36px;
  line-height: 1;
}

.workout__features-content {
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 22px;
  line-height: 1;
  text-transform: lowercase;
}

.workout__features-title {
  color: #00000066;
  font-weight: 400;
  font-size: 18px;
  font-variant: small-caps;
  line-height: 1;
  text-transform: lowercase;
}


.exercises__wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
}

.exercises__title {
  margin: 40px auto;
  font-weight: 500;
  font-size: 56px;
  line-height: 1.1;
  text-align: center;
}

.exercises__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  row-gap: 20px;
  column-gap: 10px;
}

.exercises__item {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 332px;
}

.exercises__image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 16px;
}

.exercises__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.exercises__name {
  display: -webkit-box;
  max-height: 48px;
  overflow: hidden;
  font-weight: 400;
  font-size: 24px;
  line-height: 1;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.exercises__count {
  padding: 8px 12px;
  color: #f66c1e;
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  background-color: #f6f6f6;
  border-radius: 8px;
}
</style>
