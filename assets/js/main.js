// Modern SK AI Hub Interactive JavaScript

class SKAIHub {
  constructor() {
    this.init();
  }

  init() {
    this.setupLoadingScreen();
    this.setupNeuralNetwork();
    this.setupNavigation();
    this.setupScrollEffects();
    this.setupAnimations();
    this.setupContactForm();
    this.setupBackToTop();
    this.setupMobileMenu();
  }

  // Loading Screen
  setupLoadingScreen() {
    window.addEventListener('load', () => {
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) {
        setTimeout(() => {
          loadingScreen.style.transition = 'opacity 0.5s ease-out';
          loadingScreen.style.opacity = '0';
          setTimeout(() => {
            loadingScreen.style.display = 'none';
          }, 500);
        }, 1500);
      }
    });
  }

  // Neural Network Animation for Hero
  setupNeuralNetwork() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let nodes = [];
    let connections = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 3 + 1;
        this.pulse = Math.random() * Math.PI * 2;
        this.connections = [];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.02;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Update connections
        this.connections = nodes.filter(node => {
          const distance = Math.sqrt((this.x - node.x) ** 2 + (this.y - node.y) ** 2);
          return distance < 150 && node !== this;
        });
      }

      draw() {
        // Draw connections
        this.connections.forEach(node => {
          const distance = Math.sqrt((this.x - node.x) ** 2 + (this.y - node.y) ** 2);
          const opacity = Math.max(0, 1 - distance / 150);

          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(node.x, node.y);
          ctx.strokeStyle = 
gba(59, 130, 246, );
          ctx.lineWidth = 1;
          ctx.stroke();
        });

        // Draw node
        const pulseSize = this.size + Math.sin(this.pulse) * 0.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = 
gba(59, 130, 246, );
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize * 2, 0, Math.PI * 2);
        ctx.fillStyle = 
gba(59, 130, 246, );
        ctx.fill();
      }
    }

    const initNodes = () => {
      nodes = [];
      const nodeCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000));

      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initNodes();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initNodes();
    });
  }

  // Navigation Setup
  setupNavigation() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateNavbar);

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Scroll Effects
  setupScrollEffects() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .tool-card, .course-card, .testimonial-card, .about-section .bg-white').forEach(el => {
      observer.observe(el);
    });

    // Parallax effect for floating elements
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      document.querySelectorAll('.floating-element').forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        element.style.transform = `translateY(${rate * speed}px) rotate(${rate * speed * 0.1}deg)`;
      });
    });
  }

  // Animations
  setupAnimations() {
    // Counter animation for stats
    const animateCounters = () => {
      const counters = document.querySelectorAll('[data-target]');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              updateCounter();
              observer.unobserve(entry.target);
            }
          });
        });

        observer.observe(counter);
      });
    };

    animateCounters();

    // Staggered animations for cards
    const animateCards = (selector, delay = 100) => {
      const cards = document.querySelectorAll(selector);
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * delay);
      });
    };

    // Initialize card animations
    setTimeout(() => animateCards('.tool-card'), 500);
    setTimeout(() => animateCards('.course-card'), 700);
    setTimeout(() => animateCards('.testimonial-card'), 900);
  }

  // Contact Form
  setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      // Show loading state
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      try {
        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Show success message
        const successDiv = document.getElementById('form-success');
        successDiv.classList.remove('hidden');
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          successDiv.classList.add('hidden');
        }, 5000);

      } catch (error) {
        console.error('Form submission error:', error);
        alert('There was an error sending your message. Please try again.');
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });

    // Form validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        this.validateField(input);
      });
    });
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;

    switch (field.name) {
      case 'first-name':
      case 'last-name':
        isValid = value.length >= 2;
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
        break;
      case 'phone':
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        isValid = !value || phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''));
        break;
      case 'message':
        isValid = value.length >= 10;
        break;
    }

    field.classList.toggle('is-invalid', !isValid);
    return isValid;
  }

  // Back to Top Button
  setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Mobile Menu
  setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!mobileMenuBtn || !mobileMenu) return;

    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      const isOpen = mobileMenu.classList.contains('active');

      // Animate hamburger icon
      const icon = mobileMenuBtn.querySelector('.material-icons');
      icon.textContent = isOpen ? 'close' : 'menu';
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('.material-icons');
        icon.textContent = 'menu';
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('.material-icons');
        icon.textContent = 'menu';
      }
    });
  }
}

// Particle System for Background Effects
class ParticleSystem {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      particleCount: options.particleCount || 50,
      colors: options.colors || ['#3b82f6', '#eab308', '#10b981'],
      size: options.size || 2,
      speed: options.speed || 0.5,
      ...options
    };

    this.particles = [];
    this.animationId = null;
    this.init();
  }

  init() {
    this.createParticles();
    this.animate();
  }

  createParticles() {
    for (let i = 0; i < this.options.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.container.clientWidth,
        y: Math.random() * this.container.clientHeight,
        vx: (Math.random() - 0.5) * this.options.speed,
        vy: (Math.random() - 0.5) * this.options.speed,
        size: Math.random() * this.options.size + 1,
        color: this.options.colors[Math.floor(Math.random() * this.options.colors.length)],
        life: Math.random() * 100 + 50
      });
    }
  }

  animate() {
    const ctx = this.container.getContext('2d');
    ctx.clearRect(0, 0, this.container.width, this.container.height);

    this.particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life--;

      // Wrap around edges
      if (particle.x < 0) particle.x = this.container.width;
      if (particle.x > this.container.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.container.height;
      if (particle.y > this.container.height) particle.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.life / 100;
      ctx.fill();

      // Remove dead particles
      if (particle.life <= 0) {
        this.particles.splice(index, 1);
        this.particles.push({
          x: Math.random() * this.container.width,
          y: Math.random() * this.container.height,
          vx: (Math.random() - 0.5) * this.options.speed,
          vy: (Math.random() - 0.5) * this.options.speed,
          size: Math.random() * this.options.size + 1,
          color: this.options.colors[Math.floor(Math.random() * this.options.colors.length)],
          life: Math.random() * 100 + 50
        });
      }
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new SKAIHub();

  // Add CSS for animations
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      animation: fadeInUp 0.6s ease-out forwards;
    }

    .tool-card, .course-card, .testimonial-card {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease;
    }

    .navbar.scrolled {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    #mobile-menu.active {
      display: block;
    }

    #back-to-top.active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .is-invalid {
      border-color: #ef4444 !important;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }
  `;
  document.head.appendChild(style);
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
