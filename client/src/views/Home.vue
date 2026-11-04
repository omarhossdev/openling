<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="home">
    <h1>ماذا تود ان تتعلم اليوم؟</h1>

    <div class="grid">
      <RouterLink to="/vocab" class="card vocab">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2" /><path d="M12 5v16" /><path d="M7 7h1" /><path d="M7 11h1" /><path d="M16 7h1" /><path d="M16 11h1" /><path d="M16 15h1" /></svg>
        <span>الكلمات</span>
      </RouterLink>

      <RouterLink to="/grammar" class="card grammar">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 15v-7.5a3.5 3.5 0 0 1 7 0v7.5" /><path d="M5 10h7" /><path d="M10 18l3 3l7 -7" /></svg>
        <span>النحو</span>
      </RouterLink>

      <RouterLink to="/listening" class="card listening">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 15a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3" /><path d="M15 15a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3" /><path d="M4 15v-3a8 8 0 0 1 16 0v3" /></svg>
        <span>الاستماع</span>
      </RouterLink>

      <RouterLink to="/reading" class="card reading">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>
        <span>القراءة</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
$primary: #794dfc;
$font-color: #040c56;
$gray: #6b7280;

.home {
  padding: 0 16px 34px;   /* 📏 top (header) + bottom (nav) safe space */
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #fff;
  color: $font-color;
  font-family: inherit;

  h1 {
    font-size: clamp(20px, 5vw, 28px);  /* 📱 responsive text */
    font-weight: 800;
    text-align: center;
    line-height: 1.4;
    margin: 0;
    color: $font-color;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);  /* 📱 2 cols from the start */
    gap: 12px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);  /* 💻 still 2, wider */
      gap: 20px;
      max-width: 640px;
      margin: 0 auto;
      width: 100%;
    }
  }

  .card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 18px 20px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    color: $font-color;
    background: #fff;
    border: 2px solid #eee;
    box-shadow: 0 2px 8px rgba(4, 12, 86, 0.05);
    transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;

    svg {
      width: 28px;
      height: 28px;
      flex-shrink: 0;
      stroke-width: 2;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(4, 12, 86, 0.10);
    }

    &:active {
      transform: translateY(0);
    }

    &:focus-visible {
      outline: 2px solid $primary;
      outline-offset: 2px;
    }

    /* 🎨 per-card tint */
    &.vocab     { svg { color: #794dfc; } &:hover { border-color: #794dfc; } }
    &.grammar   { svg { color: #ff6b1a; } &:hover { border-color: #ff6b1a; } }
    &.listening { svg { color: #0ea5e9; } &:hover { border-color: #0ea5e9; } }
    &.reading   { svg { color: #16a34a; } &:hover { border-color: #16a34a; } }
  }
}
</style>