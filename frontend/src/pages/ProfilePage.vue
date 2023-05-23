<template>
  <section class="profile">
    <div class="profile__wrapper">
      <ProfileWelcome :firstname="userData.firstname" />
      <ProfileUser :user="{firstname:userData.firstname, age:userData.age, gender:userData.gender, weight: userData.weight, image: userData.avatar}" />
      <ProfilePurpose :purpose="testUser.purposes[testUser.purposes.length-1]" />
      <ProfileControl :purposes="testUser.purposes" :id-selected-purpose="IdSelectedPurpose" @change-kpi="ChangeKPI" />
      <ProfilePurposes :purposes="testUser.purposes" @change-purpose="ChangePurpose" />
    </div>
    <Transition name="fade">
      <ProfilePopupKPI ref="modal" :id-selected-purpose="IdSelectedPurpose" :purpose="testUser.purposes[testUser.purposes.length-1].name" @update-kpi="UpdateKPI" />
    </Transition>
  </section>
</template>

<script>
import ProfileWelcome from '@/components/ProfilePage/ProfileWelcome.vue';
import ProfilePurpose from '@/components/ProfilePage/ProfilePurpose.vue';
import ProfileUser from '@/components/ProfilePage/ProfileUser.vue';
import ProfilePurposes from '@/components/ProfilePage/ProfilePurposes.vue';
import ProfileControl from '@/components/ProfilePage/ProfileControl.vue';
import ProfilePopupKPI from '@/components/ProfilePage/ProfilePopupKPI.vue';

export default {
  components: {
    ProfilePopupKPI,
    ProfileWelcome,
    ProfilePurpose,
    ProfilePurposes,
    ProfileUser,
    ProfileControl,
  },
  data() {
    return {
      IdSelectedPurpose: 3,
      testUser: {
        firstname: 'Артем Крылов',
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
    userData() {
      return this.$store.getters.myUser;
    },
  },
  methods: {
    ChangePurpose(obj) {
      this.IdSelectedPurpose = obj;
    },
    ChangeKPI() {
      this.$refs.modal.ChangeKPI();
    },
    UpdateKPI(obj) {
      this.user.purposes[this.IdSelectedPurpose - 1].kpi = obj;
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
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.08);
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

@media screen and (max-width: 1030px) {
  .profile__control {
    width: 100% !important;
  }

  .profile__user, .profile__purpose, .profile__kpi, .profile__chart, .profile__purposes-list {
    width: 100% !important;
    padding: 24px !important;
  }

  .profile__purposes-list {
    flex-direction: row !important;
    overflow-x: scroll !important;
  }

  .profile__wrapper {
    padding: 80px 20px 32px !important;
  }

  .profile__title {
    font-size: 26px !important;
  }

  .profile__text {
    font-size: 16px !important;
  }
}

</style>
