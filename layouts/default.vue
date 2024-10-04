<template>
  <div class="layout-wrapper">
    <!-- Header Section -->
    <header class="hero min-h-1/4 bg-cover bg-top lg:bg-center xl:bg-bottom">
      <TopNav /> <!-- Navigation bar should appear here -->
    </header>

    <!-- Main Content Section -->
    <main class="main-content">
      <slot /> <!-- This is where the page-specific content will go -->
    </main>

    <!-- Footer Section -->
    <footer>
      <MFooter /> <!-- Footer should appear here -->
    </footer>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import MFooter from '@/components/MFooter.vue';

export default {
  components: {
    TopNav,
    MFooter,
  },
};
</script>

<style scoped>
/* Ensure the layout takes up full height */
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.hero {
  /* Customize the hero section (header) */
  background-image: url('/path/to/your/background.jpg'); /* Add an image if needed */
  background-size: cover;
  background-position: center;
}

.main-content {
  flex: 1; /* Make sure the main content grows and pushes the footer to the bottom */
  padding: 2rem; /* Optional padding for content */
}

/* Optional styling for footer, in case it's not inside the MFooter.vue */
</style>