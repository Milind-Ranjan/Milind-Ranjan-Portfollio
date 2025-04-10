<template>
  <header class="header" id="home">
    <div class="header-container">
      <div class="header-content">
        <h1><span class="light-text">Hello I'm</span> Milind Ranjan.</h1>
        <h2 class="profession">Computer Science Student</h2>
        <h2 class="location"><span class="light-text">Based in</span> India</h2>
        <p class="bio">
          I'm a dedicated Computer Science student with a passion for solving complex problems through clean, 
          efficient code. My focus areas include web development, algorithms, and software engineering.
          I'm constantly learning and expanding my skillset to stay at the forefront of technology.
        </p>
        <div class="social-buttons">
          <a href="https://github.com/Milind-Ranjan" target="_blank" class="social-btn">
            <img src="/images/github-svgrepo-com.svg" alt="GitHub" class="btn-icon" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/milind-ranjan-86bba024b/" target="_blank" class="social-btn linkedin-btn">
            <img src="/images/linkedin.png" alt="LinkedIn" class="btn-icon" />
            LinkedIn
          </a>
        </div>
      </div>
      <div class="header-image">
        <img src="/images/heroMale.png" alt="Milind Ranjan" />
      </div>
    </div>
  </header>
</template>
  
<script>
export default {
  name: 'HeaderSection'
}
</script>

<style scoped>
.header {
  padding: 6rem 2rem 8rem;
  background-color: #fffaff;
  color: #000;
  overflow: hidden;
  font-family: 'Sora', sans-serif;
  position: relative;
  margin-top: 0;
  margin-bottom: auto;
}

.header-container {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  min-height: 500px;
}

.header-content {
  width: 60%;
  text-align: left;
  z-index: 10;
  position: relative;
  padding-top: 2rem;
}

.header-image {
  width: 60%;
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
}

.header-image img {
  max-width: 200%;
  height: 160%;
  transform: translateX(-80px);
}

/* Header Text Styles */
.header h1 {
  font-family: 'Sora', sans-serif;
  font-size: 3.6rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: #000;
  line-height: 1.2;
}

.light-text {
  font-weight: 300;
}

.header h3 {
  font-family: 'Sora', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0.5rem 0;
  color: #000;
}

.profession {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem !important;
}

.location {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem !important;
}

.bio {
  font-family: 'Sora', sans-serif;
  margin: 2rem 0;
  line-height: 1.7;
  color: #666;
  max-width: 90%;
  font-weight: 400;
  font-size: 1.1rem;
}

.social-buttons {
  display: flex;
  gap: 1.5rem;
  position: absolute;
  bottom: -5rem;
  z-index: 20;
}

.social-btn {
  font-family: 'Sora', sans-serif;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #000;
}

.social-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.social-btn {
  background-color: #fff;
  color: #000;
}

.linkedin-btn {
  background-color: #000;
  color: #fff;
}

.btn-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

/* Responsive design */
@media (max-width: 768px) {
  .header {
    padding: 5rem 2rem 8rem;
    margin-top: 0;
  }
  
  .header-container {
    flex-direction: column;
    min-height: auto;
  }
  
  .header-content {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    padding-top: 0;
  }
  
  .header h1 {
    font-size: 3rem;
    margin: 0 0 1.5rem 0;
  }
  
  .profession, .location {
    font-size: 2.5rem;
    margin-bottom: 1.5rem !important;
  }
  
  .header-image {
    position: relative;
    width: 100%;
    margin-top: 2rem;
    transform: none;
    right: auto;
  }
  
  .header-image img {
    max-width: 100%;
    height: auto;
    transform: none;
  }
  
  .bio {
    max-width: 100%;
    font-size: 1rem;
  }
  
  .social-buttons {
    position: static;
    justify-content: center;
    margin-top: 3rem;
  }
}
</style>