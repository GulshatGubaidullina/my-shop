<template>
  <select class="select" :value="modelValue" @change="changeOption">
    <option disabled value="">Сортировка по цене</option>
    <option
      class="select__option"
      v-for="option in options"
      :key="option"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: String, required: true },
  options: { type: Array, required: true, default: () => [] },
});

const emit = defineEmits(["change-product-favorite"]);

const changeOption = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style scoped>
.select {
  min-width: 100px;
  max-width: 300px;
  padding: 10px 20px;
  border: 1px solid var(--color-black-main);
  border-radius: 15px;
  color: var(--color-black-main);
}

.select:hover {
  cursor: pointer;
}
</style>
