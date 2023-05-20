<template>
  <ul class="advantages-card">
    <li v-for="(card, index) in advantages" :key="index" class="advantages-card__wrapper">
      <div class="advantages-card__frame">
        <img :src="card.image" alt="#" class="advantages-card__image">
      </div>
      <div class="advantages-card__info">
        <h3 class="advantages-card__title">
          {{card.name}}
        </h3>
        <p class="advantages-card__description">
          {{card.description}}
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      advantages: [
        {
          name: 'Планируйте',
          description: 'Составьте собственное расписание тренировок',
          image: require(`@/assets/plan.svg`),
        },
        {
          name: 'Тренируйтесь',
          description: 'Выполняйте упрожнения правильно по\xa0инструкциям',
          image: require(`@/assets/training.svg`),
        },
        {
          name: 'Контролируйте',
          description: 'Выполняйте упражнения правильно по\xa0инструкциям',
          image: require(`@/assets/control.svg`),
        },
        {
          name: 'Оценивайте',
          description: 'Анализурейте собственный прогресс тренировок',
          image: require(`@/assets/evaluate.svg`),
        },
        {
          name: 'Отдыхайте',
          description: 'Между занятиями важно помнить о\xa0сне и\xa0отдыхе',
          image: require(`@/assets/relax.svg`),
        },
        {
          name: 'Бегайте',
          description: 'Чаще бегайте на улице, в зале или на беговой дорожке',
          image: require(`@/assets/run.svg`),
        },
      ],
    };
  },
};
</script>

<style scoped>

.advantages-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 24px;
  width: fit-content;
  max-width: 640px;
  column-gap: 24px;
}

.advantages-card__wrapper{
  display: flex;
  align-items: center;
}

.advantages-card__title {
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.1;
}

.advantages-card__description {
  font-size: 12.8px;
  line-height: 1.2;
  text-align: start;
}

.advantages-card__info {
  display: flex;
  flex-direction: column;
  max-width: 200px;
  padding-left: 15px;
}

.advantages-card__image {
  width: 60px;
  height: 60px;
}

.advantages-card__frame {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  background: #ffe9dda9;
  border-radius: 50%;
  backdrop-filter: blur(4px);
}

@media screen and (max-width: 600px) {
  .advantages-card__title {
    margin-bottom: 4px;
    font-size: 18px;
  }

  .advantages-card__description {
    font-size: 11.2px;
  }

  .advantages-card__frame {
    padding: 12px;
  }

  .advantages-card__image {
    width: 48px;
    height: 48px;
  }
}
</style>
