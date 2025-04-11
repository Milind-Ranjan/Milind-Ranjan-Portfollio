<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-text">
        <p>&copy; 2024 Milind Ranjan. All rights reserved.</p>
      </div>
      <div class="social-icons">
        <a href="https://github.com/Milind-Ranjan" target="_blank">
          <img src="/icons/github.png" alt="GitHub Icon" />
        </a>
        <a href="https://www.linkedin.com/in/milind-ranjan-86bba024b/" target="_blank">
          <img src="/images/linkedin.png" alt="LinkedIn Icon" />
        </a>
        <!-- Add more social links as needed -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
.footer {
  background-color: #050401;
  color: #fffaff;
  padding: 1rem;
  text-align: left; /* Align text to the left */
  position: relative;
  width: 100%;
  bottom: 0;
  margin-top: 3rem;
  font-family: 'Sora', sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between; /* Space between text and social icons */
  align-items: center; /* Center align vertically */
}

.footer-text {
  flex: 1; /* Allow text to take available space */
}

.footer p {
  margin: 0;
  font-size: 1rem;
}

.social-icons {
  display: flex; /* Align icons in a row */
  align-items: center; /* Center align vertically */
}

.social-icons a {
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
}

.social-icons img {
  width: 30px;
  height: 30px;
}

.social-icons a:hover img {
  filter: brightness(2.5); /* Brighten icons on hover */
}
</style>