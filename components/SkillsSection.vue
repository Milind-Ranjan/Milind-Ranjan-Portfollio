<template>
    <section id="skills" class="skills">
      <h1>Technical Skills</h1>
      <div class="skills-cards">
  <div class="skills-cards">
  <!-- Programming Languages Card -->
<div class="skills-card">
  <h3>Programming Languages</h3>
  <div class="skill-group">
    <div class="skill-item">
  <span class="skill-icon">
    <img src="/public/icons/cpp.svg" alt="C++ Icon" class="cpp-icon">
  </span>
  <div class="skill-details">
    <p class="skill-name">C++</p>
  </div>
</div>

    <div class="skill-item">
      <span class="skill-icon"><i class="fab fa-python"></i></span>
      <div class="skill-details">
        <p class="skill-name">Python</p>
      </div>
    </div>

    <div class="skill-item">
      <span class="skill-icon"><i class="fab fa-java"></i></span>
      <div class="skill-details">
        <p class="skill-name">Java</p>
      </div>
    </div>

    <div class="skill-item">
  <span class="skill-icon">
    <img src="/public/icons/kotlin.svg" alt="kotlin Icon" class="kotlin-icon">
  </span>
  <div class="skill-details">
    <p class="skill-name">Kotlin</p>
  </div>
</div>

    <div class="skill-item">
      <span class="skill-icon"><i class="fab fa-html5"></i></span>
      <div class="skill-details">
        <p class="skill-name">HTML</p>
      </div>
    </div>

    <div class="skill-item">
      <span class="skill-icon"><i class="fab fa-css3-alt"></i></span>
      <div class="skill-details">
        <p class="skill-name">CSS</p>
      </div>
    </div>

    <div class="skill-item">
      <span class="skill-icon"><i class="fab fa-js"></i></span>
      <div class="skill-details">
        <p class="skill-name">JavaScript</p>
      </div>
    </div>

    <div class="skill-item">
      <span class="skill-icon"><i class="fab fa-git-alt"></i></span>
      <div class="skill-details">
        <p class="skill-name">Git</p>
      </div>
    </div>
  </div>
</div>


  <!-- Tools Framework Card -->
  <div class="skills-card">
    <h3>Tools and frameworks</h3>
    <div class="skill-group">
      <div class="skill-item">
  <span class="skill-icon">
    <img src="/public/icons/numpy.svg" alt="numpy Icon" class="cpp-icon">
  </span>
  <div class="skill-details">
    <p class="skill-name">NumPy</p>
  </div>
</div>

    <div class="skill-item">
      <span class="skill-icon"><i class="fas fa-chart-bar"></i></span>
      <div class="skill-details">
        <p class="skill-name">Matplotlib</p>
      </div>
    </div>

    <div class="skill-item">
      <span class="skill-icon"><i class="fas fa-chart-pie"></i></span>
      <div class="skill-details">
        <p class="skill-name">Seaborn</p>
      </div>
    </div>

    <div class="skill-item">
  <span class="skill-icon">
    <img src="/public/icons/keras.svg" alt="keras Icon" class="kotlin-icon">
  </span>
  <div class="skill-details">
    <p class="skill-name">Keras</p>
  </div>
</div>

    <div class="skill-item">
  <span class="skill-icon">
    <img src="/public/icons/tensorflow.svg" alt="tf Icon" class="tf-icon">
  </span>
  <div class="skill-details">
    <p class="skill-name">Tensorflow</p>
  </div>
</div>

<div class="skill-item">
  <span class="skill-icon">
    <img src="/public/icons/opencv.svg" alt="opencv Icon" class="kotlin-icon">
  </span>
  <div class="skill-details">
    <p class="skill-name">OpenCV</p>
  </div>
</div>
    </div>
  </div>

  <!-- Mobile Development Card -->
  <div class="skills-card">
    <h3>Cloud and others</h3>
    <div class="skill-group">
      <div class="skill-item">
        <span class="skill-icon"><i class="fab fa-android"></i></span>
        <div class="skill-details">
          <p class="skill-name">Android</p>
        </div>
      </div>

