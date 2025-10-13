// SK AI Hub - Premium JavaScript Functionality
// ============================================
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
    // Advanced Hero Features
    this.setupAIModelTrainer();
    this.setupDataVisualization();
    this.setupCollaborativeCoding();
    this.setupFloatingCodeSnippets();
    this.setupEnhancedParticleSystem();
    this.setupEnhancedScrollIndicator();
    this.setupEnhancedMagneticButtons();
    this.setupRealtimeAccuracy();
    // Company Logos
    this.setupCompanyLogos();
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

  // ===== ADVANCED HERO FEATURES =====

  // AI Model Trainer Demo
  setupAIModelTrainer() {
    const trainer = document.querySelector('.ai-model-trainer');
    if (!trainer) return;

    const startBtn = trainer.querySelector('.start-training');
    const progressBar = trainer.querySelector('.training-progress');
    const accuracyDisplay = trainer.querySelector('.accuracy-display');
    const lossDisplay = trainer.querySelector('.loss-display');
    const epochDisplay = trainer.querySelector('.epoch-display');

    let isTraining = false;
    let currentEpoch = 0;
    let currentAccuracy = 0;
    let currentLoss = 1.0;

    startBtn.addEventListener('click', () => {
      if (isTraining) return;

      isTraining = true;
      startBtn.textContent = 'Training...';
      startBtn.disabled = true;
      currentEpoch = 0;
      currentAccuracy = 0;
      currentLoss = 1.0;

      const trainingInterval = setInterval(() => {
        currentEpoch++;
        epochDisplay.textContent = currentEpoch;

        // Simulate training progress
        const progress = Math.min(currentEpoch / 50, 1);
        progressBar.style.width = `${progress * 100}%`;

        // Simulate accuracy improvement (sigmoid-like curve)
        currentAccuracy = Math.min(95 + (5 * (1 / (1 + Math.exp(-0.2 * (currentEpoch - 25))))), 98.5);
        accuracyDisplay.textContent = currentAccuracy.toFixed(1) + '%';

        // Simulate loss decrease (exponential decay)
        currentLoss = Math.max(0.02, 1.0 * Math.exp(-0.15 * currentEpoch));
        lossDisplay.textContent = currentLoss.toFixed(3);

        if (currentEpoch >= 50) {
          clearInterval(trainingInterval);
          isTraining = false;
          startBtn.textContent = 'Training Complete!';
          startBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

          setTimeout(() => {
            startBtn.textContent = 'Start Training';
            startBtn.disabled = false;
            startBtn.style.background = '';
            progressBar.style.width = '0%';
            epochDisplay.textContent = '0';
            accuracyDisplay.textContent = '0.0%';
            lossDisplay.textContent = '1.000';
          }, 3000);
        }
      }, 200);
    });
  }

  // Data Visualization Demo
  setupDataVisualization() {
    const viz = document.querySelector('.data-visualization');
    if (!viz) return;

    const canvas = viz.querySelector('.viz-canvas');
    const ctx = canvas.getContext('2d');
    const dataPoints = [];
    const maxPoints = 100;

    // Set canvas size
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

    // Generate initial data
    for (let i = 0; i < maxPoints; i++) {
      dataPoints.push({
        x: i * (canvas.offsetWidth / maxPoints),
        y: canvas.offsetHeight / 2 + Math.sin(i * 0.1) * 50 + Math.random() * 20,
        target: canvas.offsetHeight / 2 + Math.sin(i * 0.1) * 50,
        velocity: 0
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update data points with physics
      dataPoints.forEach((point, i) => {
        const force = (point.target - point.y) * 0.02;
        point.velocity += force;
        point.velocity *= 0.95; // Damping
        point.y += point.velocity;

        // Draw line to next point
        if (i < dataPoints.length - 1) {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(dataPoints[i + 1].x, dataPoints[i + 1].y);
          ctx.strokeStyle = 'rgba(14, 165, 233, 0.8)';
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#0ea5e9';
        ctx.fill();
      });

      // Add new data point occasionally
      if (Math.random() < 0.05) {
        const newTarget = canvas.offsetHeight / 2 + Math.sin(Date.now() * 0.001) * 50;
        dataPoints.shift();
        dataPoints.push({
          x: (maxPoints - 1) * (canvas.offsetWidth / maxPoints),
          y: dataPoints[dataPoints.length - 1].y,
          target: newTarget,
          velocity: 0
        });

        // Update x positions
        dataPoints.forEach((point, i) => {
          point.x = i * (canvas.offsetWidth / maxPoints);
        });
      }

      requestAnimationFrame(animate);
    };

    animate();
  }

  // Collaborative Coding Environment
  setupCollaborativeCoding() {
    const collab = document.querySelector('.collaborative-coding');
    if (!collab) return;

    const codeEditor = collab.querySelector('.code-editor');
    const cursor = collab.querySelector('.typing-cursor');
    const userCount = collab.querySelector('.user-count');

    const codeSnippets = [
      'def neural_network(input_size, hidden_size, output_size):',
      '    # Initialize weights and biases',
      '    W1 = np.random.randn(hidden_size, input_size) * 0.01',
      '    b1 = np.zeros((hidden_size, 1))',
      '    W2 = np.random.randn(output_size, hidden_size) * 0.01',
      '    b2 = np.zeros((output_size, 1))',
      '    ',
      '    return {\'W1\': W1, \'b1\': b1, \'W2\': W2, \'b2\': b2}',
      '',
      'def forward_propagation(X, parameters):',
      '    W1 = parameters[\'W1\']',
      '    b1 = parameters[\'b1\']',
      '    W2 = parameters[\'W2\']',
      '    b2 = parameters[\'b2\']',
      '    ',
      '    Z1 = np.dot(W1, X) + b1',
      '    A1 = np.tanh(Z1)',
      '    Z2 = np.dot(W2, A1) + b2',
      '    A2 = 1 / (1 + np.exp(-Z2))  # sigmoid',
      '    ',
      '    cache = {\'Z1\': Z1, \'A1\': A1, \'Z2\': Z2, \'A2\': A2}',
      '    return A2, cache'
    ];

    let currentLine = 0;
    let currentChar = 0;
    let userCountValue = 3;

    const typeCode = () => {
      if (currentLine >= codeSnippets.length) {
        currentLine = 0;
        currentChar = 0;
        codeEditor.innerHTML = '';
      }

      const currentSnippet = codeSnippets[currentLine];
      if (currentChar < currentSnippet.length) {
        codeEditor.innerHTML += currentSnippet[currentChar];
        currentChar++;
        cursor.style.left = `${currentChar * 8.5}px`;
      } else {
        codeEditor.innerHTML += '<br>';
        currentLine++;
        currentChar = 0;
        cursor.style.left = '0px';
        cursor.style.top = `${currentLine * 20}px`;
      }

      // Simulate user count changes
      if (Math.random() < 0.1) {
        userCountValue += Math.random() > 0.5 ? 1 : -1;
        userCountValue = Math.max(1, Math.min(10, userCountValue));
        userCount.textContent = userCountValue;
      }
    };

    setInterval(typeCode, 150);
  }

  // Floating Code Snippets
  setupFloatingCodeSnippets() {
    const container = document.querySelector('.floating-code-container');
    if (!container) return;

    const snippets = [
      { code: 'import torch.nn as nn', lang: 'python' },
      { code: 'model = Sequential()', lang: 'javascript' },
      { code: 'SELECT * FROM data', lang: 'sql' },
      { code: 'def predict(X):', lang: 'python' },
      { code: 'const model = tf.sequential()', lang: 'javascript' },
      { code: 'accuracy = 98.5%', lang: 'text' },
      { code: 'loss = 0.023', lang: 'text' },
      { code: 'epochs = 100', lang: 'text' }
    ];

    snippets.forEach((snippet, index) => {
      const element = document.createElement('div');
      element.className = 'floating-snippet';
      element.innerHTML = `<code class="language-${snippet.lang}">${snippet.code}</code>`;
      element.style.cssText = `
        position: absolute;
        left: ${Math.random() * 80 + 10}%;
        top: ${Math.random() * 80 + 10}%;
        animation: floatSnippet ${3 + Math.random() * 2}s ease-in-out infinite ${index * 0.5}s;
        opacity: ${0.3 + Math.random() * 0.4};
        transform: scale(${0.8 + Math.random() * 0.4});
      `;
      container.appendChild(element);
    });
  }

  // Enhanced Particle System for Hero
  setupEnhancedParticleSystem() {
    const canvas = document.getElementById('hero-particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 150;

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

    // Create enhanced particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: this.getRandomParticleColor(),
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        connections: []
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += particle.pulseSpeed;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.vx *= -0.9;
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.vy *= -0.9;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.offsetWidth, particle.x));
        particle.y = Math.max(0, Math.min(canvas.offsetHeight, particle.y));
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${(120 - distance) / 120 * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw particles
      particles.forEach(particle => {
        const pulseSize = particle.size * (1 + Math.sin(particle.pulse) * 0.3);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace('0.8', (particle.opacity * (0.8 + Math.sin(particle.pulse) * 0.2)).toString());
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }

  getRandomParticleColor() {
    const colors = [
      'rgba(14, 165, 233, 0.8)',   // Blue
      'rgba(217, 70, 239, 0.8)',   // Purple
      'rgba(249, 115, 22, 0.8)',   // Orange
      'rgba(34, 197, 94, 0.8)',    // Green
      'rgba(139, 92, 246, 0.8)'    // Violet
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Enhanced Scroll Indicator
  setupEnhancedScrollIndicator() {
    const indicator = document.querySelector('.scroll-indicator');
    if (!indicator) return;

    const progressRing = indicator.querySelector('.progress-ring-circle');
    const circumference = 2 * Math.PI * 40; // radius = 40

    progressRing.style.strokeDasharray = circumference;
    progressRing.style.strokeDashoffset = circumference;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);

      const offset = circumference - (progress * circumference);
      progressRing.style.strokeDashoffset = offset;

      // Rotate the indicator based on scroll
      indicator.style.transform = `rotate(${progress * 360}deg)`;
    });
  }

  // Enhanced Magnetic Buttons
  setupEnhancedMagneticButtons() {
    document.querySelectorAll('.hero-cta-btn').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = Math.sqrt((rect.width / 2) ** 2 + (rect.height / 2) ** 2);

        if (distance < maxDistance) {
          const strength = (maxDistance - distance) / maxDistance;
          btn.style.transform = `translate(${x * strength * 0.5}px, ${y * strength * 0.5}px) scale(${1 + strength * 0.1})`;
        }
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px) scale(1)';
      });
    });
  }

  // Real-time Accuracy Visualization
  setupRealtimeAccuracy() {
    const accuracyElements = document.querySelectorAll('.accuracy-value');
    if (accuracyElements.length === 0) return;

    accuracyElements.forEach(element => {
      let currentValue = 0;
      const targetValue = parseFloat(element.textContent) || 96.8;

      const updateAccuracy = () => {
        if (currentValue < targetValue) {
          currentValue += Math.random() * 0.1;
          currentValue = Math.min(currentValue, targetValue);
          element.textContent = currentValue.toFixed(1) + '%';

          // Add slight fluctuation for realism
          if (Math.random() < 0.1) {
            const fluctuation = (Math.random() - 0.5) * 0.2;
            currentValue = Math.max(0, Math.min(100, currentValue + fluctuation));
          }

          requestAnimationFrame(updateAccuracy);
        }
      };

      updateAccuracy();
    });
  }

  // ===== END ADVANCED HERO FEATURES =====

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

  // ===== COMPANY LOGOS INTERACTIONS =====

  setupCompanyLogos() {
    // Initialize company logo features
    this.setupCompanyLogoErrorHandling();
    this.setupCompanyHoverEffects();
    this.setupCompanyLogoLazyLoading();
    this.setupCompanyLogoAnimations();
    this.setupCompanyLogoInteractions();
  }

  setupCompanyLogoErrorHandling() {
    // Handle broken logo images with fallback
    document.querySelectorAll('.company-logo').forEach(logo => {
      const container = logo.closest('.company-logo-container');

      // Add loading state
      container.classList.add('loading');

      logo.addEventListener('error', (e) => {
        const container = e.target.closest('.company-logo-container');
        const companyName = e.target.alt;

        // Remove loading state
        container.classList.remove('loading');

        // Hide broken image
        e.target.style.display = 'none';

        // Create fallback element if it doesn't exist
        let fallback = container.querySelector('.fallback-logo');
        if (!fallback) {
          fallback = document.createElement('div');
          fallback.className = 'fallback-logo';
          fallback.textContent = companyName.charAt(0).toUpperCase();
          fallback.title = `${companyName} - Logo temporarily unavailable`;
          container.appendChild(fallback);
        }

        // Add gradient background based on company
        const gradients = [
          'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
          'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        ];
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
        fallback.style.background = randomGradient;

        // Log error for debugging
        console.warn(`Company logo failed to load: ${companyName} - ${e.target.src}`);
      });

      // Add load success handler
      logo.addEventListener('load', (e) => {
        const container = e.target.closest('.company-logo-container');

        // Remove loading state
        container.classList.remove('loading');

        e.target.style.opacity = '0.6';
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
          e.target.style.transition = 'all 0.4s ease';
          e.target.style.opacity = '1';
          e.target.style.transform = 'scale(1)';
        }, 100);
      });

      // Force load check after a delay (for cached images)
      setTimeout(() => {
        if (logo.complete && logo.naturalHeight !== 0) {
          container.classList.remove('loading');
        }
      }, 1000);
    });
  }

  setupCompanyHoverEffects() {
    document.querySelectorAll('.company-logo-container').forEach(container => {
      const logo = container.querySelector('.company-logo, .fallback-logo');
      const tooltip = container.querySelector('.company-tooltip');

      container.addEventListener('mouseenter', () => {
        // Enhanced hover effects
        container.style.transform = 'translateY(-8px) scale(1.02)';

        if (logo) {
          logo.style.transform = 'scale(1.1) rotate(2deg)';
          logo.style.filter = 'brightness(1.2) contrast(1.1)';
        }

        // Show tooltip with animation
        if (tooltip) {
          tooltip.style.opacity = '1';
          tooltip.style.visibility = 'visible';
          tooltip.style.transform = 'translateX(-50%) scale(1)';
        }

        // Add ripple effect
        this.createRippleEffect(container);
      });

      container.addEventListener('mouseleave', () => {
        // Reset effects
        container.style.transform = 'translateY(0) scale(1)';

        if (logo) {
          logo.style.transform = 'scale(1) rotate(0deg)';
          logo.style.filter = 'grayscale(100%) contrast(0.8) brightness(0.6)';
        }

        // Hide tooltip
        if (tooltip) {
          tooltip.style.opacity = '0';
          tooltip.style.visibility = 'hidden';
          tooltip.style.transform = 'translateX(-50%) scale(0.8)';
        }
      });
    });
  }

  setupCompanyLogoLazyLoading() {
    const companyLogos = document.querySelectorAll('.company-logo');

    const logoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const logo = entry.target;
          const container = logo.closest('.company-logo-container');

          // Staggered animation
          setTimeout(() => {
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0) scale(1)';
            container.style.animation = 'logoFadeIn 0.6s ease-out forwards';
          }, index * 100);

          logoObserver.unobserve(logo);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    companyLogos.forEach(logo => {
      logo.style.opacity = '0';
      logo.style.transform = 'translateY(30px) scale(0.8)';
      logoObserver.observe(logo);
    });
  }

  setupCompanyLogoAnimations() {
    // Add continuous subtle animations
    document.querySelectorAll('.company-logo-container').forEach((container, index) => {
      // Random subtle floating animation
      const delay = Math.random() * 2;
      const duration = 3 + Math.random() * 2;

      container.style.animation = `companyFloat ${duration}s ease-in-out infinite ${delay}s`;
    });

    // Add marquee effect for sections on larger screens
    if (window.innerWidth > 1024) {
      this.setupCompanyMarquee();
    }
  }

  setupCompanyMarquee() {
    const sections = document.querySelectorAll('.company-logo-container');

    sections.forEach((section, index) => {
      // Subtle continuous movement
      section.style.animation = `companyScroll 40s linear infinite ${index * 0.5}s`;
    });

    // Enhanced pause on hover
    document.querySelectorAll('.company-logo-container').forEach(container => {
      container.addEventListener('mouseenter', () => {
        container.style.animationPlayState = 'paused';
        container.style.transform = 'scale(1.05)';
      });

      container.addEventListener('mouseleave', () => {
        container.style.animationPlayState = 'running';
        container.style.transform = 'scale(1)';
      });
    });
  }

  setupCompanyLogoInteractions() {
    // Add click interactions for company logos
    document.querySelectorAll('.company-logo-container').forEach(container => {
      container.addEventListener('click', (e) => {
        // Don't prevent default for anchor tags - let them navigate
        if (container.tagName.toLowerCase() === 'a') {
          // Add visual feedback for link clicks
          this.createClickRipple(e, container);

          const companyName = container.querySelector('.company-tooltip')?.textContent || 'Company';

          // Show notification for link clicks
          this.showCompanyNotification(companyName + ' - Opening website...');

          // Add temporary highlight
          container.style.boxShadow = '0 0 30px rgba(14, 165, 233, 0.4)';
          setTimeout(() => {
            container.style.boxShadow = '';
          }, 1000);
        } else {
          // Handle non-link containers (fallback)
          const companyName = container.querySelector('.company-tooltip')?.textContent || 'Company';

          // Create click ripple effect
          this.createClickRipple(e, container);

          // Show notification
          this.showCompanyNotification(companyName);

          // Add temporary highlight
          container.style.boxShadow = '0 0 30px rgba(14, 165, 233, 0.4)';
          setTimeout(() => {
            container.style.boxShadow = '';
          }, 1000);
        }
      });
    });
  }

  createRippleEffect(container) {
    const ripple = document.createElement('div');
    ripple.className = 'company-ripple';
    ripple.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: translate(-50%, -50%);
      transition: all 0.6s ease-out;
      pointer-events: none;
    `;

    container.appendChild(ripple);

    setTimeout(() => {
      ripple.style.width = '200px';
      ripple.style.height = '200px';
      ripple.style.opacity = '0';
    }, 10);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  createClickRipple(event, container) {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      left: ${x - 25}px;
      top: ${y - 25}px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(14, 165, 233, 0.4);
      transform: scale(0);
      transition: transform 0.5s ease-out, opacity 0.5s ease-out;
      pointer-events: none;
      z-index: 5;
    `;

    container.appendChild(ripple);

    requestAnimationFrame(() => {
      ripple.style.transform = 'scale(2)';
      ripple.style.opacity = '0';
    });

    setTimeout(() => ripple.remove(), 500);
  }

  showCompanyNotification(companyName) {
    // Create floating notification
    const notification = document.createElement('div');
    notification.className = 'company-notification';
    notification.innerHTML = `
      <div class="notification-content">
        <span class="material-icons">business</span>
        <span>${companyName} - Leading AI Innovator</span>
      </div>
    `;

    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%);
      color: white;
      padding: 12px 20px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      transform: translateX(100%);
      transition: transform 0.3s ease-out;
      font-weight: 500;
      backdrop-filter: blur(10px);
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
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

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoadingScreen();
    initNeuralNetwork();
    initNavbarEnhancements();
    initMobileMenu();
    initScrollEffects();
    initMagneticButtons();
    initTypewriterEffect();
    initParticleSystem();
    initAccessibility();
    initCourseEnhancements();
});

// Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.querySelector('main');

    if (loadingScreen && mainContent) {
        // Hide loading screen after 2 seconds
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.pointerEvents = 'none';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.style.opacity = '1';
            }, 500);
        }, 2000);
    }
}

// Neural Network Animation
function initNeuralNetwork() {
    const canvas = document.getElementById('neural-network');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes and connections
    const nodes = [];
    const connections = [];
    const numNodes = Math.min(50, Math.floor(window.innerWidth / 50));

    // Create nodes
    for (let i = 0; i < numNodes; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.2
        });
    }

    // Create connections
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const distance = Math.sqrt(
                Math.pow(nodes[i].x - nodes[j].x, 2) +
                Math.pow(nodes[i].y - nodes[j].y, 2)
            );
            if (distance < 150) {
                connections.push({
                    from: i,
                    to: j,
                    opacity: Math.max(0, 1 - distance / 150) * 0.3
                });
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update nodes
        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;

            // Bounce off edges
            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

            // Draw node
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(14, 165, 233, ${node.opacity})`;
            ctx.fill();
        });

        // Draw connections
        connections.forEach(conn => {
            const fromNode = nodes[conn.from];
            const toNode = nodes[conn.to];

            ctx.beginPath();
            ctx.moveTo(fromNode.x, fromNode.y);
            ctx.lineTo(toNode.x, toNode.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${conn.opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        });

        animationId = requestAnimationFrame(animate);
    }

    animate();

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    });
}

// Mobile Menu
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Scroll Effects
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Magnetic Buttons
function initMagneticButtons() {
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

// Typewriter Effect
function initTypewriterEffect() {
    const typewriterElements = document.querySelectorAll('.typewriter');

    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid #0ea5e9';

        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                setTimeout(() => {
                    element.style.borderRight = 'none';
                }, 500);
            }
        }, 100);
    });
}

// Particle System
function initParticleSystem() {
    const particleContainer = document.querySelector('.particle-container');
    if (!particleContainer) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particleContainer.appendChild(particle);
    }
}

// Accessibility Features
function initAccessibility() {
    // Keyboard navigation for mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                mobileMenuBtn.click();
            }
        });
    }

    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded z-50';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Focus management
    document.addEventListener('focusin', (e) => {
        if (e.target.classList.contains('focus-visible')) {
            e.target.style.outline = '2px solid #0ea5e9';
            e.target.style.outlineOffset = '2px';
        }
    });

    document.addEventListener('focusout', (e) => {
        if (e.target.classList.contains('focus-visible')) {
            e.target.style.outline = 'none';
        }
    });
}

// Enhanced Course Filtering and Interactions
function initCourseEnhancements() {
  // Course filtering functionality
  const searchInput = document.querySelector('#courses input[type="text"]');
  const categoryFilter = document.querySelector('#courses select:nth-child(2)');
  const levelFilter = document.querySelector('#courses select:nth-child(3)');
  const sortFilter = document.querySelector('#courses select:nth-child(4)');
  const courseCards = document.querySelectorAll('#courses .group');

  function filterCourses() {
    const searchTerm = searchInput.value.toLowerCase();
    const categoryValue = categoryFilter.value;
    const levelValue = levelFilter.value;
    const sortValue = sortFilter.value;

    courseCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      const category = card.querySelector('.rounded-full').textContent.toLowerCase();
      const level = card.querySelector('.text-sm').textContent.toLowerCase();
      const price = parseInt(card.querySelector('.font-bold').textContent.replace(/[^\d]/g, ''));

      let showCard = true;

      // Search filter
      if (searchTerm && !title.includes(searchTerm) && !description.includes(searchTerm)) {
        showCard = false;
      }

      // Category filter
      if (categoryValue && !category.includes(categoryValue.toLowerCase())) {
        showCard = false;
      }

      // Level filter
      if (levelValue && !level.includes(levelValue.toLowerCase())) {
        showCard = false;
      }

      card.style.display = showCard ? 'block' : 'none';
    });

    // Sort functionality
    const visibleCards = Array.from(courseCards).filter(card => card.style.display !== 'none');
    const container = courseCards[0].parentElement;

    visibleCards.sort((a, b) => {
      const priceA = parseInt(a.querySelector('.font-bold').textContent.replace(/[^\d]/g, ''));
      const priceB = parseInt(b.querySelector('.font-bold').textContent.replace(/[^\d]/g, ''));
      const ratingA = parseFloat(a.querySelector('.font-semibold').textContent);
      const ratingB = parseFloat(b.querySelector('.font-semibold').textContent);

      switch(sortValue) {
        case 'price-low':
          return priceA - priceB;
        case 'price-high':
          return priceB - priceA;
        case 'rating':
          return ratingB - ratingA;
        case 'newest':
          return Math.random() - 0.5; // Random for demo
        default:
          return 0;
      }
    });

    visibleCards.forEach(card => container.appendChild(card));
  }

  // Event listeners for filters
  searchInput?.addEventListener('input', filterCourses);
  categoryFilter?.addEventListener('change', filterCourses);
  levelFilter?.addEventListener('change', filterCourses);
  sortFilter?.addEventListener('change', filterCourses);

  // View toggle functionality
  const viewButtons = document.querySelectorAll('#courses .bg-slate-100 button');
  viewButtons.forEach(button => {
    button.addEventListener('click', () => {
      viewButtons.forEach(btn => btn.classList.remove('bg-white', 'text-primary-600'));
      button.classList.add('bg-white', 'text-primary-600');

      const grid = document.querySelector('#courses .grid');
      if (button.querySelector('.material-icons').textContent === 'view_list') {
        grid.className = 'flex flex-col gap-8 mb-12';
        courseCards.forEach(card => {
          card.className = 'group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-primary-200 flex';
        });
      } else {
        grid.className = 'grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12';
        courseCards.forEach(card => {
          card.className = 'group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 overflow-hidden border border-slate-100 hover:border-primary-200';
        });
      }
    });
  });

  // Wishlist functionality
  const wishlistButtons = document.querySelectorAll('#courses button[title="Add to Wishlist"]');
  wishlistButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const icon = button.querySelector('.material-icons');
      const isWishlisted = icon.textContent === 'favorite';

      icon.textContent = isWishlisted ? 'favorite_border' : 'favorite';
      button.classList.toggle('text-red-500', !isWishlisted);

      // Show notification
      showNotification(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist', isWishlisted ? 'info' : 'success');
    });
  });

  // Preview functionality
  const previewButtons = document.querySelectorAll('#courses button[title="Quick Preview"]');
  previewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const card = button.closest('.group');
      const courseTitle = card.querySelector('h3').textContent;
      const courseDesc = card.querySelector('p').textContent;

      // Create modal
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
      modal.innerHTML = `
        <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          <div class="p-6 border-b border-slate-200">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl font-bold text-slate-900">${courseTitle}</h3>
              <button class="text-slate-400 hover:text-slate-600" onclick="this.closest('.fixed').remove()">
                <span class="material-icons">close</span>
              </button>
            </div>
          </div>
          <div class="p-6">
            <p class="text-slate-600 mb-6">${courseDesc}</p>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-slate-900 mb-3">What you'll learn:</h4>
                <ul class="space-y-2 text-sm text-slate-600">
                  <li class="flex items-center">
                    <span class="material-icons text-green-500 mr-2 text-base">check_circle</span>
                    Hands-on projects
                  </li>
                  <li class="flex items-center">
                    <span class="material-icons text-green-500 mr-2 text-base">check_circle</span>
                    Industry best practices
                  </li>
                  <li class="flex items-center">
                    <span class="material-icons text-green-500 mr-2 text-base">check_circle</span>
                    Certificate of completion
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-slate-900 mb-3">Course features:</h4>
                <ul class="space-y-2 text-sm text-slate-600">
                  <li class="flex items-center">
                    <span class="material-icons text-blue-500 mr-2 text-base">schedule</span>
                    Lifetime access
                  </li>
                  <li class="flex items-center">
                    <span class="material-icons text-blue-500 mr-2 text-base">group</span>
                    Community support
                  </li>
                  <li class="flex items-center">
                    <span class="material-icons text-blue-500 mr-2 text-base">verified</span>
                    Verified certificate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    });
  });

  // Progress bar animations
  const progressBars = document.querySelectorAll('#courses .bg-slate-200');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const width = progressBar.style.width;
        progressBar.style.width = '0%';
        setTimeout(() => {
          progressBar.style.width = width;
        }, 500);
      }
    });
  }, observerOptions);

  progressBars.forEach(bar => progressObserver.observe(bar));

  // Enhanced hover effects
  courseCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const progressBar = card.querySelector('.bg-slate-200 .rounded-full');
      if (progressBar) {
        progressBar.style.transform = 'scaleX(1.05)';
      }
    });

    card.addEventListener('mouseleave', () => {
      const progressBar = card.querySelector('.bg-slate-200 .rounded-full');
      if (progressBar) {
        progressBar.style.transform = 'scaleX(1)';
      }
    });
  });
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
    type === 'success' ? 'bg-green-500' :
    type === 'error' ? 'bg-red-500' :
    type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
  } text-white`;

  notification.innerHTML = `
    <div class="flex items-center">
      <span class="material-icons mr-2 text-sm">${
        type === 'success' ? 'check_circle' :
        type === 'error' ? 'error' :
        type === 'warning' ? 'warning' : 'info'
      }</span>
      <span class="text-sm font-medium">${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 100);

  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Professional Navbar Enhancements
