<template>
  <div class="header">
    <div class="header__wrapper wrapper">
      <router-link class="header__link-logo" to="/">
        <img :src="require(`@/assets/logo.svg`)" alt="logo" class="header__logo">
      </router-link>
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item" :class="{'nav__item--active': $route.path == '/'}">
            <router-link class="nav__link" to="/">Главная</router-link>
          </li>
          <li class="nav__item" :class="{'nav__item--active': $route.path == '/workouts'}">
            <router-link class="nav__link" to="/workouts">Тренировки</router-link>
          </li>
          <li class="nav__item" :class="{'nav__item--active': $route.path == '/calendar'}">
            <router-link class="nav__link" to="/calendar">Календарь</router-link>
          </li>
        </ul>
      </nav>
      <div class="header__auth auth">
        <router-link class="auth__reg" to="/reg" :class="{'auth__reg--active': $route.path == '/reg'}">Регистрация</router-link>
        <span>|</span>
        <router-link class="auth__login" to="/log">Войти</router-link>
        <img :src="require('@/assets/account_icon.png')" alt="#" class="auth__account-icon" :srcset="require('@/assets/account_icon.png') + ' 1.2x'">
      </div>
    </div>
  </div>
</template>

<script>
export default {


};
</script>

<style scoped>

.header {
  position: fixed;
  z-index: 5;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
}

.header__link-logo {
  display: flex;
}

.header__wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
}

.nav__list {
  display: flex;
  flex-direction: row;
  column-gap: 40px;
}

.nav__link {
  padding-bottom: 2px;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  border: none;
}

.nav__link:hover {
  color: #f66c1e;
}

.nav__item--active .nav__link{
  color: #f66c1e;
  font-weight: 500;
  border-bottom: 2px solid #f66c1e;
}

.header__nav {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}

.header__logo--mobile{
  display: none;
}

.auth {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  column-gap: 15px;
}

.auth__reg {
  padding-top: 2px;
  color: #000000;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
}

.auth__reg:hover {
  color: #f66c1e;
}

.auth__reg--active {
  color: #f66c1e;
  font-weight: 500;
}

.auth__login {
  padding: 8px 14px 6px;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  background-color: #f66c1e;
  border-radius: 8px;
}

.auth__account-icon{
  display: none;
}

@media (max-width: 900px){
  .header__nav{
    display: none;
  }
}
</style>
