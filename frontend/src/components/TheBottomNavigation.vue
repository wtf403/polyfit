<template>
  <div class="bottom-navigate">
    <div class="bottom-navigate__wrapper wrapper">
      <nav class="bottom-navigate__nav nav">
        <ul class="nav__list">
          <li class="nav__item" :class="{'nav__item--active': $route.path == '/'}">
            <router-link class="nav__link" to="/">
              <svg height="32px" width="28px" version="1.1" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title /><desc /><defs /><g id="Page-1" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="Core" fill="#000000" transform="translate(-506.000000, -255.000000)"><g id="home" transform="translate(506.000000, 255.500000)"><path d="M8,17 L8,11 L12,11 L12,17 L17,17 L17,9 L20,9 L10,0 L0,9 L3,9 L3,17 L8,17 Z" /></g></g></g></svg>
              Главная
            </router-link>
          </li>
          <li class="nav__item" :class="{'nav__item--active': $route.path == '/workouts'}">
            <router-link class="nav__link" to="/workouts">
              <svg height="32px" width="48px" viewBox="4 4 16 16" xmlns="http://www.w3.org/2000/svg"><title /><g id="Layer_2" data-name="Layer 2"><path d="M19,7H14v4H10V7H5V8H2v8H5v1h5V13h4v4h5V16h3V8H19ZM4,14V10H5v4Zm4,1H7V9H8Zm8-6h1v6H16Zm4,1v4H19V10Z" /></g></svg>
              Тренировки
            </router-link>
          </li>
          <li class="nav__item" :class="{'nav__item--active': $route.path == '/calendar'}">
            <router-link class="nav__link" to="/calendar">
              <svg height="32px" version="1.1" viewBox="0 0 18 20" width="28px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title /><desc /><defs /><g id="Page-1" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="Core" fill="#000000" transform="translate(-339.000000, -464.000000)"><g id="today" transform="translate(339.000000, 464.000000)"><path d="M16,2 L15,2 L15,0 L13,0 L13,2 L5,2 L5,0 L3,0 L3,2 L2,2 C0.9,2 0,2.9 0,4 L0,18 C0,19.1 0.9,20 2,20 L16,20 C17.1,20 18,19.1 18,18 L18,4 C18,2.9 17.1,2 16,2 L16,2 Z M16,18 L2,18 L2,7 L16,7 L16,18 L16,18 Z" /></g></g></g></svg>
              Календарь
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {


};
</script>

<style scoped>

.bottom-navigate {
  position: fixed;
  bottom: 0;
  z-index: 5;
  display: none;
  width: 100%;
  height: 64px;
  background: #f9f9f9ee;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(8px);
}


.bottom-navigate__wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.nav__list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 60px;

  /* column-gap: 40px; */
}

.bottom-navigate__nav {
  width: 100%;
  padding: 0 40px;
}

.nav__link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 8px;
}

.nav__link:hover {
  color: #f66c1e;
}

.nav__link:hover svg path {
  fill: #f66c1e;
}

.nav__item--active .nav__link{
  color: #f66c1e;
  font-weight: 500;
}

.nav__item--active .nav__link svg path{
  fill: #f66c1e;
}

@media screen and (max-width: 900px) {
  .bottom-navigate {
    display: block;
  }
}
</style>
