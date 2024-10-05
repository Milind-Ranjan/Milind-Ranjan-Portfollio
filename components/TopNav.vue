<template>
  <nav class="w-full h-16" style="background-color: #050401;">
    <ul class="flex h-full items-center justify-around font-bold text-white">
        <li>
          <a
            href="#about"
            class="nav-link"
            @click.prevent="scrollToSection('about')"
          >About</a>
        </li>
        <li>
          <a
            href="#skills"
            class="nav-link"
            @click.prevent="scrollToSection('skills')"
          >Skills</a>
        </li>
        <li>
          <a
            href="#projects"
            class="nav-link"
            @click.prevent="scrollToSection('projects')"
          >Projects</a>
        </li>
        <li>
          <a
            href="#contact"
            class="nav-link contact-link"
            @click.prevent="scrollToSection('contact')"
          >Contact</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    methods: {
      scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          // Get section's position relative to the top of the document
          const topOffset = section.getBoundingClientRect().top + window.pageYOffset;
  
          // Smooth scroll using window.scrollTo
          window.scrollTo({
            top: topOffset,
            behavior: 'smooth' // Ensures the scroll is smooth
          });
        }
      }
    }
  };
  </script>
  
  <style scoped>

nav {
  background-color: yourColor; /* Replace with your specific color */
  border-radius: 0 0 15px 15px; /* Rounded corners at the bottom */
  padding: 0;
  position: fixed; /* Remove any padding */
}
  .nav-item {
  margin: 0; /* Remove margin to get items closer together */
}

.nav-link {
  color: #fffaff;
  transition: color 0.3s; /* Only color transition */
  padding: 0 10px; /* Optional: Add horizontal padding for better touch target */
  font-weight: 500;
  font-size: 20px;
}

.nav-link:hover {
  color: #b1b1b1; /* Golden color on hover */
}
  </style>