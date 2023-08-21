<template>
  <div class="info-panel">
    <div class="wrapper info-panel__wrapper">
      <button class="info-panel__city" @click="isShowPopupCity = true">
        <IconNavigate class="info-panel__icon icon" />
        {{ productsStore.selectedCity ? productsStore.selectedCity : "Город" }}
      </button>
      <div class="info-panel__info">
        <div
          v-for="(card, index) in infoCards"
          :key="index"
          class="info-panel__card"
        >
          <component :is="getIconName(card.icon)" class="card__icon icon" />
          <p class="card__title">{{ card.title }}</p>
          <p class="card__popup">{{ card.text }}</p>
        </div>
      </div>
    </div>
    <InfoPanelPopUpCity
      :cities="cities"
      v-model:show="isShowPopupCity"
      @change-city="changeSelectedCity"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import IconNavigate from "../components/icons/IconNavigate.vue";
import InfoPanelPopUpCity from "./InfoPanelPopUpCity.vue";
import IconCar from "../components/icons/IconCar.vue";
import IconCard from "../components/icons/IconCard.vue";
import IconTime from "../components/icons/IconTime.vue";

import { useProductsStore } from "../store";

const productsStore = useProductsStore();

const isShowPopupCity = ref(false);

const cities = [
  "Уфа",
  "Казань",
  "Оренбург",
  "Москва",
  "Сочи",
  "Ижевск",
  "Пермь",
  "Норильск",
  "Псков",
];

const infoCards = [
  {
    icon: "IconCar",
    title: "Больше способов доставки",
    text: "Выберите способ доставки, подходящий именно вам - с примеркой или без, домой, в пункт выдачи или постамат.",
  },
  {
    icon: "IconCard",
    title: "Платите когда хотите",
    text: "MyShop предлагает два варианта оплаты заказа: онлайн-оплата на сайте и в приложении MyShop при оформлении заказа и оплата при получении заказа.",
  },
  {
    icon: "IconTime",
    title: "Как мы работаем сейчас",
    text: "Условия доставки и оплаты не изменились - мы заботимся о том, чтобы вы могли совершать покупки как прежде.",
  },
];

const getIconName = (iconName) => {
  const icons = {
    IconCar: IconCar,
    IconCard: IconCard,
    IconTime: IconTime,
  };
  return icons[iconName];
};

const changeSelectedCity = (city) => {
  isShowPopupCity.value = false;
  productsStore.changeSelectedCity(city);
};
</script>

<style scoped>
.info-panel {
  width: 100%;
  height: 40px;
  background-color: var(--color-black-main);
  color: var(--color-white-main);
  z-index: 900;
}

.info-panel__wrapper {
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.info-panel__city {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.info-panel__city:hover {
  opacity: 0.9;
}

.info-panel__icon {
  margin-right: 5px;
}

.info-panel__info {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}

.info-panel__card {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
}

.info-panel__card:last-child {
  margin-right: 0;
}
.card__icon {
  margin-right: 10px;
}
.card__title {
  font-size: 14px;
}
.card__popup {
  z-index: 999;
  position: absolute;
  top: 40px;
  display: none;
  width: 300px;
  padding: 10px 20px;
  background-color: var(--color-white-main);
  color: var(--color-black-main);
  box-shadow: 0px 7px 8px 4px rgba(94, 94, 94, 0.26);
}

.info-panel__card:hover {
  cursor: pointer;
}

.info-panel__card:hover .card__popup {
  display: inline-block;
}

/* @media (max-width: 992px) {
  .wrapper {
    max-width: 90%;
  }
} */
</style>
