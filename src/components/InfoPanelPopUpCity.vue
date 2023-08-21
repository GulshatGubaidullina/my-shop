<template>
  <div class="modal" v-if="props.show" @click.stop="hideDialog">
    <div @click.stop class="modal__content">
      <div class="modal__header">
        <h2 class="modal__title">Где вы находитесь?</h2>
        <button class="modal__close" @click.stop="hideDialog">
          <IconClose class="icon" />
        </button>
      </div>
      <div class="modal__cities">
        <button
          v-for="city in props.cities"
          :key="city"
          class="modal__city"
          @click="handleClickCity(city)"
        >
          {{ city }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconClose from "./icons/IconClose.vue";

const emit = defineEmits(["update:show", "change-city"]);

const props = defineProps({
  show: { type: Boolean, required: false, defaul: false },
  cities: { type: Object, required: true },
});

const hideDialog = () => {
  emit("update:show", false);
};

const handleClickCity = (city) => {
  emit("change-city", city);
};
</script>

<style scoped>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal__content {
  position: relative;
  min-width: 600px;
  margin: auto;
  padding: 30px;
  background: var(--color-white-main);
  color: var(--color-black-main);
  overflow: auto;
}

.modal__header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.modal__title {
  margin-right: 20px;
  font-size: 24px;
}

.modal__cities {
  width: 100%;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
}

.modal__city {
  margin: 0 35px 10px 0;
}

.modal__city:last-child {
  margin: 0;
}

.modal__city:hover {
  color: var(--color-black-main-hover);
  transition: 0.3s;
}
</style>
