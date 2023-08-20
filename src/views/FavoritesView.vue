<template>
  <div class="favorites">
    <div class="wrapper favorites__wrapper">
      <h1 class="favorites__title">Избранное</h1>
      <ProductsCards
        :products="productsStore.getFavoritesProducts"
        @change-product-favorite="changeProductFavorite"
      />
    </div>
  </div>
</template>

<script setup>
import ProductsCards from "../components/ProductsCards.vue";
import { useProductsStore } from "../store";

const productsStore = useProductsStore();

const changeProductFavorite = (id) => {
  productsStore.changeProductFavorite(id);
};
</script>

<style scoped>
.favorites {
  width: 100%;
}

.favorites__wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.favorites__title {
  font-size: 30px;
  font-weight: 700;
}
</style>
