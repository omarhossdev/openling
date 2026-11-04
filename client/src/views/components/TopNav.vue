<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav aria-label="الشريط العلوي">
      <img
        class="logo"
        src="/logo.png"
        alt="OpenLing"
        width="78"
        height="78"
      />

      <div class="streak" role="status" aria-label="سلسلة الأيام: 0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          aria-hidden="true"
          focusable="false"
        >
          <rect width="256" height="256" fill="none"/>
          <path d="M136,192c20-3.37,36.61-20,40-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
          <path d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </svg>
        <p aria-hidden="true">0</p>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
$primary: #794dfc;
$font-color: #040c56;
$fire: #ff6b1a;
$fire-2: #ff9a1f;

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);          /* ✨ glassy modern */
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid #eee;

  .logo {
    width: 78px;
    height: 78px;
    object-fit: contain;                /* 🖼️ keep logo ratio */
    display: block;
  }

  .streak {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 999px;               /* 🟣 pill */
    background: rgba($fire, 0.10);
    color: $fire;
    transition: transform 0.2s ease;

    svg {
      width: 24px;
      height: 24px;
      fill: currentColor;
      filter: drop-shadow(0 0 4px rgba($fire, 0.35));  /* 🔥 glow */
    }

    p {
      font-weight: 800;
      font-size: 16px;
      color: $fire;
      margin: 0;
      background: linear-gradient(90deg, $fire, $fire-2);  /* 🔥 gradient text */
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:hover {
      transform: scale(1.05);
    }

    &:focus-visible {
      outline: 2px solid $primary;
      outline-offset: 2px;
    }
  }
}
</style>