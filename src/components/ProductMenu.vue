<template>
  <div class="product-menu">
    <p class="product-menu__brand">{{ props.product.category }}</p>
    <p class="product-menu__subcategory">{{ props.product.title }}</p>
    <p class="product-menu__price">{{ props.product.price }} ₽</p>
    <div class="product-menu__btns">
      <MyShopButton class="product-menu__basket-btn" @click="handleClickBasket">
        {{ isProductInBasket ? "В корзине" : "Добавить в корзину" }}
      </MyShopButton>
      <button class="product-menu__like-btn" @click.stop="handleClickFavorite">
        <IconHeart :color="getIconColor" class="icon like-btn__icon" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import MyShopButton from "@/components/UI/MyShopButton.vue";

const props = defineProps({
  product: { type: Object, required: true },
  isProductInBasket: { type: Boolean, required: false, default: false },
});

const emit = defineEmits(["change-product-favorite", "add-product-to-basket"]);

const getIconColor = computed(() => {
  if (props.product.isFavorite) return "red";
  else return "black";
});

const handleClickFavorite = () => {
  emit("change-product-favorite", props.product.id);
};

const handleClickBasket = () => {
  emit("add-product-to-basket", props.product);
};
</script>

<style>
.product-menu {
  width: 20%;
}
.product-menu__brand {
  font-size: 26px;
}
.product-menu__subcategory {
  margin-bottom: 10px;
  font-size: 22px;
  color: rgb(109, 109, 109);
}
.product-menu__price {
  margin-bottom: 8px;
  font-weight: 700;
}

.product-menu__select-wrapper {
  position: relative;
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid black;
  border-radius: 5px;
}

.product-menu__select-wrapper:hover {
  cursor: pointer;
}

.product-menu__select {
  width: 100%;
  padding: 10px;
  -moz-appearance: none;
  -webkit-appearance: none;
  z-index: 10;
}

.product-menu__select:hover {
  cursor: pointer;
}

.product-menu__icon {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  z-index: 100;
}

.product-menu__btns {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.product-menu__basket-btn {
  width: 80%;
}

.product-menu__like-btn {
  position: relative;
  width: 20%;
  height: 48px;
}

.product-menu__like-btn:hover {
  opacity: 0.6;
}

.like-btn__icon {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 50%);
}
</style>
