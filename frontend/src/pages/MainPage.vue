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
                <div class="advantages__list">
                    <AdvantagesCard></AdvantagesCard>
                </div>
            </div>
        </section>
    </div>
    
    
</template>

<script>
    import AdvantagesCard from '@/components/AdvantagesCard'
    export default {
        components: {
            AdvantagesCard
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