<template>
  <InfoPanel />
  <MainHeader />
  <p v-if="productsStore.isError" class="notification">Произошла ошибка</p>
  <RouterView v-else />
</template>

<script setup>
import { RouterView } from "vue-router";
import InfoPanel from "./components/InfoPanel.vue";
import MainHeader from "./components/MainHeader.vue";

import { useProductsStore } from "./store";
import { onMounted } from "vue";

const productsStore = useProductsStore();

onMounted(() => {
  productsStore.getProducts();
  productsStore.getBasket();
  productsStore.getCategoriesFromServer();
});
</script>

<style scoped></style>
