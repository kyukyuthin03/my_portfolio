import React, { useEffect, useRef } from 'react'

// Full-page interactive particle network: nodes drift, link to neighbours,
// and are pulled toward / linked to the cursor. A soft glow follows the pointer.
const Background = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: -9999, y: -9999, active: false }
    let width = 0
    let height = 0
    let dpr = 1
    let particles = []
    let raf = 0
    let colors = { primary: '#5b5bf0', secondary: '#a855f7' }

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement)
      colors = {
        primary: cs.getPropertyValue('--primary').trim() || colors.primary,
        secondary: cs.getPropertyValue('--secondary').trim() || colors.secondary,
      }
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(110, Math.max(28, (width * height) / 16000)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.8,
        c: Math.random() < 0.5 ? 'primary' : 'secondary',
      }))
    }

    const LINK = 130
    const REACH = 170

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      if (pointer.active) {
        const g = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 260)
        g.addColorStop(0, colors.primary + '26')
        g.addColorStop(1, 'transparent')
        ctx.fillStyle = g
        ctx.fillRect(pointer.x - 260, pointer.y - 260, 520, 520)
      }

      for (const p of particles) {
        if (!reduced) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1

          if (pointer.active) {
            const dx = pointer.x - p.x
            const dy = pointer.y - p.y
            const d = Math.hypot(dx, dy)
            if (d < REACH && d > 1) {
              // gentle attraction, repulsion when very close
              const f = d < 50 ? -0.05 : 0.012
              p.x += (dx / d) * f * (REACH - d) * 0.1
              p.y += (dy / d) * f * (REACH - d) * 0.1
            }
          }
        }
      }

      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK) {
            ctx.globalAlpha = (1 - d / LINK) * 0.22
            ctx.strokeStyle = colors.primary
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        if (pointer.active) {
          const d = Math.hypot(a.x - pointer.x, a.y - pointer.y)
          if (d < REACH) {
            ctx.globalAlpha = (1 - d / REACH) * 0.55
            ctx.strokeStyle = colors.secondary
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(pointer.x, pointer.y)
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        ctx.globalAlpha = 0.65
        ctx.fillStyle = colors[p.c]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const loop = () => {
      draw()
      raf = requestAnimationFrame(loop)
    }

    const onMove = e => {
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointer.active = true
    }
    const onLeave = () => { pointer.active = false }
    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden && !reduced) raf = requestAnimationFrame(loop)
    }

    readColors()
    resize()
    if (reduced) draw()
    else raf = requestAnimationFrame(loop)

    const themeObserver = new MutationObserver(() => { readColors(); if (reduced) draw() })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      themeObserver.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 h-full w-full" aria-hidden />
}

export default Background
