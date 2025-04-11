<template>
  <section id="experience" class="experience-section">
    <div class="side-margin left"></div>
    <div class="container">
      <h1>My <span class="emphasis">Experience</span></h1>
      
      <div class="timeline">
        <div class="company-header">
          <div class="company-logo">
            <img src="/images/psypherai.jpeg" alt="Company Logo" />
          </div>
          <h2 class="company-name">PsypherAI</h2>
        </div>
        
        <div class="timeline-item">
          <div class="role-indicator">
            <div class="role-dot"></div>
            <div class="role-line"></div>
          </div>
          <div class="timeline-content">
            <div class="job-header">
              <h3>Junior Developer</h3>
              <span class="date">Mar 2025 - Present</span>
            </div>
            <p class="job-description">
              Currently working as a Junior Developer, where I contribute to the development of innovative solutions and implement new features.
              Collaborating with a dynamic team, I've enhanced my technical skills and gained valuable industry experience.
              Responsible for developing and maintaining application features, debugging, and ensuring high-quality code standards.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="role-indicator">
            <div class="role-dot"></div>
          </div>
          <div class="timeline-content">
            <div class="job-header">
              <h3>Software Engineering Intern</h3>
              <span class="date">Nov 2024 - Jan 2025</span>
            </div>
            <p class="job-description">
              Worked as a Software Engineering Intern, where I assisted in the development process and gained hands-on experience with industry-standard tools and practices.
              Participated in code reviews, bug fixes, and implementation of small features under the guidance of senior team members.
              Developed a strong foundation in professional software development workflows and collaborative coding practices.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="side-margin right"></div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection'
}
</script>

<style scoped>
.experience-section {
  display: flex;
  width: 100vw;
  margin-top: 1rem;
  font-family: 'Sora', sans-serif;
  background-color: #050401;
  color: #fff;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.side-margin {
  background-color: #050401;
  width: 10%;
  min-width: 50px;
  flex-shrink: 0;
}

.container {
  padding: 3rem 1rem;
  width: 80%;
  max-width: 1200px;
  flex-grow: 1;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: #fff;
}

.emphasis {
  font-weight: 900;
}

.company-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.company-logo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  position: relative;
  z-index: 1;
  margin-right: 1.5rem;
}

.company-logo img {
  width: 45px;
  height: 45px;
}

.company-name {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  margin-bottom: 2rem;
  position: relative;
  padding-left: 30px;
}

.role-indicator {
  position: relative;
  margin-right: 1.5rem;
  width: 20px;
}

.role-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  position: relative;
  z-index: 2;
}

.role-line {
  position: absolute;
  top: 14px;
  left: 7px;
  width: 2px;
  bottom: -40px;
  background: #fff;
  transform: translateX(-50%);
}

.timeline-content {
  background: #111;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 1.2rem;
  flex: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.job-header h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
  color: #fff;
}

.date {
  font-size: 0.9rem;
  color: #aaa;
  font-weight: 500;
}

.job-description {
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

@media (max-width: 768px) {
  .side-margin {
    width: 5%;
    min-width: 20px;
  }

  .container {
    width: 90%;
    padding: 2.5rem 1rem;
  }
  
  .company-logo {
    width: 55px;
    height: 55px;
  }
  
  .company-logo img {
    width: 32px;
    height: 32px;
  }
  
  .company-name {
    font-size: 1.6rem;
  }
  
  .job-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .date {
    margin-top: 0.3rem;
  }
}

@media (max-width: 480px) {
  .side-margin {
    width: 2%;
    min-width: 10px;
  }

  .container {
    width: 96%;
    padding: 2rem 1rem;
  }
  
  .company-header {
    flex-direction: column;
    text-align: center;
  }
  
  .company-logo {
    margin: 0 auto 0.8rem;
  }
  
  .timeline-item {
    flex-direction: column;
    padding-left: 0;
  }
  
  .role-indicator {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 0.8rem;
    margin-right: 0;
  }
  
  .role-line {
    display: none;
  }
  
  .timeline-content {
    width: 100%;
    padding: 1rem;
  }
}
</style> 