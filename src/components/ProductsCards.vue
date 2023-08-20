<template>
  <div class="cards" v-if="props.products.length">
    <ProductCard
      v-for="product in props.products"
      :key="product.id"
      :product="product"
      @change-product-favorite="changeProductFavorite"
    />
  </div>
  <p v-else class="notification">В избранном ничего нет</p>
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

.notification {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  font-size: 32px;
  font-weight: 700;
}
</style>
