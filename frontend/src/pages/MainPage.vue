<template>
    <div>
        <section class="hero">
            <div class="hero__wrapper wrapper">
                <h1 class="hero__heading">Тренируйся <br/> самостоятельно</h1>
                <p class="hero__description">Составь свой персонализированный план <br/> спортивных и фитнес тренировок</p>
            </div>
        </section>

        <section class="advantages">
            <div class="advantages__wrapper wrapper">
                <h1 class="advantages__heading">Преимущества <br> онлайн тренировок</h1>
                <AdvantagesCard></AdvantagesCard>
            </div>
        </section>

        <section class="types">
            <div class="types__wrapper wrapper">
                <h1 class="types__heading advantages__heading">Виды тренировок и упражений</h1>
                <TypesCard></TypesCard>
            </div>
        </section>

        <section class="functions">
            <div class="functions__wrapper wrapper">
                <img :src="require(`@/assets/functions image.png`)" alt="#" class="functions__image">
                <div class="functions__content">
                    <h1 class="functions__heading advantages__heading">Достоинства PolyFit</h1>
                    <FunctionsList></FunctionsList>
                </div>
            </div>
        </section>

        <section class="start">
            <div class="start__wrapper wrapper">
                <h1 class="start__heading advantages__heading">Начни свою <br> первую тренировку</h1>
                <button class="start__button">Тренироваться</button>
            </div>
        </section>
    </div>
    
    
</template>

<script>
    import AdvantagesCard from '@/components/AdvantagesCard'
    import TypesCard from '@/components/TypesCard'
    import FunctionsList from '@/components/FunctionsList'

    export default {
        components: {
            AdvantagesCard,
            TypesCard,
            FunctionsList,
        }
    }
</script>

<style  scoped>
    .hero__wrapper {
        background-image: url("../assets/hero cover.png");
        height: 750px;
        padding-left: 40px;
    }

    .hero__heading {
        font-weight: 700;
        font-size: 64px;
        color: #FFFFFF;
        padding-top: 431px;    
        padding-bottom: 27px;
    }

    .hero__description {
        font-weight: 400;
        font-size: 24px;
        line-height: 130%;      
        color: #F6F6F6;
    }

    .advantages__heading {
        font-weight: 500;
        font-size: 56px;
        text-align: center;
        margin-top: 100px;
        margin-bottom: 70px;
    }

    .functions__wrapper {
        margin-top: 120px;
        display: flex;
        flex-direction: row;
    }

    .functions__heading {
        margin: 0;
        margin-bottom: 50px;
        width: 100%;
        padding-left: 80px;
        text-align: left;
    }

    .functions__image {
        max-width: 50%;
    }

    @media (max-width: 1000px) {
        .functions__wrapper {
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    }

    .start__wrapper {
        background-image: url('../assets/start image.png');
        width:100%;
        height: 750px;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    
    .start__button {
        color: #F76C1E;
        border: 2px solid #F76C1E;
        border-radius: 8px;
        padding: 10px 16px;
        background-color: none;
        font-weight: 500;
        font-size: 22px;
        background-color: #fafafc;
    }

    .start__heading {
        margin-bottom: 15px;
        margin-top: 50px;
    }
</style>