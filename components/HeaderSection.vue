<template>
    <header class="header">
      <div class="header-content">
        <h3>Hello, I&#39;m</h3>
        <h1>Milind Ranjan</h1>
        <h2>A Computer Science Student</h2>
        <div class="buttons">
          <button class="btn1">
            <a href="https://github.com/Milind-Ranjan" target="_blank" class="button-link">
              <img src="/images/github-svgrepo-com.svg" alt="GitHub Icon" class="icon" /> GitHub
            </a>
          </button>
          <button class="btn">
            <a href="https://www.linkedin.com/in/milind-ranjan-86bba024b/" target="_blank" class="button-link">
              <img src="/images/linkedin.png" alt="LinkedIn Icon" class="icon" /> LinkedIn
            </a>
          </button>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderSection'
  }
  </script>
  <style scooped>


.header {
  padding: 4rem 2rem;
  color: #fff;
  text-align: center;
}

/* Header Text Styles */
.header h1 {
  font-size: 4.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
  color: #050401;
}

.header h2 {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #050401;
}
.header h3 {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #050401;
}
.btn1:hover {
  background-color: #b1b1b1; /* Darker color on hover */
}
.btn:hover {
  background-color: #515151; /* Darker color on hover */
}
</style>