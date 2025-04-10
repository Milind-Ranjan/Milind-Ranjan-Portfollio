<template>
  <nav class="nav-container" :class="{ 'nav-open': isMenuOpen }">
    <!-- Desktop Menu -->
    <div class="nav-content">
      <div class="nav-spacer"></div>
      <ul class="desktop-menu">
        <li v-for="item in menuItems" :key="item">
          <a :href="`#${item.toLowerCase()}`" 
             class="nav-link" 
             @click.prevent="scrollToSection(item.toLowerCase())">
            {{ item }}
          </a>
        </li>
      </ul>
      <a href="#" class="resume-button">Resume <span class="download-icon">↓</span></a>
    </div>

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
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: transparent;
  z-index: 1050;
  backdrop-filter: blur(8px);
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
}

.nav-spacer {
  width: 100px;
}

.desktop-menu {
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  gap: 3rem;
}

.nav-link {
  color: #000000;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.02em;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000000;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.resume-button {
  background-color: #000000;
  color: #ffffff;
  padding: 0.8rem 1.8rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
}

.resume-button:hover {
  background-color: #333333;
  transform: translateY(-1px);
}

.download-icon {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.resume-button:hover .download-icon {
  transform: translateY(2px);
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
    background-color: rgba(255, 255, 255, 0.95);
    height: 4.5rem;
  }

  .nav-content {
    padding: 0 1.5rem;
  }

  .nav-spacer {
    display: none;
  }

  .desktop-menu {
    display: none;
  }

  .resume-button {
    display: none;
  }

  .mobile-menu {
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
  }

  .mobile-menu .nav-link {
    color: #000000;
    font-weight: 600;
    font-size: 1.4rem;
  }

  .mobile-menu ul {
    gap: 2rem;
  }

  .mobile-menu-btn {
    display: block;
  }

  .mobile-menu {
    display: block;
  }
}

:deep(section[id]) {
  scroll-margin-top: 5rem;
}
</style>