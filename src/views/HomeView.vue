<template>
  <main class="main">
    <div class="wrapper main-wrapper">
      <SideMenu
        :categories="productsStore.categories"
        :selectedCategory="productsStore.selectedCategory"
        @change-selected-category="changeSelectedCategory"
      />
      <div class="main__inner">
        <MyShopSelect
          class="main__select"
          v-model="productsStore.selectedFilterOption"
          :options="productsStore.sortOptions"
        />
        <ProductsCards
          :products="productsStore.getSortedProducts"
          @change-product-favorite="changeProductFavorite"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import SideMenu from "../components/SideMenu.vue";
import ProductsCards from "../components/ProductsCards.vue";
import { useProductsStore } from "../store";
import { onMounted } from "vue";
import MyShopSelect from "../components/UI/MyShopSelect.vue";

const productsStore = useProductsStore();

onMounted(() => {
  productsStore.getProducts();
});

const changeProductFavorite = (id) => {
  productsStore.changeProductFavorite(id);
};

const changeSelectedCategory = (category) => {
  productsStore.changeSelectedCategory(category);
};
</script>

<style scoped>
.main {
  width: 100%;
  padding-bottom: 50px;
}

.main-wrapper {
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.main__inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.main__select {
  margin-left: 10px;
}
</style>
