<template>
  <div>
    <section class="hero">
      <div class="hero__wrapper">
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
      <div class="advantages__wrapper">
        <h1 class="advantages__title">
          Преимущества онлайн тренировок
        </h1>
        <div class="advantages__content">
          <img :src="require(`@/assets/manFeatures.webp`)" alt="advantages-man" class="advantages__image advantages__image--man">
          <AdvantagesCard class="advantages__list" />
          <img :src="require(`@/assets/womanFeatures.webp`)" alt="advantages-woman" class="advantages__image advantages__image--woman">
        </div>
      </div>
    </section>

    <section class="types">
      <div class="types__wrapper">
        <h1 class="types__title">
          Виды тренировок и&nbsp;упражений
        </h1>
        <TypesCard />
      </div>
    </section>

    <section class="functions">
      <div class="functions__wrapper">
        <img class="functions__cover" :src="require(`@/assets/functionsCover.webp`)">
        <div class="functions__content">
          <h1 class="functions__title">
            Достоинства PolyFit
          </h1>
          <img class="functions__cover functions__cover--block" :src="require(`@/assets/functionsCover.webp`)">
          <FunctionsList />
        </div>
      </div>
    </section>

    <section class="start">
      <div class="start__wrapper">
        <div class="start__content">
          <h1 class="start__title">
            Начни свою первую тренировку
          </h1>
          <router-link class="start__button" to="/workouts">Тренировки</router-link>
        </div>
        <img class="start__image" :src="require(`@/assets/startWorkout.webp`)">
      </div>
    </section>
  </div>
</template>

<script>
import AdvantagesCard from '@/components/MainPage/AdvantagesCard';
import TypesCard from '@/components/MainPage/TypesCard';
import FunctionsList from '@/components/MainPage/FunctionsList';

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
}

@mixin title {
  margin-top: 80px;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 36px;
  margin: 28px 0 34px;
  line-height: 1.1;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
  @media screen and (max-width: 600px) {
    font-size: 28px;
  }
}

.hero {
  padding-top: 52px;
  background-image: url('../assets/homeCover.webp');
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero__info {
  @include wrapper;
}
.hero__wrapper {
  width: 100%;
  background: linear-gradient(40deg, #f76e1e69 0%, #f76e1e2b 30%, #f76e1e10 45%, #f76e1e00 100%);
  padding: calc(100vh - 52px - 240px) 40px 40px 60px;
  height: calc(100vh - 52px);
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


.advantages {
  margin-bottom: 60px;
}

.advantages__wrapper {
  position: relative;
  @include wrapper;
  padding: 0 20px;
}
.advantages__content {
  display: flex;
  justify-content: center;
  align-items: center;
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

.types {
  margin-bottom: 60px;
}

.types__wrapper {
  @include wrapper;
}

.types__title {
  @include title;
}
.functions__wrapper {
  @include wrapper;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center
}

.functions__title {
  @include title;
  margin: 0 28px 40px;

}

.functions__cover{
  max-width: 100%;
  object-fit: cover;
  height: 100%;
  &--block {
    display: none;
  }
}

.start__wrapper {
  @include wrapper;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 36px;
}

.start__title {
  @include title;
  margin-bottom: 28px;
}

.start__image {
  width: 100%;
  min-height: 440px;
  max-height: 640px;
  object-fit: cover;
  object-position: left;
}

.start__content {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.start__button {
  padding: 12px 24px;
  border-radius: 9px;
  border: none;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
  background: #f76c1e;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    box-shadow: 7px 5px 56px -14px #f76c1e;
  }

  &:active {
    transform: scale(0.97);
    box-shadow: 7px 5px 56px -10px #f76c1e;
  }
}



.advantages__image {
  position: absolute;
  z-index: -1;

  &--man {
    left: 10px;
  }

  &--woman {
    right: 10px;
  }
}

@media (max-width: 900px){
  .hero__wrapper {
    height: calc(100vh - 52px - 64px);
  }

  .hero__info {
    padding: calc(100vh - 52px - 292px) 20px 60px 30px;
  }


  .function__wrapper {
    flex-direction: column;
  }
  .functions__title {
    text-align: center;
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

  .functions__wrapper {
    display: block;
  }
  .functions__cover{
    display: none;
    &--block {
      display: block;
      margin-bottom: 20px;
    }
  }
}
</style>
