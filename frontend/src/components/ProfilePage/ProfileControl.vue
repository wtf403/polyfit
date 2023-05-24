<template>
  <div class="profile__control">
    <div class="profile__kpi">
      <div class="profile__kpi-head">
        <div class="profile__kpi-info">
          <p class="profile__title">
            Выбранные KPI
          </p>
          <button class="profile__detail">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2C20.6274 2 26 7.37258 26 14C26 20.6274 20.6274 26 14 26C7.37258 26 2 20.6274 2 14C2 7.37258 7.37258 2 14 2ZM14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4ZM14 17.6C14.7732 17.6 15.4 18.2268 15.4 19C15.4 19.7732 14.7732 20.4 14 20.4C13.2268 20.4 12.6 19.7732 12.6 19C12.6 18.2268 13.2268 17.6 14 17.6ZM14.0736 8C14.3112 8 14.4604 8.03713 14.5907 8.10685C14.7211 8.17658 14.8234 8.27889 14.8931 8.40926C14.9629 8.53963 15 8.68878 15 8.92638V15.0736C15 15.3112 14.9629 15.4604 14.8931 15.5907C14.8234 15.7211 14.7211 15.8234 14.5907 15.8931C14.4604 15.9629 14.3112 16 14.0736 16H13.9264C13.6888 16 13.5396 15.9629 13.4093 15.8931C13.2789 15.8234 13.1766 15.7211 13.1069 15.5907C13.0371 15.4604 13 15.3112 13 15.0736V8.92638C13 8.68878 13.0371 8.53963 13.1069 8.40926C13.1766 8.27889 13.2789 8.17658 13.4093 8.10685C13.5396 8.03713 13.6888 8 13.9264 8H14.0736Z" fill="#f76c1e" />
            </svg>
          </button>
          <p class="profile__kpi-desc">
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

.profile__kpi {
  margin-bottom: 20px;
}

.profile__kpi-desc {
  position: absolute;
  top: -5px;
  right: -384px;
  display: none;
  max-width: 380px;
  height: 48px;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.2;
  background-color: #ffd2b8;
  border: 1px solid #f76c1e;
  border-radius: 12px;
  transition: all 0.4s ease;
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
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.profile__detail {
  height: 28px;
  background: none;
  border: none;
  cursor: pointer;
}

.profile__detail:hover + .profile__kpi-desc {
  display: flex;
  align-items: center;
  padding: 2px 12px;
  transition: all 0.4s ease;
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

@media screen and (max-width: 1050px){
  .profile__kpi-desc {
    position: absolute;
    right: 0;
    bottom: 0;
    display: none;
    width: auto;
    height: 80px;
    max-height: 120px;
    margin-bottom: 12px;
    padding: 10px 14px;
    font-size: 14px;
    line-height: 1.2;
    background-color: #ffd2b8;
    border: 1px solid #f76c1e;
    border-radius: 12px;
    transition: all 0.4s ease;
  }

  .profile__kpi-head {
    flex-direction: column;
    gap: 12px;
  }

  .profile__kpi-link {
    height: auto;
    padding: 8px 8px;
    font-size: 15px;
  }
}
</style>
