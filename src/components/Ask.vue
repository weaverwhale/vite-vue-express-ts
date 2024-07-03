<script setup lang="ts">
  import { ref, onBeforeMount } from 'vue';

  const question = ref('What is the meaning of life?')
  const answer = ref()

  onBeforeMount( async () => {
    answer.value = await fetch('/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question: question.value })
    
    })
    .then((res) => res.json())
    .then((data) => {
      return data.answer
    })
  })
</script>

<template>
  <div class="shadow rounded p-4 mt-4">
    <h3>{{ question }}</h3>
    <p class="text-xl font-bold">{{ answer }}</p>
    <p v-if="answer?.length > 0" class="text-sm p-2 bg-gray-100 rounded italic">Fetched from the express server, proxied by Vite.</p>
  </div>
</template>