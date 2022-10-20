<template>
    <div class="header">
        <div class="header__wrapper wrapper">
            <router-link class="header__link-logo" to="/"><img :src="require(`@/assets/logo.svg`)" alt="logo" class="header__logo"></router-link>     
            <nav class="header__nav nav">
                <ul class="nav__list">
                    <li class="nav__item">
                        <router-link class="nav__link" to="/">ГЛАВНАЯ </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="nav__link" to="/workout">ТРЕНИРОВКИ</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="nav__link" to="/calendar">КАЛЕНДАРЬ </router-link>
                    </li>
                </ul>
            </nav>
            <div class="header__auth auth">
                <router-link class="auth__reg" to="/reg">РЕГИСТРАЦИЯ</router-link>
                <span>|</span>
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

    .header__wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px 40px;
    }
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