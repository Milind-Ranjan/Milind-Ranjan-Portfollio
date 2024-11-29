<template>
  <div class="particle-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let ctx = null
let particles = []
let animationFrame = null

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = Math.random() * 2 + 1
    this.speedX = Math.random() * 0.5 - 0.25
    this.speedY = Math.random() * 0.5 - 0.25
    this.opacity = Math.random() * 0.5 + 0.2
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x < 0 || this.x > window.innerWidth) this.speedX *= -1
    if (this.y < 0 || this.y > window.innerHeight) this.speedY *= -1
  }

  draw() {
    ctx.fillStyle = `rgba(200, 200, 200, ${this.opacity})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

const init = () => {
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  ctx = canvas.value.getContext('2d')

  // Create particles
  const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 15000)
  particles = []

  for (let i = 0; i < numberOfParticles; i++) {
    const x = Math.random() * window.innerWidth
    const y = Math.random() * window.innerHeight
    particles.push(new Particle(x, y))
  }
}

const animate = () => {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  
  particles.forEach(particle => {
    particle.update()
    particle.draw()
  })

  // Draw connections
  particles.forEach(particle => {
    particles.forEach(otherParticle => {
      const dx = particle.x - otherParticle.x
      const dy = particle.y - otherParticle.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 100) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(200, 200, 200, ${0.1 * (1 - distance/100)})`
        ctx.lineWidth = 1
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(otherParticle.x, otherParticle.y)
        ctx.stroke()
      }
    })
  })

  animationFrame = requestAnimationFrame(animate)
}

const handleResize = () => {
  init()
}

onMounted(() => {
  init()
  animate()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.particle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #fffaff;
}

canvas {
  display: block;
}

/* Dark mode support */
:deep(.dark-mode) .particle-container {
  background: #121212;
}
</style> 