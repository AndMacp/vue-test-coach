<template>
  <main-header></main-header>
  <router-view></router-view>
</template>

<script>
import MainHeader from './components/UI/MainHeader.vue';
export default {
  components: { MainHeader },
};
</script>
