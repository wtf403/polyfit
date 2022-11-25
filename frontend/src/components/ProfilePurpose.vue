<template>
  <div class="profile__purpose">
    <p class="profile__text">
      Выбранная цель:
    </p>
    <p class="profile__title">
      {{purpose.name}}
    </p>
    <p class="profile__text">
      С {{purpose.start}} по {{purpose.finish}}<br>
      Осталось 64 дня.
    </p>
    <button class="profile__button">
      Изменить цель
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProfilePurposeComponent',
  props: ['purpose'],
};
</script>

<style scoped>
.profile__purpose {
  display: flex;
  flex-direction: column;
  width: calc(50% - 40px);
}

.profile__purpose .profile__button {
  width: 192px;
  margin-top: 25px;
}

</style>

