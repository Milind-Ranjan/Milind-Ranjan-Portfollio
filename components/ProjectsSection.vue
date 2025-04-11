<template>
  <section id="projects" class="projects">
    <h2 class="section-title">My Projects</h2>
    <div class="projects-container">
      <!-- Project 1 -->
      <div class="project-row" v-for="(project, index) in projects" :key="index">
        <div class="project-number">{{ String(index + 1).padStart(2, '0') }}</div>
        <div class="project-content">
          <h3 class="project-title">{{ project.name }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-link">
            <a :href="project.githubLink" target="_blank" rel="noopener noreferrer">
              <!-- GitHub icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div class="project-image">
          <img :src="project.image || project.icon" :alt="project.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
        { 
          name: 'TIC TAC TOE', 
          description: 'Tic Tac Toe game with offline and online modes using game IDs. It includes Firebase for real-time chat and game state management.', 
          icon: '/icons/tictactoe.jpeg',
          image: '/projects/tictactoe.png', 
          techStack: ['Kotlin', 'Android Studio', 'Firebase'], 
          githubLink: 'https://github.com/Milind-Ranjan/TicTacToe.git'
        },
        { 
          name: 'Bitcoin Predictor', 
          description: 'BitPredictor is a machine learning project that uses TensorFlow and LSTM to predict Bitcoin prices from historical data.', 
          icon: '/icons/bitcoin.webp',
          image: '/projects/bitcoin.png',
          techStack: ['Python','Tensorflow','Matplotlib','Deep Learning'],
          githubLink: 'https://github.com/Milind-Ranjan/BitPredictor.git'
        },
        { 
          name: 'Automated Guitar Tuner', 
          description: 'An Arduino-based project that uses a stepper motor and FFT analysis to capture string frequencies and automatically tune a guitar.', 
          icon: '/icons/guitar.svg',
          image: '/projects/guitar.webp',
          techStack: ['Arduino','C++','Micro controller', 'Stepper Motor'],
          githubLink: 'https://github.com/Milind-Ranjan/Automated-Guitar-Tuner.git'
        },
        { 
          name: 'MusicApp UI', 
          description: 'MusicApp-UI is a Designed as a UI-only Android app featuring a clean, intuitive interface built with Jetpack Compose.', 
          icon: '/icons/music.svg',
          image: '/projects/musicui.jpg',
          techStack: ['Kotlin','Android Studio','Jetpack Compose','UI'],
          githubLink: 'https://github.com/Milind-Ranjan/MusicApp-UI.git'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Full width background solution */
:deep(body), :deep(html) {
  background-color: #000;
}

.projects {
  padding: 4rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #000;
  color: #fff;
  position: relative;
  font-family: 'Sora', sans-serif;
}

/* Create full-width background effect */
.projects::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  background-color: #000;
  z-index: -1;
}

.section-title {
  font-size: 3rem;
  color: #fff;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  letter-spacing: 1px;
}

.projects-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.project-row {
  display: grid;
  grid-template-columns: 0.2fr 1fr 1fr;
  gap: 2rem;
  align-items: center;
  position: relative;
}

/* Alternate layout for even projects */
.project-row:nth-child(even) {
  grid-template-columns: 0.2fr 1fr 1fr;
  direction: rtl;
}

.project-row:nth-child(even) .project-content,
.project-row:nth-child(even) .project-number {
  direction: ltr;
}

.project-number {
  font-size: 8rem;
  font-weight: 700;
  opacity: 0.8;
  line-height: 1;
  color: rgba(255, 255, 255, 0.15);
  margin-right: 1rem;
  text-align: left;
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 1rem;
  text-align: left;
}

.project-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;
  color: #fff;
  letter-spacing: 0.5px;
  position: relative;
  display: inline-block;
  text-align: left;
}

.project-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #ffffff;
}

.project-description {
  font-size: 1.1rem;
  color: #ccc;
  line-height: 1.8;
  margin: 0;
  max-width: 90%;
  font-weight: 300;
  text-align: left;
}

.project-link {
  margin-top: 0.5rem;
  text-align: left;
}

.project-link a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.3s ease;
  font-size: 1rem;
}

.project-link a:hover {
  opacity: 0.8;
}

.project-link svg {
  width: 22px;
  height: 22px;
}

.project-image {
  overflow: hidden;
  border-radius: 10px;
  height: 350px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-image img:hover {
  transform: scale(1.05);
}

/* Media queries for mobile devices */
@media (max-width: 992px) {
  .project-row,
  .project-row:nth-child(even) {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: 1.5rem;
  }

  .project-number {
    font-size: 5rem;
    text-align: left;
    margin-bottom: -1rem;
  }

  .project-content {
    padding: 0;
  }

  .project-description {
    max-width: 100%;
  }

  .project-image {
    height: 250px;
    order: -1;
  }

  .project-title {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 2.5rem;
  }

  .project-number {
    font-size: 4rem;
  }

  .project-title {
    font-size: 1.8rem;
  }

  .project-image {
    height: 200px;
  }
}
</style>