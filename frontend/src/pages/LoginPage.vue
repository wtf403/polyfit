<script setup>
const bgVideo = [
  new URL('@/assets/authBG/bg1.webp', import.meta.url).href,
  new URL('@/assets/authBG/bg2.webp', import.meta.url).href,
  new URL('@/assets/authBG/bg3.webp', import.meta.url).href,
  new URL('@/assets/authBG/bg4.webp', import.meta.url).href,
  new URL('@/assets/authBG/bg5.webp', import.meta.url).href,
  new URL('@/assets/authBG/bg6.webp', import.meta.url).href,
];
</script>

<template>
  <div class="login" :style="{backgroundImage: 'url('+bgVideo[Math.floor(timer/8)%6]+')'}">
    <div class="login__blur">
      <section class="login__wrapper wrapper animate__animated animate__fadeIn">
        <img
          :src="require('@/assets/logo.svg')"
          alt="logo"
          class="login__logo"
          :srcset="require('@/assets/logo.svg') + ' 3x'"
        >
        <form class="login__form" @submit="isAutorized">
          <TheInput id="emailInput" v-model="userEmail" type="email" label="Email" @update:model-value="(newValue)=>(userEmail=newValue)" />
          <TheInput v-model="userPassword" type="password" label="Пароль" @update:model-value="(newValue)=>(userPassword=newValue)" />
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
  </div>
</template>



<script >
import TheInput from '@/components/TheInput.vue';

export default {
  components: {
    TheInput,
  },
  data() {
    return {
      timer: null,
      myemail: '',
      userEmail: '',
      userPassword: '',
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      window.setInterval(() => {
        this.timer = this.timer + 1;
      }, 1000);
    });
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
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: blur(6px);
}

.login__blur {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 20px;
  backdrop-filter: blur(6px);
}

.login__wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 520px;
  margin: 80px auto 40px;
  padding: 20px 20px 40px;
  font-weight: 500;
  font-size: 40px;
  text-align: center;
  background: rgba(255, 255, 255, 0.84);
  border: #000000;
  border-radius: 12px;
  backdrop-filter: blur(6px);
}

.login__logo{
  width: 144px;
  margin: 24px 0 0;
}

.login__form{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
}

@media screen and (max-width: 660px){
  .login__form{
    padding: 2%;
  }

  .login__logo{
    width: 110px;
    margin: 8px 0 18px;
  }

  .login__blur {
    padding: 0 10px;
  }
}

.login__email, .login__password{
  height: 50px;
  margin-top: 2%;
  border: none;
  border-bottom: 2px solid #000000;
  outline: none;
}

.login__remember {
  background: none;
  cursor: pointer;
}

.login__remember-label{
  align-self: flex-start;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  cursor: pointer;
}

.login__button{
  align-self: center;
  gap: 4px;
  min-width: 124px;
  margin-top: 12px;
  padding: 10px 16px;
  color: #ffffff;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.3;
  background: #f76c1e;
  border: none;
  border-radius: 8px;
}

.login__button:hover {
  background: #f06a1d;
}

.login__wrapper > p{
  margin-bottom: 3%;
  font-size: 15px;
}

.login__link{
  color: #2688eb;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.3;
}

.login__link:hover{
  text-decoration: underline;
}
</style>
