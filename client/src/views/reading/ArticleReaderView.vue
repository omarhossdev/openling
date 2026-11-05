<script setup>
  import { speak } from "@/utils/helpers";
  import { ref, computed } from "vue";
  import passage from "@/data/read_1.json";

</script>
<template>
  <hgroup>
    <h1>{{ passage['title'] }}</h1>
    <p>Learn how empathy and gratitude can make your life and the lives of others better.</p>
  </hgroup>
  
  <hr />

  <div class="passage" dir="ltr">
    <span v-for="(word, i) in passage['content'].split(' ')" :key="i">{{ word }}</span>
  </div>

</template>
<style scoped lang="scss">
  * { padding: 0; margin: 0; box-sizing: border-box; }
  
  h1 {
    text-align: center;
    font-size: 1.25rem;
    font-family: serif;
  }
  hgroup p { text-align: center; font-size: 0.75rem; padding: 10px 0; }

  .passage {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25em; // space between words

    span {
      cursor: pointer;
      transition: background 0.15s;

      &:hover {
        background: rgba(0, 0, 0, 0.06);
      }
    }
  }
</style>