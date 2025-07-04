// Import GSAP and plugins
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

// GSAP Animation Configuration
export const initializeAnimations = () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, TextPlugin, DrawSVGPlugin, ScrambleTextPlugin);

  // Hero section animations
  animateHeroElements();
  
  // Scroll-triggered animations
  animateScrollSections();
  
  // SVG drawing animation
  animateSVGLogo();
  
  // Initialize particles
  initializeParticles();
};

// Hero section element animations
const animateHeroElements = () => {
  gsap.to('.hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power2.out'
  });

  gsap.to('.cta-button', {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    delay: 0.6,
    ease: 'back.out(1.7)'
  });

  gsap.to('.hero-title', {
    duration: 2,
    scrambleText: "Seed. Build. Innovate.",
    ease: "power1.inOut",
    delay: 0.5,
    opacity: 1
  });
};

// Scroll-triggered section animations
const animateScrollSections = () => {
  gsap.from('.scroll-section h2', {
    scrollTrigger: {
      trigger: '.scroll-section h2',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out'
  });

  gsap.from('.scroll-section p', {
    scrollTrigger: {
      trigger: '.scroll-section p',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
  });
};

// SVG logo drawing animation
const animateSVGLogo = () => {
  const tl = gsap.timeline({
    repeat: -1,
    defaults: { duration: 3, ease: 'power1.inOut' }
  });

  tl.set('#svg-stage', { opacity: 1 })
    .from('path', { drawSVG: '0% 0%' })
    .to('path', { drawSVG: '100% 100%' });
};

// Particles.js initialization
const initializeParticles = () => {
  window.addEventListener('DOMContentLoaded', () => {
    particlesJS("particles-container", {
      particles: {
        number: { value: 60 },
        size: { value: 3 },
      },
      interactivity: {
        events: {
          onhover: { enable: false, mode: "repulse" }
        }
      }
    });
  });
};
