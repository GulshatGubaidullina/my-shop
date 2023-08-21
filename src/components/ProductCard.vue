<template>
  <div class="card__wrapper" @click="handleClickProductCard">
    <div class="card">
      <MyShopLikeButton
        class="card__like-btn"
        :color="getIconColor"
        @click.stop="handleClickFavorite"
      />
      <div
        class="card__img"
        :style="{ 'background-image': 'url(' + props.product.image + ')' }"
      ></div>
      <p class="card__price">{{ props.product.price }} ₽</p>
      <p class="card__title">{{ props.product.title }}</p>
      <p class="card__category">{{ props.product.category }}</p>
    </div>
    <div class="card__description-wrapper">
      <p class="card__description">{{ props.product.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import MyShopLikeButton from "./UI/MyShopLikeButton.vue";

const router = useRouter();

const props = defineProps({
  product: { type: Object, required: true },
});

const emit = defineEmits(["change-product-favorite"]);

const getIconColor = computed(() => {
  if (props.product.isFavorite) return "red";
  else return "black";
});

const handleClickFavorite = () => {
  emit("change-product-favorite", props.product.id);
};

const handleClickProductCard = () => {
  router.push({ name: "product", params: { id: props.product.id } });
};
</script>

<style scoped>
.card__wrapper {
  position: relative;
  width: 230px;
  margin-right: 5px;
  padding: 5px;
}

.card__wrapper:hover {
  cursor: pointer;
}

.card {
  position: relative;
  z-index: 2;
}

.card__price {
  font-size: 18px;
  font-weight: 700;
}

.card__title {
  margin-bottom: 3px;
}

.card__description-wrapper {
  visibility: hidden;
  position: absolute;
  top: -8px;
  right: -5px;
  bottom: 0;
  left: -5px;
  background-color: var(--color-white-main);
}

.card__wrapper:hover .card__description-wrapper {
  visibility: visible;
  transition: 0.2s 0.2s;
  box-shadow: 0px 7px 8px grey;
}

.card__description {
  position: absolute;
  z-index: 3;
  top: 100%;
  width: 100%;
  color: rgb(148, 148, 148);
  background-color: var(--color-white-main);
  padding: 0 10px 5px;
  box-shadow: 0px 7px 8px grey;
  font-size: 14px;
}

.card__like-btn {
  z-index: 998;
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
}

.card__img {
  width: 100%;
  height: 300px;
  margin-bottom: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>
