<template>
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
          <p v-if="infoKPI" class="profile__kpi-desc">
            KPI – упражнения для определения ключевых показателей вашей эффективности
          </p>
        </div>
        <div class="profile__kpi-action">
          <button class="profile__button" @click="ChangeKPI">
            Сменить kpi
          </button>
        </div>
      </div>
      <ul class="profile__kpi-list">
        <li v-for="(kpi,index) in ArraySelectedKPI" :key="index" class="profile__kpi-item">
          <button class="profile__kpi-link" :style="(IdSelectedKPI == index) ? {border: '2px solid'} : {border: '2px solid transparent !important'}" @click="SelectKPI(index)">
            {{kpi.name}}
          </button>
        </li>
      </ul>
    </div>
    <BarChart
      class="profile__chart"
      :chart-data="{labels: purposes[idSelectedPurpose-1].kpi[IdSelectedKPI].progress.map(item => item.date),
                    datasets: [
                      {
                        maxBarThickness: 140,
                        type: 'bar',
                        label: 'Единицы измерения: '+purposes[idSelectedPurpose-1].kpi[IdSelectedKPI].units,
                        data: purposes[idSelectedPurpose-1].kpi[IdSelectedKPI].progress.map(item => item.result),
                        backgroundColor: [(IdSelectedKPI==0)?'#c75dfa4d':(IdSelectedKPI==1)?'#ffca104d':(IdSelectedKPI==2)?'#38d25a4d':(IdSelectedKPI==3)?'#2fe0f84d':(IdSelectedKPI==4)?'#f83c3c4d':'rgba(0, 0, 0, 0.2)']
                      },
                      {
                        tension: 0.4,
                        type: 'line',
                        label: 'Единицы измерения: '+purposes[idSelectedPurpose-1].kpi[IdSelectedKPI].units,
                        data: purposes[idSelectedPurpose-1].kpi[IdSelectedKPI].progress.map(item => item.result),
                        borderColor: [(IdSelectedKPI==0)?'#c75dfa':(IdSelectedKPI==1)?'#ffca10':(IdSelectedKPI==2)?'#38d25a':(IdSelectedKPI==3)?'#2fe0f8':(IdSelectedKPI==4)?'#f83c3c':'rgba(0, 0, 0, 0.8)'],
                        backgroundColor: [(IdSelectedKPI==0)?'#c75dfa':(IdSelectedKPI==1)?'#ffca10':(IdSelectedKPI==2)?'#38d25a':(IdSelectedKPI==3)?'#2fe0f8':(IdSelectedKPI==4)?'#f83c3c':'rgba(0, 0, 0, 0.8)']
                      },
                    ],
      }"
    />
  </div>
</template>

<script>
import BarChart from '@/components/BarChart.vue';

export default {
  name: 'ProfileControlComponent',
  components: {
    BarChart,
  },
  props: [
    'purposes',
    'idSelectedPurpose',
  ],
  data() {
    return {
      IdSelectedKPI: 0,
      infoKPI: false,
    };
  },
  computed: {
    ArraySelectedKPI() {
      return this.purposes[this.idSelectedPurpose - 1].kpi;
    },
  },
  methods: {
    SelectKPI(index) {
      this.IdSelectedKPI = index;
    },
    ChangeKPI() {
      this.$emit('change-kpi');
    },
  },
};
</script>

<style scoped>
.profile__control {
  width: calc(100vw - 520px);
}

.profile__kpi {
  margin-bottom: 20px;
}

.profile__kpi-desc {
  position: absolute;
  right: -1;
  display: none;
  margin-bottom: 12px;
  padding: 16px 20px;
  font-size: 18px;
  line-height: 1.2;
  background-color: #ffd2b8;
  border: 1px solid #f76c1e;
  border-radius: 12px;
}

.profile__kpi-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.profile__kpi-info {
  position: relative;
  display: flex;
  gap: 32px;
}

.profile__detail {
  background: none;
  border: none;
  cursor: pointer;
}

.profile__detail:hover > .profile__kpi-desc {
  display: flex;
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

.profile__kpi-item:nth-child(n) .profile__kpi-link {
  background-color: #f83c3c4d;
  border-color: #f83c3c !important;
  transition: all 0.2s;
}


.profile__kpi-item:nth-child(4) .profile__kpi-link {
  background-color: #2fe0f84d;
  border-color: #2fe0f8 !important;
  transition: all 0.2s;
}

.profile__kpi-item:nth-child(3) .profile__kpi-link {
  background-color: #38d25a4d;
  border-color: #38d25a !important;
  transition: all 0.2s;
}

.profile__kpi-item:nth-child(2) .profile__kpi-link {
  background-color: #ffca104d;
  border-color: #ffca10 !important;
  transition: all 0.2s;
}

.profile__kpi-item:nth-child(1) .profile__kpi-link {
  background-color: #c75dfa4d;
  border-color: #c75dfa !important;
  transition: all 0.2s;
}

.profile__kpi-item:nth-child(n+1) .profile__kpi-link:hover{
  background-color: #c75dfa80;
}

.profile__kpi-item:nth-child(n+2) .profile__kpi-link:hover{
  background-color: #ffca1080;
}


.profile__kpi-item:nth-child(n+3) .profile__kpi-link:hover{
  background-color: #38d25a80;
}


.profile__kpi-item:nth-child(n+4) .profile__kpi-link:hover{
  background-color: #2fe0f880;
}


.profile__kpi-item:nth-child(n+5) .profile__kpi-link:hover{
  background-color: #f83c3c80;
}
</style>
