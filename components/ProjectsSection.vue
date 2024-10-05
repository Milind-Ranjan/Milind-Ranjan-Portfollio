<template>
  <section id="projects" class="projects">
    <h2>Projects</h2>
    <div class="project-cards">
      <div class="project-card" v-for="(project, index) in projects" :key="index">
        <!-- Replace the image with an SVG icon -->
        <div class="project-icon">
          <img :src="project.icon" alt="Project Icon" />
        </div>
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <div class="tech-stack">
          <h4>Tech Stack:</h4>
          <ul>
            <li v-for="(tech, i) in project.techStack" :key="i">{{ tech }}</li>
          </ul>
        </div>
        <div class="project-links">
          <a :href="project.githubLink" class="btn" target="_blank" rel="noopener noreferrer">GitHub Link</a>
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
          description: 'Tic Tac Toe game with offline and online modes. Connect online using unique game IDs.', 
          icon: '/icons/tictactoe.jpeg', // Replace with your project SVG icon path
          techStack: ['Kotlin', 'Android Studio', 'Firebase'], 
          githubLink: 'https://github.com/Milind-Ranjan/TicTacToe.git' // Add your GitHub link
        },
        { 
          name: 'Bitcoin Predictor', 
          description: 'BitPredictor is a machine learning project that uses TensorFlow and LSTM to predict Bitcoin prices from historical data.', 
          icon: '/icons/bitcoin.webp', // Replace with your project SVG icon path
          techStack: ['Python','Tensorflow','Matplotlib','Deep Learning'],
          githubLink: 'https://github.com/Milind-Ranjan/BitPredictor.git' // Add your GitHub link
        },
        { 
          name: 'Automated Guitar Tuner', 
          description: 'An Arduino-based project that uses a stepper motor and FFT analysis to automatically tune a guitar.', 
          icon: '/icons/guitar.svg', // Replace with your project SVG icon path
          techStack: ['Arduino','C++','Micro controller', 'Stepper Motor'],
          githubLink: 'https://github.com/Milind-Ranjan/Automated-Guitar-Tuner.git' // Add your GitHub link
        },
        { 
          name: 'MusicApp UI', 
          description: 'MusicApp-UI is a Designed as a UI-only Android app featuring a clean, intuitive interface built with Jetpack Compose. ', 
          icon: '/icons/music.svg', // Replace with your project SVG icon path
          techStack: ['Kotlin','Android Studio','Jetpack Compose','UI'],
          githubLink: 'https://github.com/Milind-Ranjan/MusicApp-UI.git' // Add your GitHub link
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  padding: 0 1rem; /* Add equal padding on left and right */
  max-width: 1200px; /* Limit the max width to prevent it from being too wide */
  margin: 0 auto; /* Center align the section */
}

.projects h2 {
  position: relative;
  text-align: left;
  margin-top: 5rem;
  font-size: 2.3rem;
  margin-bottom: 5rem; /* Space between heading and content */
}

.project-cards {
  display: flex; /* Use flexbox for layout */
  flex-wrap: wrap; /* Allow cards to wrap to the next line */
  justify-content: space-between; /* Space between cards */
  padding: 1rem 0; /* Optional padding for aesthetics */
}

.project-card {
  flex: 0 0 calc(50% - 1rem); /* Two cards in a row with some margin */
  background-color: #f9f9f9;
  border: 2px solid black;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Ensure the card takes the full available height */
  margin-bottom: 2rem; /* Space below each card */
}

.project-card img {
  max-width: 50%; /* Ensure the image fits within the card */
  height: auto; /* Maintain aspect ratio */
  border: 2px solid black;
  border-radius: 80px;
  margin: 0 auto 1rem; /* Center the image and add space below */
}

.project-card h3 {
  color: #515151;
  align-self: center;
  font-size: 1.5rem;
  margin: 0.5rem 0; /* Space above and below the heading */
}

.project-card p {
  margin: 0.5rem 0; /* Space above and below the description */
  line-height: 1.5; /* Improve readability of the text */
  text-align: left;
  flex-grow: 1; /* Allow description to take up available space */
}

.project-links {
  margin-top: 0.25rem; /* Add space above the button */
  display: flex;
  justify-content: center;
}

.btn {
  text-align: center;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #050401; /* Button background color */
  color: white;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 0.5rem; /* Space between buttons */
  text-decoration: none;
}

.btn:hover {
  background-color: #515151; /* Darker color on hover */
}

.tech-stack {
  margin-top: 0.5rem;
  text-align: left;
}

.tech-stack ul {
  list-style: none;
  padding: 0;
  text-align: left;
  display: flex; 
  flex-wrap: wrap; /* Allow the items to wrap on smaller screens */
  gap: 0.5rem; /* Space between tech stack items */
}

.tech-stack li {
  margin: 0; /* Remove vertical margins */
  text-align: left;
  padding: 0.2rem 0.5rem; /* Add padding around items */
  background-color: #e3dfdf; /* Background color for tech stack items */
  border-radius: 5px; /* Rounded corners for each tech item */
}

/* Media queries for mobile devices */
@media (max-width: 768px) {
  .project-card {
    flex: 0 0 100%; /* Make cards full width on mobile */
    margin-bottom: 1.5rem; /* Space between stacked cards */
  }
  
  .tech-stack ul {
    justify-content: center; /* Center align the items */
  }

  .tech-stack li {
    margin-top: 0.5rem; /* Adjust margin for better spacing on smaller screens */
    padding: 0.3rem 0.6rem; /* Increase padding for readability */
  }
}
</style>