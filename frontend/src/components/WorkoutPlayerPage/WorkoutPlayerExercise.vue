<template>
  <button class="exercises-content__exercises-card exercises-card" :class="{'exercises-card--active': active}" @click="sendEx()">
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
    active: {
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
      // this.$emit('addEx', this.exercise);
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
  width: 440px;
  height: 440px;
  opacity: 0.4;
  backdrop-filter: blur(6px);

  &--active {
    opacity: 1;
  }

    & .exercises__count {
        font-size: 11px;
        padding: 4px 6 px;
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
