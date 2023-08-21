<template>
  <div class="basket">
    <div class="wrapper basket__wrapper">
      <h1 class="basket__title">Корзина</h1>
      <div class="basket__inner" v-if="productsStore.basket.length">
        <div class="basket__cards">
          <BasketCard
            v-for="product in productsStore.basket"
            :key="product.id"
            :product="product"
            @change-product-favorite="changeProductFavorite"
            @delete-product-from-basket="deleteProductFromBasket"
            @click="handleClickBasketCard(product.id)"
          />
        </div>
        <BasketMenu
          class="basket__menu"
          :price="productsStore.getBasketTotalPrice"
        />
      </div>
      <p v-else class="notification">Корзина пуста</p>
    </div>
  </div>
</template>

<script setup>
import BasketCard from "../components/BasketCard.vue";
import BasketMenu from "../components/BasketMenu.vue";

import { useProductsStore } from "../store";
import { useRouter } from "vue-router";

const router = useRouter();

const productsStore = useProductsStore();

const changeProductFavorite = (id) => {
  
  productsStore.changeProductFavorite(id);
};

const deleteProductFromBasket = (id) => {
  productsStore.deleteProductFromBasket(id);
};

const handleClickBasketCard = (id) => {
  router.push({ name: "product", params: { id: id } });
};
</script>

<style scoped>
.basket {
  width: 100%;
  padding: 20px 0;
}
.basket__wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.basket__title {
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
}

.basket__inner {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.basket__cards {
  width: 70%;
  display: flex;
  flex-direction: column;
}

@media (max-width: 992px) {
  .basket__inner {
    flex-direction: column;
  }
  .basket__cards {
    width: 100%;
  }
  .basket__menu {
    align-self: flex-end;
  }
}
</style>
