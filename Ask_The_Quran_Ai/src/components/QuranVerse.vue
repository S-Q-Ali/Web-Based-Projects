<script setup lang="ts">
import { ref } from 'vue'
import verses from '../api/verses.json'

const moods = [
  { label: 'Peace', value: 'peace' },
  { label: 'Anxiety', value: 'anxiety' },
  { label: 'Happiness', value: 'happiness' },
  { label: 'Grief', value: 'grief' },
  { label: 'Stress', value: 'stress' },
  { label: 'Gratitude', value: 'gratitude' },
  { label: 'Hope', value: 'hope' }
]

const selectedMood = ref('')
const verse = ref({
  arabic: '',
  transliteration: '',
  translation: '',
  urdu: '',
  tafsir: '',
  tafsirUrdu: '',
  audio: ''
})

const getVerse = () => {
  const foundVerse = verses.find(v => v.mood === selectedMood.value)
  if (foundVerse) {
    verse.value = foundVerse
  } else {
    verse.value = {
      arabic: '',
      transliteration: '',
      translation: '',
      urdu: '',
      tafsir: 'No verse found for this mood.',
      tafsirUrdu: 'اس موڈ کے لیے کوئی آیت نہیں ملی۔',
      audio: ''
    }
  }
}
</script>

<template>
  <div class="quran-verse glass fade-in">
    <h2>Select Your Mood</h2>
    <select v-model="selectedMood" @change="getVerse" class="mood-select">
      <option value="">Choose a mood</option>
      <option v-for="mood in moods" :key="mood.value" :value="mood.value">
        {{ mood.label }}
      </option>
    </select>

    <div v-if="verse.arabic" class="verse-container glass fade-in">
      <h3>Quranic Verse</h3>
      <div class="arabic">{{ verse.arabic }}</div>
      <div class="transliteration">{{ verse.transliteration }}</div>
      <div class="translation">{{ verse.translation }}</div>
      <div class="urdu">{{ verse.urdu }}</div>
      <audio v-if="verse.audio" controls class="audio-player">
        <source :src="verse.audio" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      <div class="tafsir glass">
        <h4>Explanation</h4>
        <p>{{ verse.tafsir }}</p>
        <p class="urdu-tafsir">{{ verse.tafsirUrdu }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quran-verse {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--card-bg);
}

.mood-select {
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--card-bg);
  color: var(--text-color);
  transition: all 0.3s ease;
}

.mood-select:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px var(--shadow-color);
}

.verse-container {
  margin-top: 2rem;
  padding: 1.5rem;
}

.arabic {
  font-size: 1.8rem;
  text-align: right;
  margin: 1.5rem 0;
  line-height: 1.6;
}

.transliteration {
  font-style: italic;
  color: #666;
  margin: 1.5rem 0;
}

.translation {
  font-weight: bold;
  margin: 1.5rem 0;
  line-height: 1.6;
}

.urdu {
  font-family: 'Noto Nastaliq Urdu', serif;
  font-size: 1.3rem;
  text-align: right;
  margin: 1.5rem 0;
  line-height: 1.6;
}

.audio-player {
  width: 100%;
  margin: 1.5rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--shadow-color);
}

.tafsir {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1.5rem;
}

.urdu-tafsir {
  font-family: 'Noto Nastaliq Urdu', serif;
  font-size: 1.2rem;
  text-align: right;
  margin-top: 1rem;
  line-height: 1.6;
}

@media (max-width: 600px) {
  .quran-verse {
    padding: 1rem;
    margin: 1rem;
  }
  
  .arabic {
    font-size: 1.4rem;
  }
}
</style>
