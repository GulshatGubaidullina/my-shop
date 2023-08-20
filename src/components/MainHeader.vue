<template>
  <header class="header">
    <div class="wrapper header__wrapper">
      <router-link to="/" class="header__logo link">MyShop</router-link>
      <div class="header__info">
        <router-link to="/favorites" class="header__link link"
          ><IconHeart color="black" class="icon header__icon" />
          Избранное</router-link
        >
        <router-link to="/basket" class="header__link link header__basket"
          ><IconBag class="icon header__icon" /> Корзина
          <span class="heador__basket-size">{{
            productsStore.getBasketLength ? productsStore.getBasketLength : ""
          }}</span></router-link
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import IconHeart from "../components/icons/IconHeart.vue";
import IconBag from "../components/icons/IconBag.vue";

import { useProductsStore } from "../store";

const productsStore = useProductsStore();
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
}

.header__wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  font-size: 24px;
}

.header__info {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.header__link {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  font-size: 18px;
}

.header__link:last-child {
  margin-right: 0;
}

.header__icon {
  margin-right: 5px;
}

.link {
  color: var(--color-black-main);
}

.link:hover {
  opacity: 0.7;
}

.header__basket {
  position: relative;
}

.heador__basket-size {
  z-index: 3;
  position: absolute;
  top: -5px;
  right: -8px;
  color: red;
  font-size: 14px;
  font-weight: 700;
}
</style>
