<template>
    <div class="hero">
        <div class="hero__wrapper wrapper">
            <h1 class="hero__heading">Тренируйся <br/> самостоятельно</h1>
            <p class="hero__description">Составь свой персонализированный план <br/> спортивных и фитнес тренировок</p>
        </div>
    </div>
    
</template>

<script>
    export default {
        
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
    
</style>