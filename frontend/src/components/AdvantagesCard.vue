<template>
    <div class="adv-card">
        <div class="adv-card__wrapper">
            <img :src="require(`@/assets/plan.svg`)" alt="#" class="adv-card__img">
            <h3 class="adv-card__title">Планируйте</h3>
            <p class="adv-card__description">Составьте собственное расписание тренировок</p>
        </div>
        <div class="adv-card__wrapper">
            <img :src="require(`@/assets/training.svg`)" alt="#" class="adv-card__img">
            <h3 class="adv-card__title">Тренируйтесь</h3>
            <p class="adv-card__description">Выполняйте упрожнения правильно по инструкциям</p>
        </div>
        <div class="adv-card__wrapper">
            <img :src="require(`@/assets/control.svg`)" alt="#" class="adv-card__img">
            <h3 class="adv-card__title">Контролируйте</h3>
            <p class="adv-card__description">Следите за своим физическим состоянием самостоятельно</p>
        </div>
        <div class="adv-card__wrapper">
            <img :src="require(`@/assets/evaluate.svg`)" alt="#" class="adv-card__img">
            <h3 class="adv-card__title">Оценивайте</h3>
            <p class="adv-card__description">Анализурейте собственный прогресс тренировок</p>
        </div>
        <div class="adv-card__wrapper">
            <img :src="require(`@/assets/food.svg`)" alt="#" class="adv-card__img">
            <h3 class="adv-card__title">Здоровая пища</h3>
            <p class="adv-card__description">Питайтесь здоровой и полезной едой согласно рекомандациям</p>
        </div>
        <div class="adv-card__wrapper">
            <img :src="require(`@/assets/relax.svg`)" alt="#" class="adv-card__img">
            <h3 class="adv-card__title">Отдыхайте</h3>
            <p class="adv-card__description">Между занятиями важно помнить о сне и отдыхе</p>
        </div>
        <div class="adv-card__wrapper">
            <img :src="require(`@/assets/run.svg`)" alt="#" class="adv-card__img">
            <h3 class="adv-card__title">Бегайте</h3>
            <p class="adv-card__description">Не забывайте бегать на улице,в зале или на беговой дорожке</p>
        </div>

        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    .adv-card {
        display: flex;
        max-width: 1400px;
        flex-wrap: wrap;
        column-gap: 80px;
        justify-content: center;
        row-gap: 80px;
    }

    .adv-card__wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 277px;
    }

    .adv-card__img {
        width: 112.5px;
        margin-bottom: 30px;
    }
    .adv-card__title {
        font-weight: 500;
        font-size: 32px;
        line-height: 110%;
        margin-bottom: 10px;
    }

    .adv-card__description {
        font-size: 18px;
        line-height: 110%;
        text-align: center;
    }
</style>