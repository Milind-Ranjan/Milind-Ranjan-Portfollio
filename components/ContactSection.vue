<template>
  <section id="contact" class="contact">
    <h1>Contact me _______________</h1>
    <div class="contact-links">
      <a href="mailto:milindranjan1511@gmail.com" class="btn1">
        <i class="fas fa-envelope"></i> Email
      </a>
      <a href="https://drive.google.com/file/d/1iRPoPUhXHxF0rCFNaByDbBGt1D4aQdU-/view?usp=share_link" class="btn1">
        <i class="fas fa-file"></i> Resume
      </a>
    </div>
  </section>
</template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
  <script>
  export default {
    name: 'ContactSection'
  }
  </script>

<style scoped>


.contact {
  padding: 0 1rem; /* Add equal padding on left and right */
  max-width: 1200px; /* Optional: limit the max width to prevent it from being too wide on larger screens */
  margin: 0 auto; /* Center align the section */
  margin-top: 5rem;
}

.contact h1 {
  position: relative;
  text-align: left;
  font-size: 2.3rem;
  margin-bottom: 5rem; /* Remove bottom margin to prevent space between heading and underscore */
}
.contact-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
.btn1 {
  background-color: #fffaff; /* Button background color */
  color: #040404b3; /* Button text color */
  border: 2px solid rgb(0, 0, 0); /* Black border outline */
  border-radius: 50px; /* Makes the button round */
  padding: 22px 55px; /* Adjust padding for a rounder look */
  margin: 5px; /* Space between buttons */
  cursor: pointer;
  display: inline-block;
  transition: background-color 0.3s, border-color 0.3s; /* Smooth transitions */
  margin-bottom: 5rem;
  font-size: 1.1rem;
}
.btn1 .button-link {
  color: #050401; /* Link color */
  text-decoration: none; /* Remove underline */
  display: flex;
  align-items: center; /* Align icon and text vertically */
}
.btn1 i {
  font-size: 1.5rem; /* Adjust icon size */
  margin-right: 0.5rem;
  color: #050401;
}
.btn1:hover {
  background-color: #b1b1b1; /* Darker color on hover */
}

</style>