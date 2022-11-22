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
          <div class="profile__about">
            <p class="profile__text">
              Пол: {{user.gender}}
            </p>
            <p class="profile__text">
              Возраст: {{user.age}} лет (года)
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
      <div class="profile__control">
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
            <li v-for="(kpi,index) in user.purposes[IdSelectedPurpose-1].kpi" :key="index" class="profile__kpi-item">
              <button class="profile__kpi-link" :style="(IdSelectedKPI == index) ? {border: '2px solid'} : {border: '2px solid transparent !important'}" @click="IdSelectedKPI = index">
                {{kpi.name}}
              </button>
            </li>
          </ul>
        </div>
        <BarChart
          class="profile__chart"
          :chart-data="{labels: user.purposes[IdSelectedPurpose-1].kpi[IdSelectedKPI].progress.map(item => item.date),
                        datasets: [
                          {
                            maxBarThickness: 140,
                            type: 'bar',
                            label: 'Единицы измерения: '+user.purposes[IdSelectedPurpose-1].kpi[IdSelectedKPI].units,
                            data: user.purposes[IdSelectedPurpose-1].kpi[IdSelectedKPI].progress.map(item => item.result),
                            backgroundColor: [(IdSelectedKPI==0)?'#c75dfa4d':(IdSelectedKPI==1)?'#ffca104d':(IdSelectedKPI==2)?'#38d25a4d':(IdSelectedKPI==3)?'#2fe0f84d':(IdSelectedKPI==4)?'#f83c3c4d':'rgba(0, 0, 0, 0.2)']
                          },
                          {
                            tension: 0.4,
                            type: 'line',
                            label: 'Единицы измерения: '+user.purposes[IdSelectedPurpose-1].kpi[IdSelectedKPI].units,
                            data: user.purposes[IdSelectedPurpose-1].kpi[IdSelectedKPI].progress.map(item => item.result),
                            borderColor: [(IdSelectedKPI==0)?'#c75dfa':(IdSelectedKPI==1)?'#ffca10':(IdSelectedKPI==2)?'#38d25a':(IdSelectedKPI==3)?'#2fe0f8':(IdSelectedKPI==4)?'#f83c3c':'rgba(0, 0, 0, 0.8)'],
                            backgroundColor: [(IdSelectedKPI==0)?'#c75dfa':(IdSelectedKPI==1)?'#ffca10':(IdSelectedKPI==2)?'#38d25a':(IdSelectedKPI==3)?'#2fe0f8':(IdSelectedKPI==4)?'#f83c3c':'rgba(0, 0, 0, 0.8)']
                          },
                        ],
          }"
        />
      </div>


      <ul class="profile__purposes-list">
        <li v-for="(purpose,index) in user.purposes" :key="index" class="profile__purposes-item" :style="{order: -index}">
          <button class="profile__purposes-link" :style="(IdSelectedPurpose == index+1) ? {borderColor: '#F66C1E'} : {borderColor: 'black'}" @click="IdSelectedPurpose = index+1; IdSelectedKPI = 0">
            <p class="profile__purposes-name" :style="(IdSelectedPurpose == index+1) ? {color: '#F66C1E'} : {color: 'black'}">
              {{purpose.name}}
            </p>
            <div class="prfile__purposes-date">
              <p class="profile__purposes-start">
                c {{purpose.start}}
              </p>
              <p class="profile__purposes-finish">
                по {{purpose.finish}}
              </p>
            </div>
          </button>
        </li>
      </ul>
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
                name: 'Отжимания\nна кулаках',
                units: 'повторения',
                progress: [
                  {
                    date: '29.07.2022',
                    result: 34,
                  },
                  {
                    date: '21.08.2022',
                    result: 40,
                  },
                  {
                    date: '09.09.2023',
                    result: 38,
                  },
                ],
              },
              {
                name: 'Приседания\nс весом',
                units: 'повторения',
                progress: [
                  {
                    date: '29.07.2022',
                    result: 78,
                  },
                  {
                    date: '21.08.2022',
                    result: 85,
                  },
                  {
                    date: '09.09.2023',
                    result: 105,
                  },
                ],
              },
              {
                name: 'Удержание преса\nв планке',
                units: 'сек',
                progress: [
                  {
                    date: '29.07.2022',
                    result: 145,
                  },
                  {
                    date: '21.08.2022',
                    result: 120,
                  },
                  {
                    date: '09.09.2023',
                    result: 180,
                  },
                ],
              },
              {
                name: 'Классические\nподтягивания',
                units: 'повторения',
                progress: [
                  {
                    date: '29.07.2022',
                    result: 34,
                  },
                  {
                    date: '21.08.2022',
                    result: 48,
                  },
                  {
                    date: '09.09.2023',
                    result: 47,
                  },
                ],
              },
              {
                name: 'Жим\nот груди',
                units: 'повторения',
                progress: [
                  {
                    date: '29.07.2022',
                    result: 18,
                  },
                  {
                    date: '21.08.2022',
                    result: 24,
                  },
                  {
                    date: '09.09.2023',
                    result: 28,
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
                name: 'Метание спортивного\nснаряда весом 700г ',
                units: 'см',
                progress: [
                  {
                    date: '27.09.2022',
                    result: 166,
                  },
                  {
                    date: '30.10.2022',
                    result: 181,
                  },
                ],
              },
              {
                name: 'Классические\nотжимания',
                units: 'повторения',
                progress: [
                  {
                    date: '27.09.2022',
                    result: 34,
                  },
                  {
                    date: '30.10.2022',
                    result: 48,
                  },
                ],
              },
              {
                name: 'Удержание преса\nв планке',
                units: 'сек',
                progress: [
                  {
                    date: '27.09.2022',
                    result: 164,
                  },
                  {
                    date: '30.10.2022',
                    result: 215,
                  },
                ],
              },
              {
                name: 'Классические\nподтягивания',
                units: 'повторения',
                progress: [
                  {
                    date: '27.09.2022',
                    result: 28,
                  },
                  {
                    date: '30.10.2022',
                    result: 40,
                  },
                ],
              },
              {
                name: 'Классические\nприседания',
                units: 'сек',
                progress: [
                  {
                    date: '27.09.2022',
                    result: 90,
                  },
                  {
                    date: '30.10.2022',
                    result: 120,
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
                name: 'Вис\nна время',
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
                name: 'Бег на\n100 метров',
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
                name: 'Бег на\n2000 метров',
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
                name: 'Прыжики в\nдлину с места',
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
                name: 'Челночный бег\n3x10 метров',
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
    };
  },
};
</script>

<style  scoped>


.profile__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 40px 60px;
  padding-top: 120px;
}

.profile__title {
  font-weight: 400;
  font-size: 32px;
  line-height: 1.2;
}

.profile__text {
  font-weight: 400;
  font-size: 18px;
  line-height: 1.1;
}

.profile__welcome {
  width: 100%;
  margin-bottom: 20px;
}

.profile__welcome-text {
  font-weight: 500;
  font-size: 32px;
  line-height: 1.1;
}

.profile__purpose, .profile__kpi, .profile__user, .profile__purposes-list, .profile__chart{
  margin-bottom: 40px;
  padding: 40px;
  background-color: #fbfbfb;
  border-radius: 16px;
}

.profile__user {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 36px;
  width: calc(50% - 40px);
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

.profile__purpose {
  display: flex;
  flex-direction: column;
  width: calc(50% - 40px);
}

.profile__purpose button {
  width: 192px;
  margin-top: 29px;
}

.profile__purpose .profile__title {
  margin: 4px 0 16px;
}

.profile__button {
  padding: 13px 16px 14px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  background-color: #f76c1e;
  border: none;
  border-radius: 14px;
  cursor: pointer;
}


.profile__button:hover {
  background-color: #ee6011;
}

.profile__control {
  width: calc(100vw - 520px);
}

.profile__kpi {
  margin-bottom: 20px;
}

.profile__kpi-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.profile__kpi-info {
  display: flex;
  gap: 32px;
}

.profile__detail {
  background: none;
  border: none;
  cursor: pointer;
}

.profile__kpi-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 4px;
  margin-bottom: 20px;
  list-style: none;
}

.profile__kpi-link {
  height: 62px;
  padding: 9px 11px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  white-space: break-spaces;
  text-transform: uppercase;
  background: rgba(56, 210, 90, 0.3);
  border-radius: 12px;
  cursor: pointer;
}

.profile__kpi-item:nth-child(n+1) button {
  background-color: #c75dfa4d;
  border-color: #c75dfa !important;
}

.profile__kpi-item:nth-child(n+2) button {
  background-color: #ffca104d;
  border-color: #ffca10 !important;
}

.profile__kpi-item:nth-child(n+3) button {
  background-color: #38d25a4d;
  border-color: #38d25a !important;
}

.profile__kpi-item:nth-child(n+4) button {
  background-color: #2fe0f84d;
  border-color: #2fe0f8 !important;
}

.profile__kpi-item:nth-child(n+5) button {
  background-color: #f83c3c4d;
  border-color: #f83c3c !important;
}

.profile__purposes-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

@media screen and (max-width: 1020px) {
  .profile__user, .profile__purpose {
    width: 100%;
  }

  .profile__control{
    width: 100%;
  }

  .profile__purposes-list {
    flex-direction: row;
    overflow-x: scroll;
  }
}

.profile__purposes-link {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 320px;
  padding: 14px;
  text-align: start;
  background: none;
  border: 1px solid #f76c1e;
  border-radius: 16px;
  cursor: pointer;
}

.profile__purposes-name {
  font-weight: 500;
  font-size: 22px;
  line-height: 1.2;
}

</style>
