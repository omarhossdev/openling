<script setup>
  import '@styles/top_nav.scss';
</script>

<template>
  <header>
    <nav id="top-nav" aria-label="الشريط العلوي">
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