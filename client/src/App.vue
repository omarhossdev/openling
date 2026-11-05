<script setup>
  import { RouterView } from 'vue-router'
  import TopNav from './views/components/TopNav.vue';
  import Navbar from './views/components/Navbar.vue';
  import '@styles/main.scss'
</script>

<template>
  <header>
    <TopNav></TopNav>
    <Navbar></Navbar>
  </header>

   <main>
    <RouterView />
   </main>
</template>