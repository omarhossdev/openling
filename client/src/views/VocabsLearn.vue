<script setup>
  import {ref} from "vue";
  import vocabs from '../data.json';

  const index = ref(0);

  const word = ref(vocabs[index.value]['word']);
  const translation = ref(vocabs[index.value]['translation']);
  const example = ref(vocabs[index.value]['example']);
  const exampleTranslation = ref(vocabs[index.value]['example_translation']);

  const userInput = ref("")
  
  const isCorrect = ref(false)
  const showDiv = ref(false)

  const speak = () => {
    if (!('speechSynthesis' in window)) {
      alert('ميزة سماع الكلمة لا تعمل في متصفحك');
      return;
    }
    window.speechSynthesis.cancel(); // stop any current speech
    const utter = new SpeechSynthesisUtterance(word.value);
    utter.lang = 'en-US';
    utter.rate = 0.9;   // slightly slower, clearer
    utter.pitch = 1;
    window.speechSynthesis.speak(utter);
  };

  function handle() {
    speak()

    if (isCorrect.value) {
      return;
    } 
    
    showDiv.value = true;
    isCorrect.value = userInput.value.trim().toLowerCase() === word.value
    
  }

</script>
<template>
  <main>
    <section>
      <p>{{ translation }}</p>

      <input dir="ltr" type="text" v-model="userInput" :class="isCorrect && 'correct'" />

      <div v-if="showDiv">

        <div v-if="isCorrect">
          <p>{{ example }}</p>
          <p>{{ exampleTranslation }}</p>
        </div>
        <div v-else>
          <p style="text-align: center;">{{ word }}</p>
        </div>

        <button @click="speak" class="speak">استمع</button>
      </div>
    </section>

    <button class="myBtn" @click="handle">استمر</button>
  </main>
</template>
<style scoped lang="scss">
$primary: #0f5973;
$secondary: #fac129;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

main {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  border: 2px solid #ddd;
  outline: 2px solid transparent;
  margin: 10px auto;
  width: 100%;
  border-radius: 12px;
  padding: 6px;

  &:focus {
    outline-color: dodgerblue;
    border-color: dodgerblue;
  }

  &.correct {
    background: #afa;
    border: darkgreen;
  }

  &.wrong {
    background: rgb(255, 170, 170);
    border: darkred;
  }
}

.myBtn {
  background-color: $primary;
  color: #fff;
  font-weight: bold;
  padding: 7px;
  border-radius: 4px;
  border: 2px solid #111;
  text-align: center;
  display: block;
}

.speak {
  background-color: $secondary;
  color: #000;
  padding: 10px;
  font-weight: bold;
  padding: 7px;
  border-radius: 4px;
  border: 2px solid #111;
  text-align: center;
  display: block;
  width: 100%;
}

</style>