<div class="skill-item">
  <!-- Replace the font-awesome icon with the local SVG icon -->
  <span class="skill-icon">
    <img src="/public/icons/jetpack.svg" alt="C++ Icon" class="kotlin-icon">
  </span>
  <div class="skill-details">
    <p class="skill-name">Jetpack Compose</p>
  </div>
</div>

<div class="skill-item">
  <span class="skill-icon">
    <i class="fab fa-aws"></i>  <!-- AWS icon -->
  </span>
  <div class="skill-details">
    <p class="skill-name">AWS</p>
  </div>
</div>
<div class="skill-item">
  <span class="skill-icon">
    <img src="/public/icons/firebase.svg" alt="Firebase" class="kotlin-icon"> <!-- Replace with actual path -->
  </span>
  <div class="skill-details">
    <p class="skill-name">Firebase</p>
  </div>
</div>

<div class="skill-item">
  <span class="skill-icon">
    <img src="/public/icons/azure.svg" alt="Firebase" class="kotlin-icon"> <!-- Replace with actual path -->
  </span>
  <div class="skill-details">
    <p class="skill-name">Azure</p>
  </div>
</div>
    </div>
  </div>
</div>
      </div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    </section>
  </template>
  
  <script>
  export default {
    name: 'SkillsSection'
  }
  </script>
<style scooped>
.skills {
  padding: 0 1rem; /* Reduce padding on smaller screens */
}
.skills {
  padding: 0 1rem; /* Add equal padding on left and right */
  max-width: 1200px; /* Optional: limit the max width to prevent it from being too wide on larger screens */
  margin: 0 auto; /* Center align the section */
}
.skills h1 {
  position: relative;
  text-align: left;
  margin-top: 5rem;
  font-size: 2.3rem;
  margin-bottom: 5rem; /* Remove bottom margin to prevent space between heading and underscore */
}
.skills-card {
  width: 29%; /* Decrease the width to make cards smaller */
  border: 2px solid black; /* Black border */
  border-radius: 40px; /* Increase this value for more rounded corners */
  padding: 1rem; /* Padding inside the card */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
  text-align: center;
  justify-content: space-between; /* Spread cards evenly */
  gap: 1rem;
  width: 30%;
}
.skills-card h3{
  color: #050401; /* Dark color for the heading */
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
}
.skill-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.skill-item {
  display: flex;
  align-items: center;
  width: 48%;
  margin-bottom: 1.5rem;
}

.skill-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  display: inline-block;
  color: black; /* Ensures the container behaves like an icon */
}

.cpp-icon {
  width: 1.3rem; /* Match the font-size of the icon */
  height: auto; /* Maintain the aspect ratio of the SVG */
  vertical-align: left; /* Align the icon with the text */
  margin-right: 0.02rem; 
  color: black;/* Same as the original Font Awesome icon margin */
}
.kotlin-icon {
  width: 1.5rem; /* Match the font-size of the icon */
  height: auto; /* Maintain the aspect ratio of the SVG */
  vertical-align: left;/* Align the icon with the text */
  margin-right: 0.02rem;
  color: black;/* Same as the original Font Awesome icon margin */
   /* Same as the original Font Awesome icon margin */
}
.tf-icon {
  width: 1.5rem; /* Match the font-size of the icon */
  height: auto; /* Maintain the aspect ratio of the SVG */
  vertical-align: left;/* Align the icon with the text */
  margin-right: 0.005rem;
  color: black;/* Same as the original Font Awesome icon margin */
   /* Same as the original Font Awesome icon margin */
}

.skill-details {
  text-align: left;
}

.skill-name {
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
  color: #050401;
}

.expertise-level {
  font-size: 1rem;
  color: gray;
}
@media (max-width: 768px) {
  .skills-cards {
    flex-direction: column; /* Stack the cards vertically */
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }

  .skills-card {
    width: 75%; /* Full width for mobile view */
    margin-bottom: 5rem;
  }
}
</style>