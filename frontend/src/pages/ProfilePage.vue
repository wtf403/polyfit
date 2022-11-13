<template>
  <section class="profile">
    <div class="profile__wrapper">
      <div class="profile__welcome">
        <p class="profile__welcome-text">
          🌤 Доброе утро, Артем!
        </p>
      </div>
      <div class="profile__purpose">
        <p class="profile__text">
          Выбранная цель:
        </p>
        <p class="profile__title">
          {{user.purposes[user.purposes.length-1].name}}
        </p>
        <p class="profile__text">
          С {{user.purposes[user.purposes.length-1].start}} по {{user.purposes[user.purposes.length-1].finish}}
        </p>
        <button class="profile__button">
          Изменить цель
        </button>
      </div>
      <div class="profile__user">
        <a href="#" class="profile__cover">
          <img :src="user.image" alt="User Photo" class="profile__image">
        </a>
        <div class="profile__info">
          <p class="profile__title">
            {{user.name}}
          </p>
          <p class="profile__text">
            Пол: {{user.gender}}
          </p>
          <p class="profile__text">
            Возраст: {{user.age}}
          </p>
          <p class="profile__text">
            Вес: {{user.weight}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      user: {
        name: 'Артем Крылов',
        image: require('@/assets/profileImage.png'),
        gender: 'мужской',
        age: 24,
        weight: 70,
        purposes: [
          {
            id: 1,
            name: '',
            start: '',
            finish: '',
            kpi: [
              {
                name: 'Вис на время',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 122,
                  },
                  {
                    date: '26.12.2022',
                    result: 141,
                  },
                  {
                    date: '26.01.2023',
                    result: 138,
                  },
                  {
                    date: '23.02.2023',
                    result: 150,
                  },
                ],
              },
              {
                name: 'Бег на 100 метров',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 122,
                  },
                  {
                    date: '26.12.2022',
                    result: 141,
                  },
                  {
                    date: '26.01.2023',
                    result: 138,
                  },
                  {
                    date: '23.02.2023',
                    result: 150,
                  },
                ],
              },
              {
                name: 'Бег на 2000 метров',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 122,
                  },
                  {
                    date: '26.12.2022',
                    result: 141,
                  },
                  {
                    date: '26.01.2023',
                    result: 138,
                  },
                  {
                    date: '23.02.2023',
                    result: 150,
                  },
                ],
              },
              {
                name: 'Прыжики в длину с места',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 122,
                  },
                  {
                    date: '26.12.2022',
                    result: 141,
                  },
                  {
                    date: '26.01.2023',
                    result: 138,
                  },
                  {
                    date: '23.02.2023',
                    result: 150,
                  },
                ],
              },
              {
                name: 'Челночный бег 3x10 метров',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 122,
                  },
                  {
                    date: '26.12.2022',
                    result: 141,
                  },
                  {
                    date: '26.01.2023',
                    result: 138,
                  },
                  {
                    date: '23.02.2023',
                    result: 150,
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: '',
            start: '',
            finish: '',
            kpi: [
              {
                name: 'Вис на время',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 122,
                  },
                  {
                    date: '26.12.2022',
                    result: 141,
                  },
                  {
                    date: '26.01.2023',
                    result: 138,
                  },
                  {
                    date: '23.02.2023',
                    result: 150,
                  },
                ],
              },
              {
                name: 'Бег на 100 метров',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 122,
                  },
                  {
                    date: '26.12.2022',
                    result: 141,
                  },
                  {
                    date: '26.01.2023',
                    result: 138,
                  },
                  {
                    date: '23.02.2023',
                    result: 150,
                  },
                ],
              },
              {
                name: 'Бег на 2000 метров',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 122,
                  },
                  {
                    date: '26.12.2022',
                    result: 141,
                  },
                  {
                    date: '26.01.2023',
                    result: 138,
                  },
                  {
                    date: '23.02.2023',
                    result: 150,
                  },
                ],
              },
              {
                name: 'Прыжики в длину с места',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 122,
                  },
                  {
                    date: '26.12.2022',
                    result: 141,
                  },
                  {
                    date: '26.01.2023',
                    result: 138,
                  },
                  {
                    date: '23.02.2023',
                    result: 150,
                  },
                ],
              },
              {
                name: 'Челночный бег 3x10 метров',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 122,
                  },
                  {
                    date: '26.12.2022',
                    result: 141,
                  },
                  {
                    date: '26.01.2023',
                    result: 138,
                  },
                  {
                    date: '23.02.2023',
                    result: 150,
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            name: 'Прокачать собственную скорость 🏃',
            start: '01.11.2022',
            finish: '01.02.2023',
            kpi: [
              {
                name: 'Вис на время',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 122,
                  },
                  {
                    date: '26.12.2022',
                    result: 141,
                  },
                  {
                    date: '26.01.2023',
                    result: 138,
                  },
                  {
                    date: '23.02.2023',
                    result: 150,
                  },
                ],
              },
              {
                name: 'Бег на 100 метров',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 122,
                  },
                  {
                    date: '26.12.2022',
                    result: 141,
                  },
                  {
                    date: '26.01.2023',
                    result: 138,
                  },
                  {
                    date: '23.02.2023',
                    result: 150,
                  },
                ],
              },
              {
                name: 'Бег на 2000 метров',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 122,
                  },
                  {
                    date: '26.12.2022',
                    result: 141,
                  },
                  {
                    date: '26.01.2023',
                    result: 138,
                  },
                  {
                    date: '23.02.2023',
                    result: 150,
                  },
                ],
              },
              {
                name: 'Прыжики в длину с места',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 122,
                  },
                  {
                    date: '26.12.2022',
                    result: 141,
                  },
                  {
                    date: '26.01.2023',
                    result: 138,
                  },
                  {
                    date: '23.02.2023',
                    result: 150,
                  },
                ],
              },
              {
                name: 'Челночный бег 3x10 метров',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 122,
                  },
                  {
                    date: '26.12.2022',
                    result: 141,
                  },
                  {
                    date: '26.01.2023',
                    result: 138,
                  },
                  {
                    date: '23.02.2023',
                    result: 150,
                  },
                ],
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style  scoped>


.profile__wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 40px 60px;
  padding-top: 120px;
}

</style>
