<template>
    <div class="header">
        <div class="header__wrapper">
            <a href="#" class="header__link-logo">
                <img :src="require(`@/assets/logo.svg`)" alt="logo" class="header__logo">
                <nav class="header__nav">
                    <ul class="header__list">
                        <li class="header__item">
                            <button class="header__link">ГЛАВНАЯ</button>
                        </li>
                        <li class="header__item">
                            <button class="header__link">ТРЕНИРОВКИ</button>
                        </li>
                        <li class="header__item">
                            <button class="header__link">КАЛЕНДАРЬ</button>
                        </li>
                    </ul>
                </nav>
                <div class="header__auth auth">
                    <a href="" class="auth__reg">
                        
                    </a>
                    <button class="auth__login">

                    </button>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        

    }
</script>

<style scoped>

</style>