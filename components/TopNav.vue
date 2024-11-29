<template>
  <nav class="nav-container" :class="{ 'nav-open': isMenuOpen }">
    <!-- Desktop Menu -->
    <ul class="desktop-menu">
      <li v-for="item in menuItems" :key="item">
        <a :href="`#${item.toLowerCase()}`" 
           class="nav-link" 
           @click.prevent="scrollToSection(item.toLowerCase())">
          {{ item }}
        </a>
      </li>
    </ul>

    <!-- Mobile Menu Button -->
    <button class="mobile-menu-btn" @click="toggleMenu" aria-label="Toggle menu">
      <span class="hamburger" :class="{ 'active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ 'active': isMenuOpen }">
      <ul>
        <li v-for="item in menuItems" :key="item">
          <a :href="`#${item.toLowerCase()}`" 
             class="nav-link" 
             @click="handleMobileClick(item.toLowerCase())">
            {{ item }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const menuItems = ['About', 'Skills', 'Projects', 'Contact']

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    const navHeight = 48 // 3rem = 48px
    const sectionPosition = section.offsetTop - navHeight
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    })
  }
}

const handleMobileClick = (sectionId) => {
  scrollToSection(sectionId)
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background-color: #050401;
  z-index: 1000;
}

.desktop-menu {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem;
}

.nav-link {
  color: #fffaff;
  transition: color 0.3s;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
}

.nav-link:hover {
  color: #b1b1b1;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.hamburger {
  width: 24px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #fffaff;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  position: fixed;
  top: 3rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 3rem);
  background-color: #050401;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.mobile-menu.active {
  transform: translateX(0);
}

.mobile-menu ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  height: 100%;
}

.mobile-menu li {
  margin: 0.5rem 0;
}

.mobile-menu .nav-link {
  font-size: 1.5rem;
  padding: 0.75rem 2rem;
  display: block;
}

@media (max-width: 768px) {
  .nav-container {
    background-color: #FFFAFF; /* Changed from transparent to #FFFAFF */
  }

  .desktop-menu {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
    padding: 1rem;
    background-color: transparent;
  }

  .hamburger span {
    background-color: #050401;
    height: 3px;
    border-radius: 2px;
  }

  .hamburger.active span {
    background-color: #050401;
  }

  .mobile-menu {
    display: block;
    background-color: rgba(255, 250, 255, 0.95);
    backdrop-filter: blur(10px);
  }

  .mobile-menu .nav-link {
    color: #050401;
    font-size: 1.5rem;
    padding: 0.75rem 2rem;
    font-weight: 600;
  }

  .mobile-menu .nav-link:active {
    background-color: rgba(0, 0, 0, 0.05);
  }
}

:deep(section[id]) {
  scroll-margin-top: 3rem;
}
</style>