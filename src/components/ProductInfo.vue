<template>
  <div class="product-info">
    <div class="product-info__img-wrapper">
      <img
        :src="props.product.image"
        :alt="props.product.title"
        class="product-info__img"
      />
    </div>
    <p class="product-info__title">О товаре</p>
    <div class="product-info__about">
      {{ props.product.description }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: { type: Object, required: true },
});
</script>

<style scoped>
.product-info {
  width: 80%;
  padding: 10px 0 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.product-info__img-wrapper {
  width: 450px;
  min-width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.product-info__img-wrapper:last-child {
  margin: 0;
}

.product-info__img {
  object-fit: contain;
}

.product-info__title {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
}

.product-info__about {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
