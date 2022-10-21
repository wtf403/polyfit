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
    </div>
    
    
</template>

<script>
    import AdvantagesCard from '@/components/AdvantagesCard'
    import TypesCard from '@/components/TypesCard'
    export default {
        components: {
            AdvantagesCard,
            TypesCard,
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
    
</style>