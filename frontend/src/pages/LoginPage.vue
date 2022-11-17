<template>
  <div class="login">
    <section class="login__wrapper wrapper">
      <img
        :src="require('@/assets/white-logo.svg')"
        alt="logo"
        class="login__logo"
        :srcset="require('@/assets/white-logo.svg') + ' 3x'"
      >
      <form class="login__form" @submit="isAutorized">
        <input v-model="userEmail" type="email" placeholder="Email" class="login__email">
        <input v-model="userPassword" type="password" placeholder="Пароль" class="login__password">
        <label class="login__remember-label">
          <input type="checkbox" class="login__remember"> Запомнить меня
        </label>
        <router-link to="/profile" class="login__button">
          Войти
        </router-link>
      </form>
      <p>Еще нет аккаунта? <a class="login__link" href="/reg">Зарегестрироваться</a></p>
      <a class="login__link" href="#">Восстановить пароль</a>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      userEmail: '',
      userPassword: '',
    };
  },
  methods: {
    isAutorized() {
      return;
    },
  },
};
</script>

<style>

.login{
  height: 100%;
  padding-top: 9%;
  padding-bottom: 10%;
  background: #0d2b54;
}

.login__wrapper{
  display: flex;
  flex-direction: column;
  margin-right: 35%;
  margin-left: 35%;
  padding-bottom: 3%;
  font-weight: 500;
  font-size: 40px;
  text-align: center;
  background: #f6f6f6;
  border: #f6f6f6;
  border-radius: 10%;
}

.login__logo{
  margin: 5% 38% 10% 38%;
}

.login__form{
  display: flex;
  flex-direction: column;
  margin-right: 15%;
  margin-bottom: 7%;
  margin-left: 15%;
}

.login__email, .login__password{
  height: 50px;
  margin-top: 2%;
  border: none;
  border-bottom: 2px solid #000000;
  outline: none;
}

input ::placeholder{
  font-size: 64px;
}

.login__remember-label{
  align-self: flex-start;
  margin-top: 5%;
}

.login__button{
  align-self: center;
  margin-top: 10%;
  padding: 4% 13%;
  color: #ffffff;
  font-weight: 900;
  background: #f76c1e;
  border: none;
  border-radius: 100px;
}

.login__wrapper > p{
  margin-bottom: 3%;
}

.login__link{
  color: #1070ff;
}
</style>
