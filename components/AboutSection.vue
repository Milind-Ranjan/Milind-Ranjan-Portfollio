<template>
  <section id="about" class="about-me">
    <h1>About Me<span class="underline"></span></h1>
    <div class="info-cards">
      <div class="card">
        <i class="fas fa-briefcase"></i>
        <h4>Interests</h4>
        <ul class="interests-list">
          <li>Deep Learning & AI</li>
          <li>Android Development</li>
          <li>Competitive Programming</li>
          <li>Space and Cosmos</li>
        </ul>
      </div>
      <div class="card">
        <i class="fas fa-graduation-cap"></i>
        <h4>Education</h4>
        <ul class="education-list">
          <li>BTech CSE - VIT</li>
          <li>Deep Learning - Udemy</li>
          <li>Android Development - Udemy</li>
        </ul>
      </div>
    </div>
    <p class="description">
      I’m Milind Ranjan, a passionate Software Developer with a deep interest in crafting innovative solutions that solve real-world problems. My journey in tech began with a fascination for coding and a drive to continuously learn and evolve in this ever-changing field. With experience in various programming languages and frameworks, I specialize in Android development and Deep Learning. My background includes developing user-friendly web and mobile applications and working on deep learning projects, showcasing my versatility and commitment to technology.
    </p>
    <p class="hobbies-description">
      When I’m not coding, you’ll find me indulging in my hobbies such as singing, exploring space and science, or participating in events that foster creativity and innovation. I’m excited to leverage my skills to build meaningful projects and contribute to impactful solutions.
    </p>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.card i {
  font-size: 1.5rem; /* Adjust icon size */
  color: #050401; /* Change icon color */
  margin-bottom: 0.25rem; /* Add space below the icon */
  transition: color 0.3s; /* Smooth color transition on hover */
}
.about-me {
  padding: 0 1rem; /* Add equal padding on left and right */
  max-width: 1200px; /* Optional: limit the max width to prevent it from being too wide on larger screens */
  margin: 0 auto; /* Center align the section */
}
.hobbies-description {
  margin-top: 2rem; /* Add spacing above the hobbies description */
  font-size: 1.1rem; /* Optional: keep it the same size as the previous description */
  line-height: 1.6; /* Maintain line height for readability */
}

.about-me h1 {
  position: relative;
  text-align: left;
  font-size: 2.3rem;
  margin-bottom: 5rem; /* Remove bottom margin to prevent space between heading and underscore */
}

.info-cards {
  display: flex;
  margin-top: 5rem; /* Add margin-top to increase space above the cards */
  margin-bottom: 4.5rem; /* Existing margin */
}

.card {
  width: 29%; /* Decrease the width to make cards smaller */
  border: 2px solid black; /* Black border */
  border-radius: 40px; /* Increase this value for more rounded corners */
  padding: 1rem; /* Padding inside the card */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
  text-align: center;
  margin: 0 1rem;
}

.card h4 {
  color: #333; /* Dark color for the heading */
  font-size: 1.5rem;
}

.interests-list, .education-list {
  list-style-type: disc; /* Use bullet points */
  padding-left: 20px; /* Indent list */
  text-align: left; /* Align text to the left */
  margin-top: 0.5rem;
}

.card p {
  margin: 0.2rem 0; /* Add some spacing for paragraphs */
  color: #515151;
}

/* Add space between info cards and description */
.description { /* Adds spacing between the info cards and the description */
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Responsive design for mobile */
@media (max-width: 768px) {
  .info-cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 75%; /* Increase width on mobile for better visibility */
    margin-bottom: 5rem;
  }

  .about-me {
    padding: 0 1rem; /* Reduce padding on smaller screens */
  }
}
</style>