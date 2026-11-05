<script setup>
  import { ref, computed } from "vue";
  import { onKeyStroke } from '@vueuse/core'
  import { speak } from "@/utils/helpers";
  import vocabs from '../data.json';
  import '@styles/views/vocabs_learn.scss';

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
  <main class="learn">
    <section class="card">
      <p class="translation">{{ translation }}</p>

      <input
        dir="ltr"
        type="text"
        v-model="userInput"
        :disabled="isCorrect"
        :class="{ correct: isCorrect }"
        placeholder="اكتبها بالانجليزية"
      />

      <div v-if="showDiv" class="feedback">
        <div v-if="isCorrect" class="example-container">
          <p @click="speak(example)" class="example" dir="ltr">{{ example }}</p>
          <p class="example-translation">{{ exampleTranslation }}</p>
        </div>
        <div v-else class="hint">
          <p>{{ word }}</p>
        </div>

        <button @click="speak(word)" class="speak">🔊 استمع</button>
      </div>
    </section>

    <button class="myBtn" @click="handle">استمر</button>
  </main>
</template>