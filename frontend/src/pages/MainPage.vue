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
        <div class="advantages__list">
          <img :src="require(`@/assets/advantages-man.png`)" alt="advantages-man" class="advantages__img--man">
          <AdvantagesCard />
          <img :src="require(`@/assets/advantages-woman.png`)" alt="advantages-woman" class="advantages__img--woman">
        </div>
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
        <img :src="require(`@/assets/functions image (ipad pro).png`)" alt="#" class="functions__image--ipad-pro">
        <div class="functions__content">
          <h1 class="functions__heading advantages__heading">
            Достоинства PolyFit
          </h1>
          <img :src="require(`@/assets/functions image (mobile).png`)" alt="#" class="functions__image--mobile">
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

.advantages__list {
  display: flex;
  flex-direction: row;
}

.hero__wrapper {
  height: 100%;
  padding-bottom: 5%;
  padding-left: 1.5%;
  background-image: url('../assets/hero cover.png');
  background-repeat: no-repeat;
  background-size: 100%;
}

.hero__heading {
  padding-top: 40%;
  padding-bottom: 2%;
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
  margin-top: 9%;
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

.functions__image--ipad-pro, .functions__image--mobile {
  display: none;
}


.start__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 36%;
  background-image: url('../assets/start image.png');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
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

@media (max-width: 1024px) {
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

@media (max-width: 600px){
  .hero__heading, .advantages__heading{
    font-size: 28px;
  }

  .hero__description, .start__button{
    font-size: 12px;
  }

  .functions__image--ipad-pro{
    display: none;
  }

  .functions__image--mobile{
    display: block;
    width: 100%;
    margin-bottom: 5%;
  }
}
</style>
