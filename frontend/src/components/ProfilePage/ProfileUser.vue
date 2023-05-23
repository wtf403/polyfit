<template>
  <div class="profile__user">
    <a href="#" class="profile__cover">
      <img :src="'https://polyfit.live/'+user.image" alt="User Photo" class="profile__image">
    </a>
    <div class="profile__info">
      <p class="profile__title">
        {{user.firstname}}
      </p>
      <div class="profile__about">
        <p class="profile__text">
          Пол: {{user.gender}}
        </p>
        <p class="profile__text">
          Возраст: {{user.age}} {{user.age%10==0||user.age%10>=5?'лет':(user.age%10==1?'год':'года')}}
        </p>
        <p class="profile__text">
          Вес: {{user.weight}} кг
        </p>
      </div>
      <button class="profile__button">
        Изменить параметры
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileUserComponent',
  props: ['user'],
  created() {
    console.log(this.user);
  },
};
</script>

<style scoped>
.profile__user {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 36px;
}

.profile__info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}


.profile__image {
  width: 220px;
  height: 220px;
}

.profile__about {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

</style>
