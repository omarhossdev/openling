<script setup>
  import { ref, computed } from "vue";
  import { onKeyStroke } from '@vueuse/core'
  import vocabs from '../data.json';

  // Task
  //------
  // show words randomly

  const getRandomIndex = () => Math.floor(Math.random() * vocabs.length);
  const shownIndexes = ref(new Array(vocabs.length).fill(false));
  const allShown = computed(() => shownIndexes.value.every(true)) // checks if all words are shown or not

  const index = ref(getRandomIndex());

  const current = computed(() => vocabs[index.value])

  const word = computed(() => current.value?.word ?? '')
  const translation = computed(() => current.value?.translation ?? '')
  const example = computed(() => current.value?.example ?? '')
  const exampleTranslation = computed(() => current.value?.example_translation ?? '')

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
    if (isCorrect.value) {
      const newIndex = getRandomIndex()

      if (shownIndexes.value[newIndex]) return handle()
      
      if (allShown.value) shownIndexes.value.fill(false) // if all words are shown, reset shownIndexes to all false to reshow them again

      index.value = newIndex

      showDiv.value = false;
      isCorrect.value = false;
      userInput.value = ""
      return;
    } 
    
    speak()
    showDiv.value = true;
    isCorrect.value = userInput.value.trim().toLowerCase() === word.value
    shownIndexes[index] = true;
  }

  onKeyStroke('Enter', handle)
</script>
<template>
  <main>
    <section>
      <p>{{ translation }}</p>

      <input dir="ltr" type="text" v-model="userInput" :class="isCorrect && 'correct'" />

      <div v-if="showDiv">

        <div v-if="isCorrect">
          <p dir="ltr">{{ example }}</p>
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