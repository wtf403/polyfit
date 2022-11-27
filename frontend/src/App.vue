<template>
  <v-app>
    <TheHeader />
    <TheBottomNavigation />
    <div id="app">
      <router-view :timer="timer" />
    </div>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import TheBottomNavigation from '@/components/TheBottomNavigation';


export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheBottomNavigation,
  },
  data() {
    return {
      timer: 0,
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      window.setInterval(() => {
        this.timer = this.timer + 1;
      }, 1000);
    });
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
    font-size: 17px;
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
