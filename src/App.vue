<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { routes } from './router'

const route = useRoute()
const { NODE_ENV } = import.meta.env

useHead({
  title: () => route.meta.title || 'Vite + Vue Template',
  meta: [
    {
      property: 'og:title',
      content: () => route.meta.title,
    },
    {
      name: 'twitter:title',
      content: () => route.meta.title,
    },
  ],
})
const thisYear = new Date().getFullYear()
</script>
<template>
  <div class="relative py-8">
    <div
      class="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
    />
    <div
      class="container relative max-w-2xl mx-auto bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <header class="px-4 pt-6 prose-sm md:px-6 md:prose">
        <h1>Starter Template</h1>
        <p>Vite + Vue + Express + Typescript</p>
      </header>
      <div class="flex p-6 gap-6 border-b">
        <a v-for="route in routes" :key="route.path" :href="route.path" class="underline">
          {{ route.meta.title }}
        </a>
      </div>
      <main>
        <router-view />
      </main>
      <footer class="py-6 text-sm text-center text-gray-700">
        <p>
          <template v-if="NODE_ENV !== 'production'"> Development mode. </template>
          <span>{{ thisYear }}</span>
        </p>
      </footer>
    </div>
  </div>
</template>
