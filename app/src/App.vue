<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "./components/nav/NavBar.vue";

</script>

<template>
  <header>

    <NavBar></NavBar>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
