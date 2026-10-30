<script setup>
import { RouterLink } from 'vue-router'
import vocabs from '../data.json'
</script>

<template>
  <main class="main">
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
          <td class="tdata">{{ vocab.word }}</td>
          <td class="tdata">{{ vocab.translation }}</td>
          <td class="types">
            <span v-for="(type, j) in vocab.types" :key="j" class="type">
              {{ type }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <RouterLink to="/vocabs/learn" class="startBtn">ابدأ التعلم</RouterLink>
  </main>
</template>

<style scoped lang="scss">
$primary: #0f5973;

.main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.table {
  border-radius: 14px;
  border-collapse: collapse;
  text-align: center;
}

.table, th,
.tdata {
  text-align: center;
  border: 2px solid #333;
  padding: 5px;
}

.tr {
  border-bottom: 2px solid #333;
}

.tdata {
  border-bottom: 0;
}

.types {
  padding: 4px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.type {
  font-size: 10px;
  text-decoration: underline;
  color: darkblue;
}

.startBtn {
  background-color: $primary;
  color: #fff;
  font-weight: bold;
  padding: 7px;
  border-radius: 4px;
  border: 2px solid #111;
  text-align: center;
  display: block;
}
</style>