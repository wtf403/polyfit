<template>
    <div class="types-card">
        <div class="types-card__wrapper">
            <h3 class="types-card__title">Силовые упражнения</h3>
            <p class="types-card__description">Безопасная форма упражнений, когда движения <br> контролируются и тщательно определены.</p>
            <img :src="require(`@/assets/strength.png`)" alt="" class="types-card__img">
        </div>
        <div class="types-card__wrapper types-card__wrapper__bg-blue">
            <h3 class="types-card__title">Скоростные занятия</h3>
            <p class="types-card__description">Работа максимальной мощности, непрерывная предельная продолжительность которой не превышает 20-25 секунд.</p>
            <img :src="require(`@/assets/speed.png`)" alt="" class="types-card__img">
        </div>  
        <div class="types-card__wrapper types-card__wrapper__bg-orange">
            <h3 class="types-card__title">Выносливые тренировки</h3>
            <p class="types-card__description">Акт упражнений обычно аэробной системы для повышенияв сердечно-сосудистой и простой мышечной выносливости.</p>
            <img :src="require(`@/assets/stamina.png`)" alt="" class="types-card__img">
        </div>  
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    .types-card {
        display: flex;
        flex-direction: row;
        column-gap: 21px;
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 20px;
    }
    .types-card__wrapper {
        background-color: black;
        height: 450px;
        width: 450px;
        display: flex;
        flex-direction: column;
        align-items: center ;
    }

    .types-card__title {
        font-size: 34px;
        color: #FFFFFF;
        text-align: center;
        padding-top: 20px;
        margin-bottom: 10px;
    }

    .types-card__description {
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        line-height: 140%;
    }

    .types-card__wrapper__bg-blue {
        background-color: #3672BC;
    }

    .types-card__wrapper__bg-orange {
        background-color: #EC882C;
    }
</style>