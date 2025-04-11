<template>
  <div>
    <ParticleBackground />
    <HeaderSection data-aos="fade-up" />
    <SkillsSection data-aos="fade-left" />
    <ExperienceSection data-aos="fade-right" />
    <AboutSection data-aos="fade-right" />
    <ProjectsSection data-aos="fade-right" />
    <ContactSection data-aos="fade-up" />
  </div>
</template>

<script>
import HeaderSection from '~/components/HeaderSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import SkillsSection from '~/components/SkillsSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import ExperienceSection from '~/components/ExperienceSection.vue'
import AOS from 'aos'

export default {
  name: 'IndexPage',
  components: {
    HeaderSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
    ExperienceSection
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      AOS.refresh() // Refresh AOS animations on scroll
    }
  }
}
</script>