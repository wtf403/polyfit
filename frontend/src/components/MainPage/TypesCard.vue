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
      <svg class="types-card__frame" width="453" height="453" viewBox="0 0 453 453" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" :d="(card.color==='black')?'M0 419.503V371.485C85.1786 369.081 195 361.867 304.85 344.253C355.48 336.134 405.585 325.883 453 313.073V362.731C406.967 374.644 359.448 384.111 312.45 391.647C199.48 409.762 86.917 417.095 0 419.503Z':((card.color==='blue')?'M0 357.095V307.177C79.1096 284.103 149.526 253.459 200.639 213.154C266.826 160.963 356.701 121.952 453 92.8777V143.111C365.861 170.519 287.4 205.868 230.361 250.846C170.161 298.316 88.4655 332.472 0 357.095Z':'M0 136.779V86.7718C36.3262 76.3731 73.3936 67.3365 110.297 59.492C234.257 33.1422 358.97 19.7259 453 14.0598V62.1487C361.197 67.8005 240.191 80.9533 120.278 106.443C79.4049 115.131 38.9482 125.195 0 136.779Z')" :fill="(card.color==='black')?'url(#paintBlack)':((card.color==='blue')?'url(#paintBlue)':'url(#paintOrange)')" />
        <defs>
          <linearGradient id="paintBlack" x1="453" y1="336.5" x2="1.78405e-06" y2="395" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2F2F2F" />
            <stop offset="0.5" stop-color="#0F0E0E" />
            <stop offset="1" stop-color="#414141" />
          </linearGradient>
          <linearGradient id="paintBlue" x1="453" y1="117" x2="8.12443e-06" y2="349" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5A9CFF" />
            <stop offset="0.5" stop-color="#3471CC" />
            <stop offset="1" stop-color="#3E85F0" />
          </linearGradient>
          <linearGradient id="paintOrange" x1="5.52577e-07" y1="122" x2="453" y2="37.0001" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F8A458" />
            <stop offset="0.494792" stop-color="#F99A43" />
            <stop offset="1" stop-color="#F7953B" />
          </linearGradient>
        </defs>
      </svg>
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
    gap: 20px;
  }

  .types-card__wrapper {
    z-index: -2;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    height: 450px;
    padding: 20px;
    background-image: linear-gradient(
      225deg,
      hsl(240deg 14% 4%) 0%,
      hsl(240deg 16% 4%) 8%,
      hsl(240deg 19% 3%) 15%,
      hsl(240deg 21% 3%) 22%,
      hsl(240deg 25% 2%) 28%,
      hsl(240deg 30% 2%) 34%,
      hsl(240deg 38% 2%) 40%,
      hsl(240deg 53% 1%) 46%,
      hsl(240deg 83% 1%) 51%,
      hsl(0deg 50% 1%) 57%,
      hsl(0deg 21% 1%) 62%,
      hsl(0deg 13% 2%) 67%,
      hsl(0deg 10% 3%) 73%,
      hsl(0deg 8% 3%) 78%,
      hsl(0deg 6% 4%) 83%,
      hsl(0deg 5% 5%) 89%,
      hsl(0deg 4% 6%) 94%,
      hsl(0deg 3% 6%) 100%
    );
    border-radius: 8px;
    &--speed{
      background-image: linear-gradient(
        130deg,
        hsl(213deg 67% 56%) 0%,
        hsl(214deg 65% 55%) 6%,
        hsl(214deg 63% 53%) 12%,
        hsl(214deg 62% 52%) 18%,
        hsl(215deg 61% 50%) 24%,
        hsl(215deg 64% 48%) 29%,
        hsl(215deg 67% 46%) 35%,
        hsl(214deg 72% 44%) 41%,
        hsl(214deg 79% 42%) 47%,
        hsl(214deg 81% 42%) 53%,
        hsl(214deg 76% 44%) 59%,
        hsl(214deg 73% 46%) 65%,
        hsl(214deg 70% 48%) 71%,
        hsl(214deg 67% 49%) 76%,
        hsl(214deg 68% 51%) 82%,
        hsl(213deg 71% 53%) 88%,
        hsl(213deg 74% 55%) 94%,
        hsl(213deg 78% 56%) 100%
      );
    }
    &--stamina {
      background-image: linear-gradient(
        240deg,
        hsl(29deg 92% 61%) 0%,
        hsl(28deg 92% 60%) 6%,
        hsl(28deg 91% 59%) 11%,
        hsl(28deg 91% 58%) 17%,
        hsl(28deg 91% 57%) 22%,
        hsl(28deg 90% 56%) 28%,
        hsl(28deg 90% 55%) 33%,
        hsl(28deg 90% 53%) 39%,
        hsl(28deg 89% 52%) 44%,
        hsl(29deg 89% 50%) 50%,
        hsl(28deg 90% 52%) 56%,
        hsl(28deg 90% 53%) 61%,
        hsl(28deg 91% 54%) 67%,
        hsl(28deg 92% 55%) 72%,
        hsl(28deg 93% 56%) 78%,
        hsl(28deg 93% 58%) 83%,
        hsl(28deg 94% 59%) 89%,
        hsl(28deg 95% 60%) 94%,
        hsl(29deg 96% 61%) 100%
      );
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

  .types-card__frame {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
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
