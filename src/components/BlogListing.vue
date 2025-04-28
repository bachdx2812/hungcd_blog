<script setup>
import { ref, computed, onMounted } from 'vue'
import blogs from '../data/blogs.json'
import categories from '../data/categories.json'

const selectedCategory = ref(null)

// Initialize category from URL after component is mounted
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  selectedCategory.value = urlParams.get('category')
})

const filteredBlogs = computed(() => {
  return selectedCategory.value
    ? blogs.blogs.filter(blog => blog.category.toLowerCase() === selectedCategory.value.toLowerCase())
    : blogs.blogs
})

const selectedCategoryInfo = computed(() => {
  if (!selectedCategory.value) return null
  return categories.categories.find(cat => cat.id === selectedCategory.value)
})

const changeCategory = (categoryId) => {
  selectedCategory.value = categoryId
  // Update URL without page reload
  const newUrl = categoryId
    ? `${window.location.pathname}?category=${categoryId}`
    : window.location.pathname
  window.history.pushState({}, '', newUrl)
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <!-- Main Header -->
    <header class="text-center space-y-4">
      <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
        My Writing Journey
      </h1>
      <p class="text-dark-text/80 text-lg max-w-2xl mx-auto">
        Exploring ideas through words - from art and fiction to technology and beyond
      </p>
    </header>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Categories Sidebar -->
      <aside class="w-full md:w-1/4">
        <div class="sticky top-24 bg-dark-card/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-dark-text/10">
          <h2 class="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Categories
          </h2>
          <div class="space-y-2">
            <a
              href="#"
              @click.prevent="changeCategory(null)"
              class="group flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300"
              :class="!selectedCategory ? 'bg-primary text-white' : 'hover:bg-primary/5'"
            >
              <span class="font-medium">All Posts</span>
              <span class="text-sm opacity-60">
                {{ blogs.blogs.length }}
              </span>
            </a>

            <a
              v-for="cat in categories.categories"
              :key="cat.id"
              href="#"
              @click.prevent="changeCategory(cat.id)"
              class="group flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300"
              :class="selectedCategory === cat.id ? 'bg-primary text-white' : 'hover:bg-primary/5'"
            >
              <span class="font-medium">{{ cat.name }}</span>
              <span class="text-sm opacity-60">
                {{ blogs.blogs.filter(blog => blog.category === cat.id).length }}
              </span>
            </a>
          </div>
        </div>
      </aside>

      <!-- Blog Grid -->
      <section class="w-full md:w-3/4">
        <!-- Category Header -->
        <div v-if="selectedCategoryInfo" class="mb-8 bg-dark-card/50 backdrop-blur-lg p-6 rounded-2xl border border-dark-text/10">
          <h2 class="text-2xl font-semibold mb-2 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            {{ selectedCategoryInfo.name }}
          </h2>
          <p class="text-dark-text/80">
            {{ selectedCategoryInfo.description }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a v-for="blog in filteredBlogs" :key="blog.id" :href="`/blogs/${blog.slug}`" class="group">
            <article class="h-full bg-dark-card rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-dark-text/10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
              <div class="p-6 h-full flex flex-col">
                <div class="flex items-center gap-3 mb-4">
                  <span class="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {{ blog.category }}
                  </span>
                  <time class="text-dark-text/60 text-sm">
                    {{ new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    }) }}
                  </time>
                </div>

                <h2 class="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {{ blog.title }}
                </h2>

                <p class="text-dark-text/80 text-sm mb-6 line-clamp-3 flex-grow">
                  {{ blog.excerpt }}
                </p>

                <div class="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                  <span class="text-sm font-medium">Read article</span>
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>
