<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.base-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 2px solid #e0e0e0;
  max-width: 1000px;
  margin: 20px auto;
  padding: 16px;
}
</style>
