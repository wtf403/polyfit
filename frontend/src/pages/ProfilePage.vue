<template>
  <section class="profile">
    <div class="profile__wrapper">
      <ProfileWelcome :name="user.name" />
      <ProfileUser :user="{name:user.name, age:user.age, gender:user.gender, weight: user.weight, image: user.image}" />
      <ProfilePurpose :purpose="user.purposes[user.purposes.length-1]" />
      <ProfileControl :purposes="user.purposes" :id-selected-purpose="IdSelectedPurpose" @change-kpi="ChangeKPI" />
      <!-- <div class="profile__control">
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
              <button class="profile__button" @click="changeKPI">
                Сменить kpi
              </button>
            </div>
          </div>
          <ul class="profile__kpi-list">
            <li v-for="(kpi,index) in ArraySelectedKPI" :key="index" class="profile__kpi-item">
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
      </div> -->
      <ProfilePurposes :purposes="user.purposes" @change-purpose="ChangePurpose" />
    </div>
    <Transition name="fade">
      <ProfilePopup ref="kpiPopup">
        <p class="popus__title">
          Сделайте выбор KPI
        </p>
        <p class="popus__text-info">
          (KPI – упражнения для определения ключевых показателей вашей эффективности)
        </p>
        <p class="popus__text">
          Мы предлагем вам лишь KPI относительно действующей вашей цели – <br><span style="font-weight: 500;">
            "{{user.purposes[user.purposes.length-1].name}}"
          </span>.
        </p>
        <template #actions="{ confirm, close }">
          <ul class="popup__kpi-list">
            <li v-for="(kpi,index) in (IdSelectedPurpose==1)?AllKPI.force:(IdSelectedPurpose==2)?AllKPI.stamina:AllKPI.speed" :key="index" :class="(NewSelectedKPI.find(element => element == kpi)==kpi )?'popup__kpi-item popup__kpi-item--select':'popup__kpi-item'" :style="(IdSelectedPurpose==1)?{backgroundColor: '#F4F4F4'}:(IdSelectedPurpose==2)?{backgroundColor: '#FEE8DB'}:{backgroundColor: '#D9E8FF'}">
              <input :id="'checkbox'+index" v-model="NewSelectedKPI" :value="kpi" type="checkbox" class="popup__kpi-input">
              <label :for="'checkbox'+index" class="popup__kpi-label">
                {{kpi}}
              </label>
            </li>
          </ul>
          <div class="popup__actions">
            <button class="profile__button" :disabled="isConfirmationCorrect" @click="confirm">
              Сохранить
            </button>
            <button class="profile__button profile__button--cancel" :disabled="isConfirmationCorrect" @click="close">
              Отменить
            </button>
          </div>
        </template>
      </ProfilePopup>
    </Transition>
  </section>
</template>

<script>
import ProfilePopup from '@/components/ProfilePopup.vue';
import ProfileWelcome from '@/components/ProfileWelcome.vue';
import ProfilePurpose from '@/components/ProfilePurpose.vue';
import ProfileUser from '@/components/ProfileUser.vue';
import ProfilePurposes from '@/components/ProfilePurposes.vue';
import ProfileControl from '@/components/ProfileControl.vue';

export default {
  components: {
    ProfilePopup,
    ProfileWelcome,
    ProfilePurpose,
    ProfilePurposes,
    ProfileUser,
    ProfileControl,
  },
  data() {
    return {
      confirmation: '',
      NewSelectedKPI: [],
      AllKPI: {
        force: ['Классические\nотжимания', 'Классические\nПодтягивания', 'отжимания\nна пальцах', 'Классические\nПриседания', 'Приседания\nс весом', 'Подтягивания\nпишущая машинка', 'Приседания\nпистолетиком', 'отжимания\nна брусьях', 'отжимания\nв стойке на руках', 'отжимания\nна кулаках', 'Удержание пресса\nв уголке', 'отжимания\nв планше', 'Подтягивания\nразным хватом', 'Удержание пресса\nв планке', 'Жим\nот груди', 'отжимания\nна одной руке'],
        speed: ['Бег на\n30 метров', 'Бег на\n60 метров', 'Бег на\n100 метров', 'Бег на\n1000 метров', 'Бег на\n2000 метров', 'Бег на\n3000 метров', 'Кросс на\n5000 метров', 'Вис\nна время', 'Челночный бег\n3x10 метров', 'Прыжки в длинну\nс разбега', 'Прыжки в длинну\nс места'],
        stamina: ['Метание спортивного\nснаряда весом 700г', 'Наклон вперёд из\nположения стоя', 'Классические\nПриседания', 'Рывок гири\n16 кг', 'Классические\nотжимания', 'Классические\nПодтягивания', 'Жим\nот груди', 'Прыжки в длинну\nс места', 'Приседания\nпистолетиком', 'Удержание преса\nв планке'],
      },
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
  computed: {
    isConfirmationCorrect() {
      return this.confirmation === this.$options.CONFIRMATION_TEXT;
    },
  },

  methods: {
    async ChangeKPI() {
      this.confirmation = '';
      const popupResult = await this.$refs.kpiPopup.open();
      if (popupResult) {
        this.user.purposes[this.user.purposes.length - 1].kpi = this.NewSelectedKPI;
        // alert('Confirmed!');
      }
    },
    ChangePurpose(obj) {
      this.IdSelectedPurpose = obj;
    },
  },
};
</script>

<style>


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
  line-height: 1.4;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.4s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.profile__purpose, .profile__kpi, .profile__user, .profile__purposes-list, .profile__chart{
  margin-bottom: 40px;
  padding: 40px;
  background-color: #fbfbfb;
  border-radius: 16px;
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
  transition: all 0.14s ease;
}

.profile__button:active {
  transform: scale(0.99);
}

.profile__button:hover {
  background-color: #ee6011;
}

.profile__button--cancel {
  color: #f66c1e;
  background-color: #f66c1e29;
}

.profile__button--cancel:hover {
  background-color: #f66c1e3d;
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


.popus__title {
  margin-bottom: 12px;
  font-size: 24px;
  line-height: 1.2;
}

.popus__text-info {
  margin-bottom: 12px;
  padding: 16px 20px;
  font-size: 18px;
  line-height: 1.2;
  background-color: #f76c1e4d;
  border: 1px solid #f76c1e;
  border-radius: 12px;
}

.popus__text {
  margin-bottom: 12px;
  font-size: 18px;
}

.popup__kpi-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 12px;
}

.popup__button {
  margin-top: 12px;
  padding: 13px 16px 14px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  background-color: #f76c1e;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.14s ease;
}


.popup__button:hover {
  background-color: #ee6011;
}

.popup__kpi-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62px;
  background: rgba(56, 210, 90, 0.3);
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
}

.popup__kpi-item--select {
  background-color: rgba(255, 94, 0, 0.3) !important;
  border: 1px solid #f76c1e;
}

.popup__actions{
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

.popup__kpi-label {
  padding: 9px 11px;
  font-weight: 500;
  font-size: 18px;
  white-space: break-spaces;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
}

.popup__kpi-input {
  display: none;
}

.popup__kpi-input:active .popup__kpi-label {
  border: 1px solid black;
}
</style>
