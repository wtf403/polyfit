<template>
  <button class="exercises-content__exercises-card exercises-card" :class="{'exercises-card--mini': type=='mini', 'exercises-card--select': select==true}" @click="sendEx()">
    <img :src="exercise.media" alt="Image for exercise" class="exercises__image">
    <div class="exercises__info">
      <h4 class="exercises__name">
        {{exercise.title}}
      </h4>
    </div>
    <p class="exercises__count">
      {{exercise.amount + (!exercise.show_timer?' повторений':' секунд')}}
    </p>
  </button>
</template>

<script>

export default {
  name: 'ExersicesItemComponent',
  props: {
    exercise: {
      type: Object,
      default: null,
    },
    type: {
      type: String,
      default: '',
    },
    check: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      select: false,
    };
  },
  methods: {
    sendEx() {
      this.select = !this.select;
      this.$emit('addEx', this.exercise);
    },
  },
};
</script>

<style lang="scss" scoped>

.exercises-card {
  position: relative;
  display: block;
  border: none;
  background: none;
  position: relative;
  width: 250px;
  height: 250px;


  &--mini {
    width: 200px;
    height: 200px;
    border: 2px solid transparent;
    padding: 2px;


    & .exercises__info {
      padding: 6px 10px;
      min-height: 60px;
      bottom: 2px;
      width: 192px;

      & .exercises__name {
        font-size: 14px;
        text-align: left;
        max-height: 100%;
        color: rgba(255, 255, 255, 0.85);
      }
    }
    & .exercises__count {
        font-size: 11px;
        padding: 4px 6 px;
      }
  }

  &--select {
    border: 2px solid #f66c1e;
    border-radius: 12px;
    padding: 2px;


    & .exercises__info {
      min-height: 60px;
      bottom: 2px;
    }
  }
}
.exercises__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.exercises__info {
  position: absolute;
  padding: 12px 20px;
  background-color: #00000080;
  backdrop-filter: blur(4px);
  border-radius: 0 0 8px 8px;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  min-height: 80px;
  justify-content: center;
}

.exercises__name {
  display: -webkit-box;
  max-height: 40px;
  overflow: hidden;
  font-weight: 400;
  font-size: 18px;
  color: white;
  line-height: 1.2;
  text-overflow: ellipsis;
  overflow: hidden;
}

.exercises__count {
  position: absolute;
  font-weight: 800;
  padding: 6px 10px;
  color: #f66c1e;
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  background-color: #000000AA;
  border-radius: 8px;
  top: 5%;
  right: 8px;
}
</style>
