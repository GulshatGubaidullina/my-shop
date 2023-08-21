<template>
  <div class="basket-menu">
    <div class="basket-menu__total">
      <p class="basket-menu__text">Итого</p>
      <span class="basket-menu__price">{{ props.price }} ₽</span>
    </div>
    <MyShopButton class="basket-menu__btn">Купить</MyShopButton>
  </div>
</template>

<script setup>
import MyShopButton from "../components/UI/MyShopButton.vue";

const props = defineProps({
  price: { type: Number, required: true },
});
</script>

<style scoped>
.basket-menu {
  width: 25%;
  max-width: 300px;
}
.basket-menu__total {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.basket-menu__text {
  font-size: 20px;
  font-weight: 700;
}
.basket-menu__price {
  font-size: 18px;
}

@media (max-width: 768px) {
  .basket-menu {
    width: 100%;
    max-width: 100%;
  }
}
</style>
