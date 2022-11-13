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
      <div class="profile__kpi">
        <div class="profile__kpi-head">
          <div class="profile__kpi-info">
            <p class="profile__title">
              Выбранные KPI
            </p>
            <button class="profile__detail">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="#F76C1E" fill-opacity="0.16" />
                <path d="M16.629 10.9887V22.4004H14.0767V10.9887H16.629ZM13.9079 7.99336C13.9079 7.60664 14.0345 7.28672 14.2876 7.03359C14.5478 6.77344 14.9063 6.64336 15.3634 6.64336C15.8134 6.64336 16.1685 6.77344 16.4286 7.03359C16.6888 7.28672 16.8188 7.60664 16.8188 7.99336C16.8188 8.37305 16.6888 8.68945 16.4286 8.94258C16.1685 9.1957 15.8134 9.32227 15.3634 9.32227C14.9063 9.32227 14.5478 9.1957 14.2876 8.94258C14.0345 8.68945 13.9079 8.37305 13.9079 7.99336Z" fill="#F76C1E" />
              </svg>
            </button>
          </div>
          <div class="profile__kpi-action">
            <button class="profile__button">
              Сменить kpi
            </button>
          </div>
        </div>
        <ul class="profile__kpi-list">
          <li v-for="(kpi,index) in user.purposes[user.purposes.length-1].kpi" :key="index" class="profile__kpi-item">
            <button class="profile__kpi-link" @click="IdSelectedKPI = index">
              {{kpi.name}}
            </button>
          </li>
        </ul>
        <BarChart
          :chart-data="{labels: user.purposes[IdSelectedPurpose-1].kpi[IdSelectedKPI].progress.map(item => item.date),
                        datasets: [ {data: user.purposes[IdSelectedPurpose-1].kpi[IdSelectedKPI].progress.map(item => item.result) }],}"
          :options="chartOptions"
        />
        <ul class="profile__purposes-list">
          <li v-for="(purpose,index) in user.purposes" :key="index" class="profile__purposes-item">
            <button class="profile__purposes-link" :style="(IdSelectedPurpose == index+1) ? {borderColor: 'orange'} : {borderColor: 'black'}" @click="IdSelectedPurpose = index+1">
              <p class="profile__purposes-name">
                {{purpose.name}}
              </p>
              <p class="profile__purposes-start">
                c {{purpose.start}}
              </p>
              <p class="profile__purposes-finish">
                по {{purpose.finish}}
              </p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import BarChart from '@/components/BarChart.vue';

export default {
  components: {
    BarChart,
  },
  data() {
    return {
      IdSelectedKPI: 0,
      IdSelectedPurpose: 3,
      user: {
        name: 'Артем Крылов',
        image: require('@/assets/profileImage.png'),
        gender: 'мужской',
        age: 24,
        weight: 70,
        purposes: [
          {
            id: 1,
            name: 'Увеличить силовые возможности 💪',
            start: '22.07.22',
            finish: '11.09.22',
            kpi: [
              {
                name: 'Вис на время',
                units: 'сек',
                progress: [
                  {
                    date: '29.07.2022',
                    result: 122,
                  },
                  {
                    date: '21.08.2022',
                    result: 141,
                  },
                  {
                    date: '09.09.2023',
                    result: 138,
                  },
                ],
              },
              {
                name: 'Бег на 100 метров',
                units: 'сек',
                progress: [
                  {
                    date: '29.07.2022',
                    result: 122,
                  },
                  {
                    date: '21.08.2022',
                    result: 141,
                  },
                  {
                    date: '09.09.2023',
                    result: 138,
                  },
                ],
              },
              {
                name: 'Бег на 2000 метров',
                units: 'сек',
                progress: [
                  {
                    date: '29.07.2022',
                    result: 122,
                  },
                  {
                    date: '21.08.2022',
                    result: 141,
                  },
                  {
                    date: '09.09.2023',
                    result: 138,
                  },
                ],
              },
              {
                name: 'Прыжики в длину с места',
                units: 'сек',
                progress: [
                  {
                    date: '29.07.2022',
                    result: 122,
                  },
                  {
                    date: '21.08.2022',
                    result: 141,
                  },
                  {
                    date: '09.09.2023',
                    result: 138,
                  },
                ],
              },
              {
                name: 'Челночный бег 3x10 метров',
                units: 'сек',
                progress: [
                  {
                    date: '29.07.2022',
                    result: 122,
                  },
                  {
                    date: '21.08.2022',
                    result: 141,
                  },
                  {
                    date: '09.09.2023',
                    result: 138,
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: 'Повысить выносливость к физическим нагрузкам 🏋️',
            start: '12.09.2022',
            finish: '31.10.2022',
            kpi: [
              {
                name: 'Вис на время',
                units: 'сек',
                progress: [
                  {
                    date: '27.09.2022',
                    result: 102,
                  },
                  {
                    date: '30.10.2022',
                    result: 121,
                  },
                ],
              },
              {
                name: 'Бег на 100 метров',
                units: 'сек',
                progress: [
                  {
                    date: '27.09.2022',
                    result: 102,
                  },
                  {
                    date: '30.10.2022',
                    result: 121,
                  },
                ],
              },
              {
                name: 'Бег на 2000 метров',
                units: 'сек',
                progress: [
                  {
                    date: '27.09.2022',
                    result: 102,
                  },
                  {
                    date: '30.10.2022',
                    result: 121,
                  },
                ],
              },
              {
                name: 'Прыжики в длину с места',
                units: 'сек',
                progress: [
                  {
                    date: '27.09.2022',
                    result: 102,
                  },
                  {
                    date: '30.10.2022',
                    result: 121,
                  },
                ],
              },
              {
                name: 'Челночный бег 3x10 метров',
                units: 'сек',
                progress: [
                  {
                    date: '27.09.2022',
                    result: 102,
                  },
                  {
                    date: '30.10.2022',
                    result: 121,
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
                    result: 102,
                  },
                  {
                    date: '26.12.2022',
                    result: 111,
                  },
                  {
                    date: '26.01.2023',
                    result: 168,
                  },
                  {
                    date: '23.02.2023',
                    result: 140,
                  },
                ],
              },
              {
                name: 'Бег на 2000 метров',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 40,
                  },
                  {
                    date: '26.12.2022',
                    result: 11,
                  },
                  {
                    date: '26.01.2023',
                    result: 109,
                  },
                  {
                    date: '23.02.2023',
                    result: 140,
                  },
                ],
              },
              {
                name: 'Прыжики в длину с места',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 20,
                  },
                  {
                    date: '26.12.2022',
                    result: 21,
                  },
                  {
                    date: '26.01.2023',
                    result: 25,
                  },
                  {
                    date: '23.02.2023',
                    result: 24,
                  },
                ],
              },
              {
                name: 'Челночный бег 3x10 метров',
                units: 'сек',
                progress: [
                  {
                    date: '24.11.2022',
                    result: 100,
                  },
                  {
                    date: '26.12.2022',
                    result: 200,
                  },
                  {
                    date: '26.01.2023',
                    result: 220,
                  },
                  {
                    date: '23.02.2023',
                    result: 260,
                  },
                ],
              },
            ],
          },
        ],
      },
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
