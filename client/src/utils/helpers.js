export function speak(w) {
  if (!('speechSynthesis' in window)) {
    alert('ميزة سماع الكلمة لا تعمل في متصفحك');
    return;
  }
  window.speechSynthesis.cancel(); // stop any current speech
  const utter = new SpeechSynthesisUtterance(w);
  utter.lang = 'en-US';
  utter.rate = 0.9;   // slightly slower, clearer
  utter.pitch = 1;
  window.speechSynthesis.speak(utter);
};