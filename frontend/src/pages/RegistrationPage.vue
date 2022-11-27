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
  <section class="registration" :style="{backgroundImage: 'url('+bgVideo[Math.floor(timer/8)%6]+')'}">
    <div class="registration__blur">
      <div class="registration__wrapper wrapper animate__animated animate__fadeIn">
        <img
          :src="require('@/assets/logo.svg')"
          alt="logo"
          class="registration__logo"
          :srcset="require('@/assets/logo.svg') + ' 3x'"
        >
        <form class="registration__form" @submit="addUser">
          <TheInput type="text" label="Имя" required @update:model-value="(newValue)=>(userName=newValue)" />
          <TheInput type="tel" label="Телефон" required @update:model-value="(newValue)=>(userPhone=newValue)" />
          <TheInput type="email" label="Email" required @update:model-value="(newValue)=>(userEmail=newValue)" />
          <TheInput type="password" minlength="6" maxlength="36" label="Пароль" required @update:model-value="(newValue)=>(userPassword=newValue)" />
          <TheCheckbox type="checkbox" label="Я согласен на обработку персональных данных" @update:model-value="(newValue)=>(userCheck=newValue)" />
          <button type="submit" class="registration__button">
            Зарегестрироваться
          </button>
        </form>
        <p>Уже есть аккаунт? <a class="registration__link" href="/log">Войти</a></p>
      </div>
    </div>
  </section>
</template>

<script>
import TheInput from '@/components/TheInput.vue';
import TheCheckbox from '@/components/TheCheckbox.vue';

export default {
  components: {
    TheInput,
    TheCheckbox,
  },
  props: ['timer'],
  data() {
    return {
      userName: '',
      userPhone: '',
      userEmail: '',
      userPassword: '',
      userCheck: '',
      users: [],
      sitekey: 'ВАШ SITE KEY',
    };
  },
  methods: {
    addUser() {
      return;
    },
  },
};
</script>

<style>

.registration{
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: blur(6px);
}

.registration__blur {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 20px;
  background-color: #00000030;
  backdrop-filter: blur(6px);
}

.registration__wrapper{
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

.registration__logo{
  width: 144px;
  margin: 24px 0 0;
}

.registration__form{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
}


.registration__button{
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
  cursor: pointer;
}

.registration__button:hover {
  background: #f06a1d;
}

.registration__wrapper > p{
  margin-bottom: 3%;
  font-size: 15px;
}

.registration__link{
  color: #2688eb;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.3;
}

.registration__link:hover{
  text-decoration: underline;
}

.registration__check {
  background: none;
  cursor: pointer;
}

.registration__check-label{
  align-self: flex-start;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  cursor: pointer;
}

@media screen and (max-width: 660px){
  .registration__form{
    padding: 2%;
  }

  .registration__logo{
    width: 110px;
    margin: 8px 0 18px;
  }

  .registration__blur {
    padding: 0 10px;
  }
}
</style>
