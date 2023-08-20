<template>
  <aside class="menu">
    <div
      v-for="(category, index) in props.categories"
      :key="index"
      class="menu__item"
      :class="{ selected: selectedCategory === category }"
      @click="handleClickMenuItem(category)"
    >
      {{ category }}
    </div>
  </aside>
</template>

<script setup>
const props = defineProps({
  categories: { type: Array, required: true },
  selectedCategory: { type: String, required: true },
});

const emit = defineEmits(["change-selected-category"]);

const handleClickMenuItem = (category) => {
  emit("change-selected-category", category);
};
</script>

<style scoped>
.menu {
  width: 300px;
  flex-direction: column;
  align-items: flex-start;
}

.menu__item {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 15px;
}
.menu__item:hover {
  background-color: #e9e7e7;
  cursor: pointer;
}

.selected {
  background-color: var(--color-black-main);
  color: var(--color-white-main);
}

.selected:hover {
  background-color: var(--color-black-main);
  opacity: 0.8;
}
</style>
