<template>
  <button>
    <IconHeart :color="props.color" class="icon" />
  </button>
</template>

<script setup>
import IconHeart from "../../components/icons/IconHeart.vue";

const props = defineProps({
  color: { type: String, required: true, default: "black" },
});
</script>

<style scoped></style>
