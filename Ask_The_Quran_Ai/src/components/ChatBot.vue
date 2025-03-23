<script setup lang="ts">
function openChat() {
  window.open('https://app.fastbots.ai/embed/cm84nngzn00zmrik9tu7kvssw', '_blank')
}
</script>

<template>
  <div>
    <button class="chat-toggle-btn glass" @click="openChat">
      <span>Talk to AI</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.chat-toggle-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 12px 24px;
  background-color: var(--button-bg);
  color: var(--text-color);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 6px var(--shadow-color);
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.chat-toggle-btn:hover {
  background-color: var(--button-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 8px var(--shadow-color);
}

.chat-toggle-btn svg {
  width: 20px;
  height: 20px;
}

@media (max-width: 600px) {
  .chat-toggle-btn {
    bottom: 10px;
    right: 10px;
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}
</style>
