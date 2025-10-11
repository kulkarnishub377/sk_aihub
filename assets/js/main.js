/**
 * SK AI Hub - Premium JavaScript with Advanced Interactions
 * Enhanced interactive features, animations, and premium UX
 */

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
    this.setupInteractiveDemo();
    this.setupParticleSystem();
    this.setupTypewriterEffect();
    this.setupMagneticButtons();
    this.setupScrollProgress();
    this.setupThemeToggle();
    this.setupLazyLoading();
    this.setupAccessibility();
  }

  // ===== LOADING SCREEN =====
  setupLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return;

    // Enhanced loading with progress
    let progress = 0;
    const progressBar = loadingScreen.querySelector('.progress-bar');
    const progressText = loadingScreen.querySelector('.progress-text');

    const loadingSteps = [
      'Initializing AI Hub...',
      'Loading neural networks...',
      'Connecting to cloud...',
      'Preparing interface...',
      'Ready!'
    ];

    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        setTimeout(() => {
          loadingScreen.style.opacity = '0';
          setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.body.classList.add('loaded');
          }, 500);
        }, 500);
      }

      if (progressBar) progressBar.style.width = `${progress}%`;
      if (progressText) {
        const stepIndex = Math.floor((progress / 100) * loadingSteps.length);
        progressText.textContent = loadingSteps[Math.min(stepIndex, loadingSteps.length - 1)];
      }
    }, 200);
  }

  // ===== ENHANCED NEURAL NETWORK =====
  setupNeuralNetwork() {
    const canvas = document.getElementById('neural-network');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const nodes = [];
    const connections = [];
    const nodeCount = 75;

    // Set canvas size with device pixel ratio
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes with enhanced properties
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 4 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        color: this.getRandomColor()
      });
    }

    // Create dynamic connections
    const updateConnections = () => {
      connections.length = 0;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.sqrt(
            Math.pow(nodes[i].x - nodes[j].x, 2) +
            Math.pow(nodes[i].y - nodes[j].y, 2)
          );
          if (distance < 180) {
            connections.push({
              from: i,
              to: j,
              opacity: (180 - distance) / 180 * 0.4,
              distance: distance
            });
          }
        }
      }
    };

    // Enhanced animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;

        // Bounce off walls with momentum loss
        if (node.x < 0 || node.x > canvas.offsetWidth) {
          node.vx *= -0.8;
          node.x = Math.max(0, Math.min(canvas.offsetWidth, node.x));
        }
        if (node.y < 0 || node.y > canvas.offsetHeight) {
          node.vy *= -0.8;
          node.y = Math.max(0, Math.min(canvas.offsetHeight, node.y));
        }

        // Draw enhanced node with pulse effect
        const pulseRadius = node.radius * (1 + Math.sin(node.pulse) * 0.3);
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color.replace('0.8', (node.opacity * (0.8 + Math.sin(node.pulse) * 0.2)).toString());
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = node.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Update and draw connections
      updateConnections();
      connections.forEach(conn => {
        const from = nodes[conn.from];
        const to = nodes[conn.to];

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = `rgba(139, 92, 246, ${conn.opacity})`;
        ctx.lineWidth = 1 + (180 - conn.distance) / 180;
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }

  getRandomColor() {
    const colors = [
      'rgba(14, 165, 233, 0.8)',   // Blue
      'rgba(217, 70, 239, 0.8)',   // Purple
      'rgba(249, 115, 22, 0.8)',   // Orange
      'rgba(34, 197, 94, 0.8)',    // Green
      'rgba(239, 68, 68, 0.8)'     // Red
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // ===== PREMIUM NAVIGATION =====
  setupNavigation() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNav = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      // Hide/show nav on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        nav.classList.add('hidden');
      } else {
        nav.classList.remove('hidden');
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateNav);
        ticking = true;
      }
    });

    // Enhanced smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for fixed nav
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ===== ADVANCED SCROLL EFFECTS =====
  setupScrollEffects() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in-up');
          }, index * 100);
        }
      });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('.section-container, .feature-card, .course-card, .tool-card, .testimonial-card, .achievement-card').forEach(el => {
      observer.observe(el);
    });

    // Enhanced counter animation
    const animateCounters = () => {
      document.querySelectorAll('.stat-number').forEach((counter, index) => {
        setTimeout(() => {
          const target = parseInt(counter.getAttribute('data-target'));
          const duration = 2500;
          const start = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(target * easeOutQuart);

            counter.textContent = current.toLocaleString();

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }, index * 200);
      });
    };

    // Trigger counter animation when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }
  }

  // ===== PREMIUM ANIMATIONS =====
  setupAnimations() {
    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const heroBackground = document.querySelector('.hero-background');
      if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 + scrolled * 0.0001})`;
      }
    });

    // Floating animation for icons
    document.querySelectorAll('.feature-icon, .tool-icon, .achievement-icon').forEach((icon, index) => {
      icon.style.animation = `float 6s ease-in-out infinite ${index * 0.5}s`;
    });

    // Add floating animation
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-8px) rotate(1deg); }
        66% { transform: translateY(-4px) rotate(-1deg); }
      }
    `;
    document.head.appendChild(floatStyle);
  }

  // ===== ENHANCED CONTACT FORM =====
  setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const inputs = form.querySelectorAll('input, select, textarea');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Real-time validation
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        this.validateField(input);
      });

      input.addEventListener('blur', () => {
        this.validateField(input);
      });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Validate all fields
      let isValid = true;
      inputs.forEach(input => {
        if (!this.validateField(input)) {
          isValid = false;
        }
      });

      if (!isValid) {
        this.showNotification('Please fill in all required fields correctly.', 'error');
        return;
      }

      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Show success animation
        this.showSuccessAnimation();

        // Reset form
        form.reset();

        // Reset validation states
        inputs.forEach(input => {
          input.classList.remove('valid', 'invalid');
        });

      } catch (error) {
        this.showNotification('Failed to send message. Please try again.', 'error');
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = false;

    switch (type) {
      case 'email':
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      case 'tel':
        isValid = /^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ''));
        break;
      default:
        isValid = value.length > 0;
    }

    field.classList.toggle('valid', isValid);
    field.classList.toggle('invalid', !isValid);

    return isValid;
  }

  showSuccessAnimation() {
    // Create success animation
    const successDiv = document.createElement('div');
    successDiv.className = 'success-animation';
    successDiv.innerHTML = `
      <div class="success-icon">✓</div>
      <div class="success-text">Message sent successfully!</div>
    `;

    successDiv.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      padding: 2rem 3rem;
      border-radius: 16px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      z-index: 1000;
      animation: successPopup 0.5s ease-out;
      text-align: center;
    `;

    document.body.appendChild(successDiv);

    setTimeout(() => {
      successDiv.style.animation = 'successFade 0.3s ease-in';
      setTimeout(() => {
        document.body.removeChild(successDiv);
      }, 300);
    }, 3000);
  }

  // ===== BACK TO TOP =====
  setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===== ENHANCED MOBILE MENU =====
  setupMobileMenu() {
    const menuBtn = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.querySelector('.mobile-overlay');

    if (!menuBtn || !mobileMenu) return;

    const toggleMenu = () => {
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open');
      menuBtn.classList.toggle('active');
      document.body.classList.toggle('menu-open');

      if (overlay) {
        overlay.classList.toggle('active');
      }
    };

    menuBtn.addEventListener('click', toggleMenu);

    if (overlay) {
      overlay.addEventListener('click', toggleMenu);
    }

    // Close menu on navigation
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', toggleMenu);
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        toggleMenu();
      }
    });
  }

  // ===== INTERACTIVE DEMO =====
  setupInteractiveDemo() {
    const demoScreen = document.querySelector('.demo-screen');
    if (!demoScreen) return;

    const codeSamples = [
      `import tensorflow as tf
from sklearn.model_selection import train_test_split
import numpy as np

# Advanced Neural Network Implementation
class AdvancedNN:
    def __init__(self, layers):
        self.layers = layers;
        self.weights = [];
        self.biases = [];

    def forward(self, X):
        for i, (w, b) in enumerate(zip(self.weights, self.biases)):
            X = np.dot(X, w) + b;
            if i < len(self.layers) - 1:
                X = np.maximum(0, X)  # ReLU
        return X

# Load and preprocess data
(X_train, X_test, y_train, y_test) = train_test_split(
    data, labels, test_size=0.2, random_state=42
)

# Build advanced model
model = AdvancedNN([784, 256, 128, 64, 10])
predictions = model.forward(X_test)`,
      `import pandas as pd
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# Advanced Data Science Pipeline
def create_ml_pipeline(data_path):
    # Load and explore data
    df = pd.read_csv(data_path)
    print(f"Dataset shape: {df.shape}")
    print(df.describe())

    # Feature engineering
    features = df.drop('target', axis=1)
    target = df['target']

    # Handle missing values
    features = features.fillna(features.median())

    # Train model
    model = RandomForestClassifier(
        n_estimators=100,
        max_depth=10,
        random_state=42
    )

    model.fit(features, target)

    # Evaluate
    predictions = model.predict(features)
    print(classification_report(target, predictions))

    return model

# Usage
model = create_ml_pipeline('customer_data.csv')`,
      `import cv2
import numpy as np
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.preprocessing import image

# Advanced Computer Vision
def advanced_image_classifier(image_path):
    # Load pre-trained model
    model = ResNet50(weights='imagenet', include_top=False)

    # Load and preprocess image
    img = image.load_img(image_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = tf.keras.applications.resnet50.preprocess_input(img_array)

    # Extract features
    features = model.predict(img_array)
    features = features.flatten()

    # Custom classification logic
    if features.mean() > 0.5:
        return "High confidence detection"
    else:
        return "Low confidence detection"

# Real-time processing
cap = cv2.VideoCapture(0)
while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Process frame
    result = advanced_image_classifier(frame)
    cv2.putText(frame, result, (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    cv2.imshow('AI Vision', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()`
    ];

    let currentSample = 0;
    const codeContent = demoScreen.querySelector('.editor-content pre');

    // Enhanced tab switching with animations
    demoScreen.querySelectorAll('.tab').forEach((tab, index) => {
      tab.addEventListener('click', () => {
        if (index === currentSample) return;

        // Update active tab
        demoScreen.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Animate code transition
        codeContent.style.opacity = '0';
        setTimeout(() => {
          currentSample = index;
          codeContent.textContent = codeSamples[currentSample];
          codeContent.style.opacity = '1';
        }, 200);

        // Update accuracy meter with animation
        const accuracyMeter = document.querySelector('.meter-fill');
        const accuracyValue = document.querySelector('.meter-value');

        const accuracies = ['96.8%', '92.4%', '94.7%'];
        const percentages = [96.8, 92.4, 94.7];

        accuracyMeter.style.width = '0%';
        accuracyValue.textContent = '0%';

        setTimeout(() => {
          accuracyMeter.style.width = `${percentages[currentSample]}%`;
          this.animateNumber(accuracyValue, 0, percentages[currentSample], 1000);
        }, 300);
      });
    });

    // Initialize with first sample
    codeContent.textContent = codeSamples[0];
  }

  animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    const endValue = parseFloat(end);

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (endValue - start) * progress;

      element.textContent = current.toFixed(1) + '%';

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  // ===== NEW PREMIUM FEATURES =====

  // Particle System for enhanced visual effects
  setupParticleSystem() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      opacity: 0.3;
    `;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }

  // Typewriter effect for hero text
  setupTypewriterEffect() {
    const typewriterElement = document.querySelector('.typewriter');
    if (!typewriterElement) return;

    const texts = [
      'Master AI & Machine Learning',
      'Build Intelligent Systems',
      'Transform Your Career',
      'Join the AI Revolution'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeWriter = () => {
      const currentText = texts[textIndex];

      if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }

      const speed = isDeleting ? 50 : 100;
      setTimeout(typeWriter, speed);
    };

    typeWriter();
  }

  // Magnetic buttons effect
  setupMagneticButtons() {
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  // Scroll progress indicator
  setupScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, #0ea5e9, #d946ef, #f97316);
      z-index: 1000;
      transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      progressBar.style.width = `${scrolled}%`;
    });
  }

  // ===== THEME TOGGLE =====
  setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Set initial theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeIcons(savedTheme);

    const toggleTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      this.updateThemeIcons(newTheme);

      // Show notification
      this.showNotification(`Switched to ${newTheme} mode`, 'info');
    };

    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    if (mobileThemeToggle) {
      mobileThemeToggle.addEventListener('click', toggleTheme);
    }
  }

  updateThemeIcons(theme) {
    const icons = document.querySelectorAll('#theme-toggle .material-icons, #mobile-theme-toggle .material-icons');
    icons.forEach(icon => {
      icon.textContent = theme === 'light' ? 'dark_mode' : 'light_mode';
    });
  }

  // Lazy loading for images
  setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Accessibility enhancements
  setupAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link sr-only';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Focus management
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    // High contrast mode detection
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }
  }

  // ===== NOTIFICATION SYSTEM =====
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
      <div class="notification-icon">
        ${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}
      </div>
      <div class="notification-content">${message}</div>
      <button class="notification-close" aria-label="Close notification">×</button>
    `;

    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      max-width: 400px;
      padding: 16px 20px;
      border-radius: 12px;
      color: white;
      font-weight: 500;
      z-index: 1000;
      animation: slideInRight 0.3s ease-out;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      ${type === 'success' ? 'background: rgba(16, 185, 129, 0.95);' : ''}
      ${type === 'error' ? 'background: rgba(239, 68, 68, 0.95);' : ''}
      ${type === 'info' ? 'background: rgba(99, 102, 241, 0.95);' : ''}
    `;

    document.body.appendChild(notification);

    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
      this.closeNotification(notification);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (document.body.contains(notification)) {
        this.closeNotification(notification);
      }
    }, 5000);
  }

  closeNotification(notification) {
    notification.style.animation = 'slideOutRight 0.3s ease-in';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize SK AI Hub
  new SKAIHub();

  // Add loaded class to body
  document.body.classList.add('loaded');
});

// ===== UTILITY FUNCTIONS =====
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

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// ===== PERFORMANCE OPTIMIZATION =====
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Defer non-critical initialization
    console.log('SK AI Hub initialized with premium features');
  });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
  console.error('JavaScript Error:', e.error);
  // Could send error reports to monitoring service
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled Promise Rejection:', e.reason);
  // Could send error reports to monitoring service
});

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Register service worker for PWA capabilities
    // navigator.serviceWorker.register('/sw.js');
  });
}
