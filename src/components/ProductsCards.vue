<template>
  <div class="cards">
    <ProductCard
      v-for="product in props.products"
      :key="product.id"
      :product="product"
      @change-product-favorite="changeProductFavorite"
    />
  </div>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";

const props = defineProps({
  products: { type: Array, required: true },
});

const emit = defineEmits(["change-product-favorite"]);

const changeProductFavorite = (id) => {
  emit("change-product-favorite", id);
};
</script>

<style>
.cards {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 10px;
}
</style>
