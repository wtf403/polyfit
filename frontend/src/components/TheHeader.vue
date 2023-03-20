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
        <router-link class="auth__login" :class="{'auth__login--active': $route.path == '/log'}" to="/log">{{'Войти'}}</router-link>
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
  color: #6e6d7a;
  font-size: 14px;
  text-transform: uppercase;
  border: none;
  font-weight: 500;
  -webkit-transition: color 200ms ease;
  transition: color 200ms ease;
  &:hover {
    color: black;
  }
}

.nav__item--active .nav__link{
  color: black;
  border-radius: 2px;
  opacity: 1;
}

.header__nav {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
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
  color: #6e6d7a;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  transition: color 200ms ease-in-out;
  opacity: 0.9;
  &:hover {
    color: black;
    opacity: 1;
  }
  &--active {
    color: black;
    font-weight: 500;
  }
}

.auth__login {
  padding: 6px 14px 5px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  background-color: $primary;
  border-radius: 10px;
  transition: all 0.1s ease-in-out;
  opacity: 0.95;
  border: 2.4px solid transparent;
  &:hover {
    opacity: 1;
  }
  &--active {
    color: $primary;
    border: 2.4px solid $primary;
    background-color: transparent;
    opacity: 1;
  }
}

@media (max-width: 600px){

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
