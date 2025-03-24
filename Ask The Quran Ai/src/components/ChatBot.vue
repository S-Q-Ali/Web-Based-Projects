<script setup lang="ts">
import { ref } from 'vue'
import OpenAI from 'openai';

const isChatOpen = ref(false)
const userInput = ref('')
const messages = ref<{text: string, isUser: boolean}[]>([])
const isLoading = ref(false)

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "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",
  dangerouslyAllowBrowser: true,
  defaultHeaders: {
    "HTTP-Referer": "<YOUR_SITE_URL>",
    "X-Title": "Ask The Quran Ai",
  },
});

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value
}

const sendMessage = async () => {
  if (!userInput.value.trim()) return
  
  messages.value.push({
    text: userInput.value,
    isUser: true
  })
  
  const currentInput = userInput.value
  userInput.value = ''
  isLoading.value = true
  
  try {
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat-v3-0324:free",
      messages: [
        {
          role: "system",
          content: `You are an Islamic reminder bot providing comforting Quranic verses and du'as. Always respond in a compassionate, soothing, and empathetic tone. Acknowledge the user's feelings and offer spiritual encouragement. Default response in English with Arabic text, transliteration, and Urdu translation included. Use light, meaningful emojis (✨) where appropriate. If no direct ayah is found, respond with a general Islamic reminder about patience, trust in Allah, and reliance on Him. Follow this response structure:
          1. Acknowledge the user's emotion
          2. Provide a relevant ayah or du'a
          3. Include Arabic text, transliteration, Urdu translation, and English translation
          4. Optionally, provide a short reflection or practical step
          5. End with a reminder of Allah’s mercy and an invitation to supplicate`
        },
        {
          role: "user",
          content: currentInput
        }
      ],
    });

    messages.value.push({
      text: completion.choices[0].message.content || "I'm here to provide you with Quranic guidance. Could you please share how you're feeling or what's on your mind?",
      isUser: false
    });
  } catch (error) {
    console.error('Error:', error);
    messages.value.push({
      text: "I'm having trouble connecting to the guidance system. Please try again later.",
      isUser: false
    });
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="chat-wrapper">
    <button 
      v-if="!isChatOpen" 
      class="open-chat-btn" 
      @click="toggleChat"
    >
      <span>Chat</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    </button>
    
    <div v-if="isChatOpen" class="chat-container glass">
      <div class="chat-header">
        <h3>Ask The Quran Ai</h3>
        <button class="close-btn" @click="toggleChat">×</button>
      </div>
      <div class="chat-messages">
        <div 
          v-for="(msg, index) in messages" 
          :key="index" 
          :class="['message', msg.isUser ? 'user' : 'bot']"
        >
          <div v-html="msg.text"></div>
        </div>
        <div v-if="isLoading" class="loading">Thinking...</div>
      </div>
      <div class="chat-input">
        <input 
          v-model="userInput" 
          @keyup.enter="sendMessage" 
          placeholder="Type your message..." 
          class="modern-input"
        />
        <button @click="sendMessage" class="send-btn">
          <svg xmlns="http://www.wwww3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ... (keep existing styles unchanged) ... */
</style>
