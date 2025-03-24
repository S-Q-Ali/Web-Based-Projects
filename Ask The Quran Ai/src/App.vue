<script setup lang="ts">
import QuranVerse from './components/QuranVerse.vue'
import ChatBot from './components/ChatBot.vue'
import { ref } from 'vue'

const isDarkMode = ref(true)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('light-mode', !isDarkMode.value)
  document.body.classList.toggle('dark-mode', isDarkMode.value)
}
</script>

<template>
  <div :class="isDarkMode ? 'dark-mode' : 'light-mode'">
    <button @click="toggleTheme" class="theme-toggle-btn">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
    <QuranVerse />
    <ChatBot />
  </div>
</template>

<style>
.theme-toggle-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1000;
}
</style>
