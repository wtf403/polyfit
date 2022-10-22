<template>
  <div>
    <section class="hero">
      <div class="hero__wrapper wrapper">
        <h1 class="hero__heading">
          Тренируйся <br> самостоятельно
        </h1>
        <p class="hero__description">
          Составь свой персонализированный план <br> спортивных и фитнес тренировок
        </p>
      </div>
    </section>

    <section class="advantages">
      <div class="advantages__wrapper wrapper">
        <h1 class="advantages__heading">
          Преимущества <br> онлайн тренировок
        </h1>
        <AdvantagesCard />
      </div>
    </section>

    <section class="types">
      <div class="types__wrapper wrapper">
        <h1 class="types__heading advantages__heading">
          Виды тренировок и упражений
        </h1>
        <TypesCard />
      </div>
    </section>

    <section class="functions">
      <div class="functions__wrapper wrapper">
        <img :src="require(`@/assets/functions image.png`)" alt="#" class="functions__image">
        <div class="functions__content">
          <h1 class="functions__heading advantages__heading">
            Достоинства PolyFit
          </h1>
          <FunctionsList />
        </div>
      </div>
    </section>

    <section class="start">
      <div class="start__wrapper wrapper">
        <h1 class="start__heading advantages__heading">
          Начни свою <br> первую тренировку
        </h1>
        <router-link class="start__button" to="/workout">Тренировки</router-link>
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

<style  scoped>
  .hero__wrapper {
    height: 750px;
    padding-left: 40px;
    background-image: url('../assets/hero cover.png');
    background-position: center;
  }

  .hero__heading {
    padding-top: 431px;
    padding-bottom: 27px;
    color: #ffffff;
    font-weight: 700;
    font-size: 64px;
  }

  .hero__description {
    color: #f6f6f6;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.3;
  }

  .advantages__heading {
    margin-top: 100px;
    margin-bottom: 70px;
    font-weight: 500;
    font-size: 56px;
    line-height: 1.1;
    text-align: center;
  }

  .functions__wrapper {
    display: flex;
    flex-direction: row;
    margin-top: 120px;
  }

  .functions__heading {
    width: 100%;
    margin: 0;
    margin-bottom: 50px;
    padding-left: 80px;
    text-align: left;
  }

  .functions__image {
    max-width: 50%;
  }

  @media (max-width: 1000px) {
    .functions__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 120px;
    }
  }

  .start__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 750px;
    background-image: url('../assets/start image.png');
    background-position: bottom;
    background-size: cover;
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

  .start__heading {
    margin-top: 50px;
    margin-bottom: 15px;
  }
</style>
