import vocabs from "@data/vocab.json";
import styles from "@styles/vocabs_learn.module.scss";
import { useState, useEffect } from "preact/hooks";

export default function VocabsLearn() {

  const [learnt, setLearnt] = useState(vocabs[0])

  const [word, setWord] = useState(learnt["word"] || '');
  
  const [myInput, setMyInput] = useState("")

  const speak = () => {
    if (!('speechSynthesis' in window)) {
      alert('ميزة سماع الكلمة لا تعمل في متصفحك');
      return;
    }
    window.speechSynthesis.cancel(); // stop any current speech
    const utter = new SpeechSynthesisUtterance(word);
    utter.lang = 'en-US';
    utter.rate = 0.9;   // slightly slower, clearer
    utter.pitch = 1;
    window.speechSynthesis.speak(utter);
  };
  

  return (
    <main class={styles.main}>
      <div style="display: flex; flex-direction: column; gap: 7px">
        <p>{learnt["translation"]}</p>

        <input type="text" placeholder="المعني بالانجليزية" dir="ltr" value={myInput} onChange={(e) => setMyInput(e.target.value)} />

        <button className={styles.speak} onClick={speak}>🔊 استمع</button>
        <button className={styles.continue}>استمر</button>
      </div>
    </main>
  )
}