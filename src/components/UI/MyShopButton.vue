<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style scoped>
.button {
  width: 100%;
  height: 48px;
  border-radius: 5px;
  background-color: var(--color-black-main);
  color: var(--color-white-main);
}

.button:hover {
  background-color: var(--color-black-main-hover);
}
</style>
