<template>
    <div class="particle-container" :style="containerStyle">
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const props = defineProps({
    height: {
      type: String,
      default: '100%'
    },
    width: {
      type: String,
      default: '100%'
    }
  })
  
  const canvas = ref(null)
  const containerStyle = {
    width: props.width,
    height: props.height
  }
  
  let ctx = null
  let particles = []
  let animationFrame = null
  let mouse = { x: null, y: null, radius: 150 }
  let containerRect = null
  
  class Particle {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.baseX = x
      this.baseY = y
      this.size = Math.random() * 3 + 1
      this.density = Math.random() * 30 + 1
      this.opacity = Math.random() * 0.5 + 0.2
      this.color = `rgba(${Math.random() * 50 + 150}, ${Math.random() * 50 + 150}, ${Math.random() * 50 + 150}, ${this.opacity})`
    }
  
    update() {
      if (mouse.x != null && mouse.y != null) {
        let dx = mouse.x - this.x
        let dy = mouse.y - this.y
        let distance = Math.sqrt(dx * dx + dy * dy)
        let forceDirectionX = dx / distance
        let forceDirectionY = dy / distance
        let maxDistance = mouse.radius
        let force = (maxDistance - distance) / maxDistance
        let directionX = forceDirectionX * force * this.density
        let directionY = forceDirectionY * force * this.density
  
        if (distance < mouse.radius) {
          this.x -= directionX
          this.y -= directionY
        } else {
          if (this.x !== this.baseX) {
            dx = this.x - this.baseX
            this.x -= dx/20
          }
          if (this.y !== this.baseY) {
            dy = this.y - this.baseY
            this.y -= dy/20
          }
        }
      }
    }
  
    draw() {
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }
  
  const init = () => {
    if (!canvas.value) return
    
    containerRect = canvas.value.getBoundingClientRect()
    canvas.value.width = containerRect.width
    canvas.value.height = containerRect.height
    ctx = canvas.value.getContext('2d')
  
    // Create particles in a grid pattern
    const gridSize = 30
    const numberOfColumns = Math.floor(containerRect.width / gridSize)
    const numberOfRows = Math.floor(containerRect.height / gridSize)
    particles = []
  
    for (let y = 0; y < numberOfRows; y++) {
      for (let x = 0; x < numberOfColumns; x++) {
        const xPos = x * gridSize + (Math.random() * 10 - 5)
        const yPos = y * gridSize + (Math.random() * 10 - 5)
        particles.push(new Particle(xPos, yPos))
      }
    }
  }
  
  const animate = () => {
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
    
    particles.forEach(particle => {
      particle.update()
      particle.draw()
    })
  
    // Draw connections
    particles.forEach((particle, index) => {
      for (let j = index + 1; j < particles.length; j++) {
        const otherParticle = particles[j]
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
  
        if (distance < 80) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(200, 200, 200, ${0.15 * (1 - distance/80)})`
          ctx.lineWidth = 0.5
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.stroke()
        }
      }
    })
  
    animationFrame = requestAnimationFrame(animate)
  }
  
  const handleMouseMove = (event) => {
    const rect = canvas.value.getBoundingClientRect()
    mouse.x = event.clientX - rect.left
    mouse.y = event.clientY - rect.top
  }
  
  const handleMouseLeave = () => {
    mouse.x = null
    mouse.y = null
  }
  
  onMounted(() => {
    init()
    animate()
    window.addEventListener('resize', init)
    canvas.value.addEventListener('mousemove', handleMouseMove)
    canvas.value.addEventListener('mouseleave', handleMouseLeave)
  })
  
  onUnmounted(() => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
    }
    window.removeEventListener('resize', init)
    if (canvas.value) {
      canvas.value.removeEventListener('mousemove', handleMouseMove)
      canvas.value.removeEventListener('mouseleave', handleMouseLeave)
    }
  })
  </script>
  
  <style scoped>
  .particle-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #fffaff;
    overflow: hidden;
  }
  
  canvas {
    display: block;
  }
  
  :deep(.dark-mode) .particle-container {
    background: #121212;
  }
  </style>