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
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      workout: {
        image: 'https://img.freepik.com/free-photo/athletic-shirtless-young-male-fitness-model-holds-dumbbell-with-light-isolated-dark-background_613910-22.jpg?w=1480&t=st=1667063079~exp=1667063679~hmac=ebd522c91dd0ecb771513586dd6b2de158418ab6a15222e07dca384bc5cbcf90',
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
            exerciseImage: '',
            exerciseCount: '16 повторений',
          },
          {
            exerciseName: 'Подъем на носки',
            exerciseImage: '',
            exerciseCount: '16 повторений',
          },
          {
            exerciseName: 'Подъем на носки',
            exerciseImage: '',
            exerciseCount: '16 повторений',
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
  max-width: 664px;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
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
  padding: 13px 16px 14px;
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
  padding: 13px 16px 14px;
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
</style>
