<template>
  <nav class="fixed top-0 left-0 w-full h-20 bg-white/95 backdrop-blur-md shadow-sm md:bg-white/95" style="background-color: rgba(255, 250, 255, 0.95); z-index: 1000;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
      <div class="flex items-center justify-between h-full">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#" @click.prevent="scrollToSection('home')" class="flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-lg transition-colors">
            <img src="/icons/home.svg" alt="Home" class="w-6 h-6" />
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="flex items-center space-x-8">
            <a 
              v-for="item in menuItems" 
              :key="item"
              :href="`#${item.toLowerCase()}`" 
              class="nav-link text-gray-900 hover:text-gray-600 px-3 py-2 text-lg font-semibold transition-colors relative group"
              @click.prevent="scrollToSection(item.toLowerCase())"
            >
              {{ item }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>

                <!-- Resume Button (Desktop) -->
        <div class="hidden md:block">
          <a 
            href="https://drive.google.com/file/d/1iRPoPUhXHxF0rCFNaByDbBGt1D4aQdU-/view" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-medium"
            @click="trackResumeDownload"
          >
            Resume
            <svg class="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </a>
        </div>

        <!-- Mobile Hamburger Button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="relative p-3 rounded-xl hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
            :class="{ 'bg-gray-100': isMobileMenuOpen }"
            aria-label="Toggle navigation menu"
          >
            <div class="hamburger-container">
              <span class="hamburger-line" :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"></span>
              <span class="hamburger-line" :class="{ 'opacity-0 scale-0': isMobileMenuOpen }"></span>
              <span class="hamburger-line" :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"></span>
            </div>
          </button>
        </div>

 
      </div>
        </div>

    <!-- Mobile Navigation Menu -->
    <div 
      class="fixed inset-0 md:hidden transform transition-all duration-300 ease-in-out"
      :class="{ 
        'translate-x-0 opacity-100': isMobileMenuOpen, 
        'translate-x-full opacity-0': !isMobileMenuOpen 
      }"
      style="background-color: #fffaff; z-index: 99999; width: 100vw; height: 100vh;"
    >
      <div class="h-full flex flex-col pt-20">
        <!-- Mobile Menu Header with Close Button -->
        <div class="px-6 py-6 border-b border-gray-200/30 flex items-center justify-between">
          <h2 class="text-xl font-bold text-gray-900">Menu</h2>
          <button 
            @click="closeMobileMenu"
            class="p-3 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-110"
            aria-label="Close navigation menu"
          >
            <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Items -->
        <div class="flex-1 px-6 py-8 overflow-y-auto">
          <nav class="space-y-1">
            <a 
              v-for="(item, index) in menuItems" 
              :key="item"
              :href="`#${item.toLowerCase()}`" 
              class="group flex items-center px-5 py-5 rounded-2xl text-gray-900 hover:bg-gray-100/60 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-sm"
              :style="{ 
                animationDelay: `${index * 100}ms`,
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
              }"
              :class="{ 'animate-slide-in': isMobileMenuOpen }"
              @click="handleMobileNavigation(item.toLowerCase())"
            >
              <div class="flex items-center space-x-4">
                <div class="w-3 h-3 bg-gray-400 rounded-full group-hover:bg-gray-900 transition-all duration-300 group-hover:scale-125"></div>
                <span class="text-xl font-semibold">{{ item }}</span>
              </div>
              <svg class="ml-auto w-6 h-6 text-gray-400 group-hover:text-gray-900 transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </nav>
        </div>

                <!-- Mobile Menu Footer -->
        <div class="px-6 py-8 border-t border-gray-200/30">
          <a 
            href="https://drive.google.com/file/d/1iRPoPUhXHxF0rCFNaByDbBGt1D4aQdU-/view" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center justify-center px-8 py-5 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold text-lg"
            :style="{ 
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '400ms'
            }"
            @click="trackResumeDownload"
          >
            <svg class="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download Resume
          </a>
          
          <!-- Contact Info -->
          <div 
            class="mt-6 text-center"
            :style="{ 
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '500ms'
            }"
          >
            <p class="text-base font-medium text-gray-700">Milind Ranjan</p>
            <p class="text-sm text-gray-500 mt-1">Computer Science Student</p>
          </div>
        </div>
       </div>
     </div>


 
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent body scroll when menu is open
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    const navHeight = 80 // 5rem = 80px
    const sectionPosition = section.offsetTop - navHeight
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    })
  } else if (sectionId === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

const handleMobileNavigation = (sectionId) => {
  scrollToSection(sectionId)
  closeMobileMenu()
}

const trackResumeDownload = () => {
  console.log('Resume download clicked')
}

// Handle escape key to close mobile menu
const handleEscapeKey = (event) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Cleanup on component unmount
onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscapeKey)
  document.body.style.overflow = '' // Reset body overflow
})
</script>

<style scoped>
/* Hamburger Menu Styles */
.hamburger-container {
  @apply flex flex-col justify-between w-6 h-5;
}

.hamburger-line {
  @apply w-full h-0.5 bg-gray-900 transition-all duration-300 ease-in-out origin-center;
}

/* Mobile Menu Animation */
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slide-in 0.3s ease-out forwards;
}

/* Enhanced Mobile Menu Styles */
.mobile-menu-item {
  @apply relative;
}

.mobile-menu-item::before {
  @apply content-[''] absolute left-0 top-0 w-1 h-full bg-gray-900 transform scale-y-0 transition-transform duration-300 origin-top;
}

.mobile-menu-item:hover::before {
  @apply scale-y-100;
}

/* Smooth scroll margin for sections */
:deep(section[id]) {
  scroll-margin-top: 5rem;
}

/* Custom scrollbar for mobile menu */
.mobile-menu-scroll::-webkit-scrollbar {
  width: 4px;
}

.mobile-menu-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.mobile-menu-scroll::-webkit-scrollbar-thumb {
  @apply bg-gray-300 rounded-full;
}

.mobile-menu-scroll::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400;
}

/* Enhanced focus styles */
button:focus-visible {
  @apply ring-2 ring-gray-400 ring-offset-2 ring-offset-white;
}

/* Mobile menu backdrop blur enhancement */
@media (max-width: 768px) {
  .mobile-menu-backdrop {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
}
</style>