<template>
  <div class="product">
    <div class="wrapper product__wrapper">
      <ProductInfo :product="productsStore.currentProduct" />
      <ProductMenu
        :product="productsStore.currentProduct"
        :is-product-in-basket="
          productsStore.isProductInBasket(productsStore.currentProduct.id)
        "
        @change-product-favorite="changeProductFavorite"
        @add-product-to-basket="addProductToBasket"
      />
    </div>
  </div>
</template>

<script setup>
import ProductInfo from "@/components/ProductInfo.vue";
import ProductMenu from "@/components/ProductMenu.vue";

import { useProductsStore } from "@/store";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const productsStore = useProductsStore();

const currentProductId = route.params.id;

onMounted(() => {
  if (currentProductId) {
    productsStore.getProductById(+currentProductId);
  } else productsStore.isError = true;
});

const changeProductFavorite = (id) => {
  productsStore.changeProductFavorite(id);
};

const addProductToBasket = (product) => {
  productsStore.addProductInBasket(product);
};
</script>

<style scoped>
.product {
  width: 100%;
}

.product__wrapper {
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
</style>
