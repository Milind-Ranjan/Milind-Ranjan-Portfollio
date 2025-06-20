<template>
  <section id="about" class="about-me">
    <div class="about-container">
      <div class="illustration-container">
        <img src="/images/about.png" alt="Developer illustration" class="developer-illustration" />
      </div>
      <div class="content-container">
        <h1>About <span class="emphasis">Me</span></h1>
        <p class="description">
          I'm Milind Ranjan, a passionate Software Developer with a deep interest in crafting innovative solutions that solve real-world problems. My journey in tech began with a fascination for coding and a drive to continuously learn and evolve in this ever-changing field. With experience in various programming languages and frameworks, I specialize in Android development and Deep Learning. My background includes developing user-friendly web and mobile applications and working on deep learning projects, showcasing my versatility and commitment to technology.
        </p>
        <p class="description">
          When I'm not coding, you'll find me indulging in my hobbies such as singing, exploring space and science, or participating in events that foster creativity and innovation. I'm excited to leverage my skills to build meaningful projects and contribute to impactful solutions.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about-me {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-container {
  display: flex;
  gap: 4rem;
  align-items: flex-start;
}

.illustration-container {
  flex: 1;
  height: 150%;
  max-width: 400px;
  margin-top: 2rem;
}

.developer-illustration {
  width: 100%;
  height: 100%;
  margin-top: -90px;
  margin-right: auto;

}

.content-container {
  flex: 1.5;
  text-align: left;
  font-family: 'Sora', sans-serif;
  font-size: 1.5rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #000;
}

.emphasis {
  font-weight: 900;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1.5rem;
}

/* Responsive design */
@media (max-width: 968px) {
  .about-container {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .illustration-container {
    max-width: 300px;
  }

  .content-container {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .about-me {
    padding: 2rem 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }
}
</style>