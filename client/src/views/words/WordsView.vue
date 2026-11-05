<script setup>
import { RouterLink } from 'vue-router'
import "@styles/views/words.scss"
import vocabs from '@/data/data.json'
</script>

<template>
  <main class="main">
    <h1>الكلمات 📖</h1>

    <div class="table-wrap">
      <table class="table">
        <thead>
          <tr>
            <th>الكلمة</th>
            <th>الترجمة</th>
            <th>النوع</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(vocab, i) in vocabs" :key="i">
            <td class="tdata word">{{ vocab.word }}</td>
            <td class="tdata">{{ vocab.translation }}</td>
            <td class="types">
              <span v-for="(type, j) in vocab.types" :key="j" class="type">
                {{ type }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <RouterLink to="/words/practice" class="startBtn">ابدأ التعلم 🚀</RouterLink>
  </main>
</template>