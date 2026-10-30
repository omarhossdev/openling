<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <!-- Use RouterLink instead of a tags to avoid page refresh -->
      <RouterLink to="/">رئيسية</RouterLink>
      <RouterLink to="/vocabs">كلمات</RouterLink>
    </nav>
  </header>

  <!-- Route matching components will render here -->
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}
</style>