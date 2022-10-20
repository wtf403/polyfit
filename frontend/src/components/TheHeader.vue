<template>
    <div class="header">
        <div class="header__wrapper wrapper">
            <router-link class="header__link-logo" to="/"><img :src="require(`@/assets/logo.svg`)" alt="logo" class="header__logo"></router-link>     
            <nav class="header__nav nav">
                <ul class="nav__list">
                    <li class="nav__item">
                        <button class="nav__link">ГЛАВНАЯ</button>
                    </li>
                    <li class="nav__item">
                        <button class="nav__link">ТРЕНИРОВКИ</button>
                    </li>
                    <li class="nav__item">
                        <button class="nav__link">КАЛЕНДАРЬ</button>
                    </li>
                </ul>
            </nav>
            <div class="header__auth auth">
                <router-link class="auth__reg" to="/reg">РЕГИСТРАЦИЯ</router-link>
                <router-link class="auth__login" to="/log">ВОЙТИ</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        

    }
</script>

<style scoped>
    .nav__list {
        display: flex;
        flex-direction: row;
        column-gap: 44px;
    }

    .nav__link {
        background-color: #fff;
        border: none;
    }

    .auth {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 15px;
    }

    .auth__reg {
        color: #000;
        font-size: 14px;
        border-right: 1px solid #000;
        padding-right: 14px;
    }

    .auth__login {
        color: #fff;
        font-size: 16px;
        background-color: orange;
        padding: 6px 14px;
        border: 1px solid orange;
        border-radius: 26px;
    }
</style>