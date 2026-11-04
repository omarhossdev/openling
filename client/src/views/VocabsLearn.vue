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

<style scoped lang="scss">
$primary: #794dfc;
$secondary: #ffb020;      /* warm accent for "listen" */
$font-color: #040c56;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.learn {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 16px 100px;
  min-height: 100dvh;
  background: #fff;
  color: $font-color;
  font-family: inherit;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px;
  border-radius: 20px;
  background: #fff;
  border: 2px solid #eee;
  box-shadow: 0 4px 16px rgba(121, 77, 252, 0.08);
}

.translation {
  text-align: center;
  font-size: 1.4rem;
  font-weight: 800;
  color: $font-color;
}

input {
  width: 100%;
  padding: 14px;
  border-radius: 14px;
  border: 2px solid #e5e5e5;
  outline: 2px solid transparent;
  font-size: 16px;              /* 📱 prevents iOS zoom */
  text-align: center;
  transition: border-color 0.15s ease, outline-color 0.15s ease;

  &::placeholder { color: #aaa; }

  &:focus {
    border-color: $primary;
    outline-color: rgba($primary, 0.25);
  }

  &.correct {
    background: rgba($primary, 0.06);
    border-color: $primary;
    color: $primary;
    font-size: 1.3rem;
    font-weight: 800;
    text-transform: capitalize;
  }
}

.feedback {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.example-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px;
  border-radius: 14px;
  background: rgba($primary, 0.06);
  border: 1px solid rgba($primary, 0.15);
}

.example {
  cursor: pointer;
  font-weight: 700;
  color: $primary;
  text-align: center;
  transition: opacity 0.15s ease;

  &:hover, &:active { opacity: 0.7; }
}

.example-translation {
  text-align: center;
  font-size: 14px;
  color: #6b7280;
}

.hint {
  text-align: center;
  font-weight: 800;
  font-size: 1.2rem;
  color: #ff5252;              /* red hint when wrong */
}

.myBtn {
  padding: 14px;
  border-radius: 14px;
  border: none;
  background: $primary;
  color: #fff;
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba($primary, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba($primary, 0.45);
  }

  &:active { transform: translateY(0); }

  &:focus-visible {
    outline: 2px solid $font-color;
    outline-offset: 2px;
  }
}

.speak {
  padding: 12px;
  border-radius: 12px;
  border: 2px solid rgba($secondary, 0.4);
  background: $secondary;
  color: #000;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover { transform: translateY(-1px); }

  &:focus-visible {
    outline: 2px solid $primary;
    outline-offset: 2px;
  }
}
</style>