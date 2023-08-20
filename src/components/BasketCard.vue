<template>
  <div class="basket-card">
    <div class="basket-card__img-wrapper">
      <img
        :src="product.image"
        :alt="props.product.title"
        class="basket-card__img"
      />
    </div>
    <div class="basket-card__info">
      <p class="product-menu__category">{{ props.product.category }}</p>
      <p class="product-menu__title">{{ props.product.title }}</p>
      <p class="basket-card__price">{{ props.product.price }} ₽</p>
    </div>
    <div class="basket-card__btns">
      <button
        class="basket-card__like-btn basket-card__btn"
        :class="{ red: props.product.isFavorite }"
        @click.stop="handleClickFavorite"
      >
        <IconHeart :color="getIconColor" class="icon basket-card__icon" />
        {{ props.product.isFavorite ? "В избранном" : "В избранное" }}
      </button>
      <button
        class="basket-card__delete-btn basket-card__btn"
        @click.stop="handleClickDelete"
      >
        <IconDelete class="icon basket-card__icon" />Удалить
      </button>
    </div>
  </div>
</template>

<script setup>
import IconHeart from "../components/icons/IconHeart.vue";
import IconDelete from "../components/icons/IconDelete.vue";
import { computed } from "vue";

const props = defineProps({
  product: { type: Object, required: true },
});

const emit = defineEmits([
  "change-product-favorite",
  "delete-product-from-basket",
]);

const getIconColor = computed(() => {
  if (props.product.isFavorite) return "red";
  else return "black";
});

const handleClickFavorite = () => {
  emit("change-product-favorite", props.product.id);
};

const handleClickDelete = () => {
  emit("delete-product-from-basket", props.product.id);
};
</script>

<style scoped>
.basket-card {
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 0.5px solid rgb(168, 168, 168);
}

.basket-card:hover {
  cursor: pointer;
  background-color: var(--color-white-main-hover);
}

.basket-card:last-child {
  border-bottom: 0;
}

.basket-card__img-wrapper {
  width: 200px;
  min-width: 200px;
  height: 300px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.basket-card__img {
  object-fit: contain;
}

.basket-card__info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.product-menu__category,
.product-menu__title {
  margin-bottom: 5px;
}

.basket-card__btns {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.basket-card__btn {
  min-width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.basket-card__btn:hover {
  opacity: 0.6;
}

.basket-card__icon {
  margin-right: 5px;
}

.red {
  color: red;
}

.basket-card__img {
  width: 200px;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.basket-card__price {
  font-weight: 700;
}
</style>
