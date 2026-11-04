<script setup>
  import { RouterLink } from 'vue-router'
</script>
<template>
  <nav>
    <RouterLink class="link" to="/">
      <div class="icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M104,216V152h48v64h64V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120v96Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg></div>

      <span>رئيسية</span>
    </RouterLink>

    <RouterLink class="link" to="/speak">
      <div class="icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V240a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z"/></svg></div>

      <span>محادثة</span>
    </RouterLink>

    <RouterLink class="link" to="/community">
      <div class="icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M192,120a59.91,59.91,0,0,1,48,24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M16,144a59.91,59.91,0,0,1,48-24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="144" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,216a65,65,0,0,1,112,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M161,80a32,32,0,1,1,31,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M64,120A32,32,0,1,1,95,80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg></div>

      <span>مجتمع</span>
    </RouterLink>

    <RouterLink class="link" to="/settings">
      <div class="icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M41.43,178.09A99.14,99.14,0,0,1,31.36,153.8l16.78-21a81.59,81.59,0,0,1,0-9.64l-16.77-21a99.43,99.43,0,0,1,10.05-24.3l26.71-3a81,81,0,0,1,6.81-6.81l3-26.7A99.14,99.14,0,0,1,102.2,31.36l21,16.78a81.59,81.59,0,0,1,9.64,0l21-16.77a99.43,99.43,0,0,1,24.3,10.05l3,26.71a81,81,0,0,1,6.81,6.81l26.7,3a99.14,99.14,0,0,1,10.07,24.29l-16.78,21a81.59,81.59,0,0,1,0,9.64l16.77,21a99.43,99.43,0,0,1-10,24.3l-26.71,3a81,81,0,0,1-6.81,6.81l-3,26.7a99.14,99.14,0,0,1-24.29,10.07l-21-16.78a81.59,81.59,0,0,1-9.64,0l-21,16.77a99.43,99.43,0,0,1-24.3-10l-3-26.71a81,81,0,0,1-6.81-6.81Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg></div>

      <span>اعدادات</span>
    </RouterLink>
  </nav>
</template>
<style scoped lang="scss">
$primary: #794dfc;
$font-color: #040c56;

nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: auto;
  height: 72px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: #fff;
  border-top: 2px solid #eee;
  padding: 5px!important; 
  box-shadow: 0 -2px 12px rgba(121, 77, 252, 0.08);

  .link { 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    justify-self: stretch;  
    min-width: 0;
    min-height: 0;    
    overflow: hidden;  
    color: $font-color;
    text-decoration: none;
    font-weight: 700;
    font-size: 11px;
    transition: color 0.15s ease, background 0.15s ease;
    border-radius: 12px;

    .icon-wrap {
      flex: 1;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      min-height: 0;

      svg {
        width: 100%;
        height: 100%;
        transform: scale(0.74); /* 🎯 punch in past viewBox whitespace */
        transform-origin: center;
        fill: currentColor;
      }
    }

    span {
      flex-shrink: 0;         /* 📌 text stays readable */
      padding-bottom: 6px;
    }

    &:hover {
      background: rgba($primary, 0.06);
    }

    &.router-link-active {
      color: $primary;                /* 💜 active */
      background: rgba($primary, 0.10);
    }
  }
}
</style>