<script setup>
  import { ref, computed } from "vue";
  import { onKeyStroke } from '@vueuse/core'
  import { speak } from "@/utils/helpers";
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

  function handle() {
    if (isCorrect.value) {
      const newIndex = getRandomIndex()

      if (shownIndexes.value[newIndex]) return handle()
      
      //if (allShown.value) shownIndexes.value.fill(false) // if all words are shown, reset shownIndexes to all false to reshow them again

      index.value = newIndex;

      showDiv.value = false;
      isCorrect.value = false;
      userInput.value = ""
      return;
    } 
    
    speak(word.value)
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

      <input dir="ltr" type="text" v-model="userInput" :disabled="isCorrect" :class="isCorrect && 'correct'" placeholder="اكتبها بالانجليزية" />

      <div v-if="showDiv">

        <div v-if="isCorrect" class="example-container">
          <p @click="speak(example)" class="example" dir="ltr">{{ example }}</p>
          <p>{{ exampleTranslation }}</p>
        </div>
        <div v-else>
          <p style="text-align: center; margin-bottom: 6px;">{{ word }}</p>
        </div>

        <button @click="speak(word)" class="speak">استمع</button>
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
    background: transparent;
    border: transparent;
    text-align: center;
    color: black;
    font-size: 1.1rem;
    text-transform: capitalize;
    font-weight: bold;
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

.example {
  cursor: pointer;
  &:hover, &:active {
    text-decoration: underline;
  }
}

.example-container {
  margin-bottom: 13px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

</style>