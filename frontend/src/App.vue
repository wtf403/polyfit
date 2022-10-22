<template>
  <v-app>
    <TheHeader />
    <div id="app">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  .wrapper {
    max-width: 1440px;
    margin: 0 auto;
  }

  li {
    list-style: none;
  }

  a {
    color: black;
    text-decoration: none;
  }
</style>
