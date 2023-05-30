<template>
  <button class="exercises-content__exercises-card exercises-card" :class="{'exercises-card--active': active, 'exercises-card--none': exercise.name == ''}" @click="sendID">
    <img :src="exercise.media" alt="Image for exercise" class="exercises__image">
    <div class="exercises__info">
      <div class="exercises__details">
        <p class="exercises__count">
          {{exercise.calories}} Кал.
        </p>
      </div>
      <h4 class="exercises__name">
        {{exercise.title}}
      </h4>
      <div class="exercises__details">
        <p class="exercises__count">
          {{exercise.amount + (!exercise.show_timer?' повтор.':' сек.')}}
        </p>
        <p v-if="active" class="exercises__count">
          {{exercise.time}} сек.
        </p>
      </div>
    </div>
  </button>
</template>

<script>

export default {
  name: 'ExersicePlayerItemComponent',
  props: {
    exercise: {
      type: Object,
      default: null,
    },
    active: {
      type: Boolean,
      default: false,
    },
    next: {
      type: Boolean,
      default: false,
    },
    back: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    sendID() {
      console.log(1);
      this.next ? this.$emit('changid', 1) : this.$emit('changid', -1);
    },
  },
};
</script>

<style lang="scss" scoped>

.exercises-card {
  position: relative;
  cursor: pointer;
  display: block;
  border: none;
  background: none;
  position: relative;
  width: 320px;
  height: 320px;
  backdrop-filter: blur(6px);

  &--none {
    visibility: hidden;
  }

  &--active {
    cursor: default;
    width: 480px;
    height: 480px;

    & .exercises__info {
      background-color: #000000de;
      display: grid;
      grid-template-columns: 20% 60% 20%;
      height: auto;
      border-radius: 14px;
      position: relative;
      flex-direction: row;
    }
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
  border-radius: 14px;
}

.exercises__info {
  position: absolute;
  padding: 12px 20px;
  background-color: #00000099;
  backdrop-filter: blur(6px);
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  column-gap: 12px;
  min-height: 80px;
  justify-content: center;
  height: 100%;
  border-radius: 14px;
  flex-direction: column;

}

.exercises__details {
  border: 1.4 solid #f66c1e;
  padding: 4px;
  border-radius: 8px;
  font-size: 16px;
}

.exercises__name {
  font-weight: 500;
  font-size: 20px;
  color: white;
  padding: 6px;
  line-height: 1.2;
  text-align: center;
}

.exercises__count {
  font-weight: 800;
  padding: 6px 10px;
  color: #f66c1e;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
}
</style>
