<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import TopNav from './views/components/TopNav.vue';
  import Navbar from './views/components/Navbar.vue';
  import './main.scss'
</script>

<template>
  <header>
    <TopNav></TopNav>
    <Navbar></Navbar>
  </header>

  <!-- Route matching components will render here -->
   <main>
    <RouterView />
   </main>
  
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}
</style>