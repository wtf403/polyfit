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
        <span class="auth__block">
          |
        </span>
        <router-link class="auth__login" to="/log">{{'Войти'}}</router-link>
        <img :src="require('@/assets/account_icon.png')" alt="#" class="auth__account-icon" :srcset="require('@/assets/account_icon.png') + ' 1.2x'">
      </div>
    </div>
  </div>
</template>

<script>

export default {

};
</script>

<style lang="scss" scoped>

$primary: #f66c1e;

.header {
  position: fixed;
  z-index: 5;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
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
  font-size: 14px;
  text-transform: uppercase;
  border: none;
  font-weight: 500;
  transition: all 0.1s ease-in-out;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
}

.nav__item--active .nav__link{
  color: $primary;
  border-radius: 2px;
  opacity: 1;
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
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  transition: all 0.1s ease-in-out;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  &--active {
    color: $primary;
    font-weight: 500;
  }
}

.auth__login {
  padding: 8px 14px 7px;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  background-color: $primary;
  border-radius: 10px;
  transition: all 0.1s ease-in-out;
  opacity: 0.95;
  &:hover {
    opacity: 1;
  }
}

@media (max-width: 600px){

}

.auth__account-icon{
  display: none;
}

@media (max-width: 900px){
  .header__nav{
    display: none;
  }
}

@media (max-width: 600px){
  .auth__reg, .auth__block {
    display: none;
  }
}
</style>
