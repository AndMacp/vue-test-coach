<template>
  <button class="base-button" :style="{ backgroundColor: color }" v-if="!to">
    <slot></slot>
  </button>
  <router-link v-else class="base-button" :to="to"><slot></slot></router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: '#adff2f',
    },
  },
};
</script>

<style scoped>
.base-button {
  font-family: 'Audiowide', cursive;
  display: inline-block;
  padding: 10px 20px; /* Consistent padding */
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none; /* Remove default link underline */
  background-color: #adff2f; /* Darker background on hover */
  color: #444444;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.base-button:hover {
  background-color: #355604; /* Darker background on hover */
}

.base-button:focus {
  outline: none; /* Remove the default focus outline */
}
</style>
