<template>
  <section id="experience" class="experience-section">
    <div class="container">
      <h1>My <span class="emphasis">Experience</span></h1>
      
      <div class="timeline">
        <div class="timeline-item">
          <div class="company-logo">
            <img src="/images/psypherai.jpeg" alt="Company Logo" />
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
          <div class="company-logo">
            <img src="/images/psypherai.jpeg" alt="Company Logo" />
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
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection'
}
</script>

<style scoped>
.experience-section {
  padding: 5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 3rem;
  font-family: 'Sora', sans-serif;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
}

.emphasis {
  font-weight: 900;
}

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #000;
  left: 110px;
  margin-left: -1px;
}

.timeline-item {
  display: flex;
  margin-bottom: 3rem;
  position: relative;
}

.company-logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  position: relative;
  z-index: 1;
  margin-right: 3.5rem;
}

.company-logo img {
  width: 50px;
  height: 50px;
}

.timeline-content {
  background: #fff;
  border: 2px solid #000;
  border-radius: 10px;
  padding: 1.5rem;
  flex: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.job-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.date {
  font-size: 1rem;
  color: #666;
  font-weight: 500;
}

.job-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 50px;
  }
  
  .company-logo {
    width: 60px;
    height: 60px;
    margin-right: 2.5rem;
  }
  
  .company-logo img {
    width: 35px;
    height: 35px;
  }
  
  .job-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .date {
    margin-top: 0.5rem;
  }
}

@media (max-width: 480px) {
  .timeline-item {
    flex-direction: column;
  }
  
  .timeline::before {
    display: none;
  }
  
  .company-logo {
    margin: 0 auto 1.5rem;
  }
  
  .timeline-content {
    width: 100%;
  }
}
</style> 