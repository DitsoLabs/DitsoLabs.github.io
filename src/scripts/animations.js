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
  
  // Animate services cards
  animateServices();
  
  // Animate projects
  animateProjects();
  
  // Animate team members
  animateTeam();
  
  // Animate contact form
  animateContact();
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
  if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-container", {
      particles: {
        number: { value: 60 },
        size: { value: 3 },
        color: { value: "#0F62FE" },
        line_linked: { color: "#0F62FE" }
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: { enable: false },
          onclick: { enable: false },
          resize: true
        }
      },
      retina_detect: true,
      fps_limit: 60
    });
    
    // Asegurarse que el canvas de partículas no bloquee eventos del mouse
    const canvas = document.querySelector('#particles-container canvas');
    if (canvas) {
      canvas.style.pointerEvents = 'none';
    }
  }
};

// Animate services cards
const animateServices = () => {
  gsap.from('#services .grid > div', {
    scrollTrigger: {
      trigger: '#services',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power2.out'
  });
};

// Animate projects
const animateProjects = () => {
  gsap.from('#projects .grid > div', {
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power2.out'
  });
};

// Animate team members
const animateTeam = () => {
  gsap.from('#team .grid > div', {
    scrollTrigger: {
      trigger: '#team',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power2.out'
  });
};

// Animate contact form
const animateContact = () => {
  gsap.from('#contact .grid > div:first-child', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    x: -50,
    duration: 0.8,
    ease: 'power2.out'
  });
  
  gsap.from('#contact .grid > div:last-child', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    x: 50,
    duration: 0.8,
    ease: 'power2.out'
  });
};
