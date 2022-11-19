<template>
  <div class="profile__welcome">
    <p class="profile__welcome-text">
      🌤 Доброе утро, {{name}}!
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProfileWelcomeComponent',
  props: ['name'],
};
</script>

<style scoped>

.profile__welcome {
  width: 100%;
  margin-bottom: 20px;
}

.profile__welcome-text {
  font-weight: 500;
  font-size: 32px;
  line-height: 1.1;
}
</style>
