<script setup lang="ts">
import { useStore } from '../store'
import HelloWorld from '../components/HelloWorld.vue'
import Ask from '../components/Ask.vue'
const store = useStore()
</script>
<template>
  <div class="p-4 mx-auto prose md:px-6 prose-indigo sm:rounded-md">
    <h2>Welcome Home</h2>
    <HelloWorld msg="Hello World Component" />
    <Ask />
  </div>
</template>
