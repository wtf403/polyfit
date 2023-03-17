<template>
  <div class="types-card">
    <div v-for="(card, index) in types" :key="index" class="types-card__wrapper" :class="{'types-card__wrapper--speed': card.color==='blue', 'types-card__wrapper--stamina': card.color === 'orange'}">
      <h3 class="types-card__title">
        {{card.name}}
      </h3>
      <p class="types-card__description">
        {{card.description}}
      </p>
      <img :src="card.image" alt="Image for Type workouts" class="types-card__image">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: [
        {
          name: 'Силовые упражнения',
          description: 'Тренировки с использованием весовых нагрузок для увеличения силы и мускулатуры путем стимуляции адаптивных тканей и функциональной силы организма.',
          image: require(`@/assets/powerMan.webp`),
          color: 'black',
        },
        {
          name: 'Скоростные занятия',
          description: 'Интенсивы с использованием высокой скорости и частоты движений, направленные на улучшение быстроты реакции, скорости передвижения и ловкости.',
          image: require(`@/assets/speedWoman.webp`),
          color: 'blue',
        },
        {
          name: 'Выносливые тренировки',
          description: 'Тренировки на улучшение кардиоваскулярной и дыхательной систем, позволяющих телу сохранять работоспособность на длительных физических нагрузках.',
          image: require(`@/assets/staminaMan.webp`),
          color: 'orange',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

  .types-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 20px;
    column-gap: 20px;
  }

  .types-card__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    height: 450px;
    padding: 20px;
    background-color: black;
    border-radius: 8px;
    &--speed{
      background-color: #3672bc;
    }
    &--stamina {
      background-color: #ec882c;
    }
  }

  .types-card__title {
    margin-bottom: 12px;
    color: white;
    font-weight: 400;
    font-size: 28px;
    text-align: center;
  }

  .types-card__description {
    color: white;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
  }

  .types-card__image {
    position: absolute;
    bottom: 0;
    width: 450px;
  }

  @media (max-width: 1024px){
    .types-card__wrapper{
      height: 400px;
      width: 400px;
    }
    .types-card__image {
      width: 400px;
    }

    .types-card__title {
      font-size: 22px;
    }

    .types-card__description {
      font-size: 12px;
    }
  }

  @media (max-width: 600px){
    .types-card__wrapper{
      height: 280px;
      width: 280px;
      padding: 12px;
    }

    .types-card__image {
      width: 280px;
    }

    .types-card__title{
      font-size: 18px;
      margin-bottom: 6px;
    }

    .types-card__description{
      font-size: 9.2px;
    }

  }
</style>
