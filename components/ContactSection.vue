<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <!-- Section Title -->
      <h1 class="section-title">
        <span class="title-text">Contact Me</span>
        <span class="title-line"></span>
      </h1>

      <!-- Contact Content -->
      <div class="contact-content">
        <!-- Left Side: Contact Form -->
        <div class="contact-form">
          <h2>Get in Touch</h2>
          <form @submit.prevent="handleSubmit" class="p-4 space-y-4">
            <div class="relative">
              <i class="fas fa-user icon-input"></i>
              <input
                v-model="formData.name"
                type="text"
                placeholder="Your Name"
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                required
              />
            </div>
            <div class="relative">
              <i class="fas fa-envelope icon-input"></i>
              <input
                v-model="formData.email"
                type="email"
                placeholder="Your Email"
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                required
              />
            </div>
            <div class="relative">
              <i class="fas fa-comment icon-input"></i>
              <textarea
                v-model="formData.message"
                placeholder="Your Message"
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-black focus:border-transparent outline-none transition-all duration-200 
                       min-h-[120px] resize-none"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 
                     transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <i class="fas fa-paper-plane"></i>
              <span>Send Message</span>
            </button>
          </form>
        </div>

        <!-- Right Side: Big Text and Buttons -->
        <div class="contact-details">
          <!-- Big Heading -->
          <div class="big-heading">
            Let's Talk for<br />Something Special
          </div>

          <!-- Social Media Buttons -->
          <div class="social-buttons">
            <a 
              href="https://github.com/Milind-Ranjan" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-button github"
            >
              <i class="fab fa-github social-icon"></i>
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/milind-ranjan-0a1621156/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-button linkedin"
            >
              <i class="fab fa-linkedin social-icon"></i>
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://drive.google.com/file/d/1iRPoPUhXHxF0rCFNaByDbBGt1D4aQdU-/view?usp=share_link" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-button resume"
            >
              <i class="fas fa-file social-icon"></i>
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import emailjs from 'emailjs-com';

// Initialize EmailJS with user ID
onMounted(() => {
  emailjs.init("FrrVOmajsxXNPXg3a");
});

const formData = reactive({
  name: '',
  email: '',
  message: '',
});

const handleSubmit = async () => {
  try {
    const serviceID = "service_78o140j";
    const templateID = "template_47lr3ue";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    await emailjs.send(serviceID, templateID, templateParams);
    alert("Message sent successfully!");
    // Reset form
    formData.name = '';
    formData.email = '';
    formData.message = '';
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to send message. Please try again.");
  }
};
</script>

<style scoped>
.contact-section {
  padding: 120px 24px;
  background-color: #ffffff;
  overflow: hidden;
  font-family: 'Sora', sans-serif;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Section Title */
.section-title {
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  font-family: 'Sora', sans-serif;

}

.title-text {
  font-size: 3rem;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 4px;
  display: inline-block;
  font-family: 'Sora', sans-serif;

}

.title-line {
  display: block;
  width: 100px;
  height: 4px;
  background-color: #000000;
  margin: 16px auto 0;
  animation: lineGrow 1.5s ease-in-out infinite alternate;
}

@keyframes lineGrow {
  0% { transform: scaleX(0.5); }
  100% { transform: scaleX(1); }
}

/* Contact Content Layout */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

/* Contact Form */
.contact-form {
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 16px;
  font-family: 'Sora', sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 24px;
  font-family: 'Sora', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.icon-input {
  position: absolute;
  left: 12px;
  top: 12px;
  color: #888;
  font-size: 16px;
}

.form-group {
  margin-bottom: 20px;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333333;
  transition: border-color 0.3s ease;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: #000000;
  outline: none;
}

.form-group textarea {
  resize: vertical;
}
button[type="submit"] {
  background-color: #000000;
  color: #ffffff;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #333333;
}

/* Contact Details */
.contact-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
}

/* Big Heading */
.big-heading {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: #000000;
  position: relative;
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Social Media Buttons */
.social-buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15px;
  margin-top: 20px;
}

.social-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 1px solid #000000;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  min-width: 130px;
  background-color: #ffffff;
  color: #000000;
}

.social-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.social-icon {
  font-size: 16px;
  color: #000000;
}

.social-button.linkedin {
  background-color: #ffffff;
  color: #000000;
}

.social-button.linkedin .social-icon {
  color: #000000;
}

.social-button.github {
  background-color: #ffffff;
  color: #000000;
  border-color: #000000;
}

.social-button.resume {
  background-color: #ffffff;
  color: #000000;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .big-heading {
    font-size: 2.5rem;
    text-align: center;
    margin-top: 40px;
  }

  .section-title .title-text {
    font-size: 2rem;
  }

  .title-line {
    width: 80px;
  }
  
  .social-buttons {
    flex-wrap: wrap;
  }
}
</style>