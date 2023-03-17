<template>
  <div>
    <section class="hero">
      <div class="hero__wrapper wrapper">
        <div class="hero__info">
          <h1 class="hero__title">
            Фитнес&nbsp;&mdash; это просто вместе с&nbsp;Polyfit
          </h1>
          <p class="hero__description">
            Достигайте своих фитнес-целей с&nbsp;помощью наших персонализированных онлайн-программ тренировок.
          </p>
        </div>
      </div>
    </section>

    <section class="advantages">
      <div class="advantages__wrapper wrapper">
        <h1 class="advantages__title">
          Преимущества <br> онлайн тренировок
        </h1>
        <div class="advantages__content">
          <img :src="require(`@/assets/manFeatures.webp`)" alt="advantages-man" class="advantages__image advantages__image--man">
          <AdvantagesCard class="advantages__list" />
          <img :src="require(`@/assets/womanFeatures.webp`)" alt="advantages-woman" class="advantages__image advantages__image--woman">
        </div>
      </div>
    </section>

    <section class="types">
      <div class="types__wrapper wrapper">
        <h1 class="types__title">
          Виды тренировок и упражений
        </h1>
        <TypesCard />
      </div>
    </section>

    <section class="functions">
      <div class="functions__wrapper wrapper">
        <img :src="require(`@/assets/functions image.png`)" alt="#" class="functions__image">
        <img :src="require(`@/assets/functions image (ipad pro).png`)" alt="#" class="functions__image--ipad-pro">
        <div class="functions__content">
          <h1 class="functions__title">
            Достоинства PolyFit
          </h1>
          <img :src="require(`@/assets/functions image (mobile).png`)" alt="#" class="functions__image--mobile">
          <FunctionsList />
        </div>
      </div>
    </section>

    <section class="start">
      <div class="start__wrapper wrapper">
        <h1 class="start__title advantages__title">
          Начни свою <br> первую тренировку
        </h1>
        <router-link class="start__button" to="/workouts">Тренировки</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import AdvantagesCard from '@/components/AdvantagesCard';
import TypesCard from '@/components/TypesCard';
import FunctionsList from '@/components/FunctionsList';

export default {
  components: {
    AdvantagesCard,
    TypesCard,
    FunctionsList,
  },
};
</script>

<style lang="scss" scoped>

@mixin wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}

@mixin title {
  margin-top: 80px;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 36px;
  line-height: 1.1;
  text-align: center;
}

.hero {
  padding-top: 52px;
}

.hero__info {
  width: 100%;
  height: 100%;
  background: linear-gradient(40deg, #f76e1e69 0%, #f76e1e2b 30%, #f76e1e10 45%, #f76e1e00 100%);
  padding: calc(100vh - 52px - 240px) 40px 60px 60px;
}
.hero__wrapper {
  @include wrapper;
  height: calc(100vh - 52px);
  background-image: url('../assets/homeCover.webp');
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero__title {
  color: #ffffff;
  font-weight: 600;
  font-size: 42px;
  max-width: 520px;
  margin-bottom: 16px;
}

.hero__description {
  color: #f6f6f6;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
  max-width: 520px;
}

.advantages__title {
  @include title;
}

.advantages__image {
  object-fit: cover;
  max-width: 340px;
  max-height: 400px;
}

.advantages__list {
  background-color: #ffffffbb;
  backdrop-filter: blur(14px);
  padding: 28px 0;
  border-radius: 12px;

}

.types__title {
  @include title;
}
.functions__wrapper {
  @include wrapper;
  display: flex;
  flex-direction: row;
  margin-top: 120px;
}

.functions__title {
  @include title;
  width: 100%;
  margin: 0;
  margin-bottom: 50px;
  text-align: left;
}

.functions__image {
  max-width: 50%;
}

.functions__image--ipad-pro, .functions__image--mobile {
  display: none;
}


.start__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 36%;
  background-image: url('../assets/startWorkout.webp');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
}


.advantages__content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.start__button {
  padding: 13px 16px 11px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.1;
  text-transform: uppercase;
  background: #f76c1e;
  background-color: none;
  border: none;
  border-radius: 14px;
  border-radius: 10px;
  cursor: pointer;
}

.start__title {
  margin-top: 50px;
  margin-bottom: 15px;
}

// @media (max-width: 1024px) {
  .advantages__image {
    position: absolute;
    z-index: -1;

    &--man {
      left: 0;
    }

    &--woman {
      right:0
    }
  // }
  .functions__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 120px;
  }

  .functions__image{
    display: none;
  }

  .functions__image--ipad-pro{
    display: block;
    max-width: 50%;
  }

  .advantages__wrapper{
    margin-right: 5%;
    margin-left: 5%;
  }

  .advantages__img--man, .advantages__img--woman {
    display: none;
  }

  .start__wrapper{
    padding-bottom: 38%;
  }
}

@media (max-width: 900px){
  .hero__wrapper {
    height: calc(100vh - 52px - 64px);
  }

  .hero__info {
    padding: calc(100vh - 52px - 292px) 20px 60px 30px;
  }
}

@media (max-width: 600px){

  .hero__wrapper {
    background-position-x: left;
  }
  .hero__title {
    font-size: 32px;
    max-width: 320px;
  }

  .advantages__image {
    display: none;
  }

  .hero__description {
    font-size: 16px;
    max-width: 320px;
  }

  .functions__image--ipad-pro, .functions__image{
    display: none;
  }

  .functions__image--mobile{
    display: block;
    width: 100%;
    margin-bottom: 5%;
  }
}
</style>