function initNavbarEnhancements() {
    // Smooth scroll with offset for fixed navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = 64; // h-16 = 64px
                const targetPosition = target.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced mobile menu with improved animations
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');

            if (isOpen) {
                // Close menu
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = '';
            } else {
                // Open menu
                mobileMenu.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    }

    // Navbar scroll effects
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down - hide navbar
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show navbar
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
    });

    // Enhanced dropdown animations
    const dropdowns = document.querySelectorAll('.group');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            const menu = dropdown.querySelector('[class*="opacity-0"]');
            if (menu) {
                menu.style.transform = 'translateY(0) scale(1)';
                menu.style.opacity = '1';
            }
        });

        dropdown.addEventListener('mouseleave', () => {
            const menu = dropdown.querySelector('[class*="opacity-0"]');
            if (menu) {
                menu.style.transform = 'translateY(-10px) scale(0.95)';
                menu.style.opacity = '0';
            }
        });
    });
}

// Add loading animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fade-in {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-in {
        animation: fade-in 0.8s ease-out forwards;
    }

    .animate-float {
        animation: float 6s ease-in-out infinite;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }

    .animate-pulse-slow {
        animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 3s ease infinite;
    }

    @keyframes gradient {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }

    .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(14, 165, 233, 0.3);
        border-radius: 50%;
        animation: particle-float linear infinite;
    }

    @keyframes particle-float {
        from { transform: translateY(100vh); opacity: 0; }
        to { transform: translateY(-100px); opacity: 1; }
    }

    .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #0ea5e9;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
    }

    .skip-link:focus {
        top: 6px;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    .focus\:not-sr-only:focus {
        position: static;
        width: auto;
        height: auto;
        padding: inherit;
        margin: inherit;
        overflow: visible;
        clip: auto;
        white-space: normal;
    }
`;
document.head.appendChild(style);

// Performance optimization
if ('IntersectionObserver' in window) {
    // Use Intersection Observer for lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // Could send error reports to monitoring service
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // Could send error reports to monitoring service
});

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