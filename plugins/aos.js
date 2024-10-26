import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      delay: 200, // Delay in ms
      duration: 600, // Animation duration in ms
      once: false,  // Set to false to allow animations to trigger multiple times
    })
  }
})