<template>
  <div class="profile__welcome">
    <p class="profile__welcome-text">
      {{(12>hourse>=6)?
        ['🌅', '🌆', '🌄', '⛅', '🌤'][Math.floor(Math.random() * ['🌅', '🌆', '🌄', '⛅', '🌤'].length)]+' Доброе утро, ':
        (12<=hourse<18)?
          ['🌁', '🏙', '🌞', '🏞'][Math.floor(Math.random() * ['🌁', '🏙', '🌞', '🏞'].length)]+' Добрый день, ':
          (18<=hourse<24)?['🌉', '🌄', '🌃', '🏙' ][Math.floor(Math.random() * ['🌉', '🌄', '🌃', '🏙' ].length)]+' Добрый вечер, ':
          ['🌙', '🌌', '🌠', '🌉', '🌃'][Math.floor(Math.random() * ['🌙', '🌌', '🌠', '🌉', '🌃'].length)]+' Доброй ночи, '}}{{name}}!
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProfileWelcomeComponent',
  props: ['name'],
  date() {
    return {
      hours: new Date().getHours(),
    };
  },
};
</script>

<style scoped>

.profile__welcome {
  width: 100%;
  margin-bottom: 36px;
}

.profile__welcome-text {
  font-weight: 500;
  font-size: 32px;
  line-height: 1.1;
}
</style>
