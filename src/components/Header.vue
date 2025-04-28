<template>
  <header class="fixed w-full top-0 bg-dark-card/80 backdrop-blur-sm z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <a href="/" class="text-2xl font-bold text-primary">Cao Duy Hung</a>
        <!-- Mobile menu button -->
        <button class="md:hidden text-dark-text hover:text-primary" @click="isMenuOpen = !isMenuOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <!-- Desktop menu -->
        <div class="hidden md:flex items-center space-x-6">
          <a href="/" class="hover:text-primary transition-colors">Home</a>
          <a href="/blogs" class="hover:text-primary transition-colors">Blog</a>
          <a href="/contact" class="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
      <!-- Mobile menu panel -->
      <div v-if="isMenuOpen" class="md:hidden">
        <div class="flex flex-col space-y-4 pt-4">
          <a href="/" class="hover:text-primary transition-colors">Home</a>
          <a href="/blogs" class="hover:text-primary transition-colors">Blog</a>
          <a href="/contact" class="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>
