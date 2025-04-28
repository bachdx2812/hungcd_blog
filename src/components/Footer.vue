<template>
  <footer class="fixed bottom-0 left-0 right-0 w-full bg-dark-card/80 backdrop-blur-sm z-50 border-t border-dark-text/10">
    <div class="container mx-auto px-4 py-4">
      <div class="flex flex-col items-center justify-center text-center text-dark-text/60">
        <p class="text-sm">
          © {{ currentYear }} Cao Duy Hung. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
