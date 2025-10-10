/**
 * SK AI Hub - Material UI Enhanced JavaScript
 * Advanced interactive features and animations
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
  }

  // ===== LOADING SCREEN =====
  setupLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (!loadingScreen) return;

    // Simulate loading time
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }, 2000);
  }

  // ===== NEURAL NETWORK ANIMATION =====
  setupNeuralNetwork() {
    const canvas = document.getElementById('neural-network');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const nodes = [];
    const connections = [];
    const nodeCount = 50;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2
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
            opacity: (150 - distance) / 150 * 0.3
          });
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${node.opacity})`;
        ctx.fill();
      });

      // Draw connections
      connections.forEach(conn => {
        const from = nodes[conn.from];
        const to = nodes[conn.to];

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = `rgba(139, 92, 246, ${conn.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }

  // ===== NAVIGATION =====
  setupNavigation() {
    const topAppBar = document.querySelector('.mdc-top-app-bar');
    if (!topAppBar) return;

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        topAppBar.classList.add('elevated');
      } else {
        topAppBar.classList.remove('elevated');
      }

      lastScrollY = currentScrollY;
    });

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

  // ===== SCROLL EFFECTS =====
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
    document.querySelectorAll('.section-container, .feature-card, .course-card, .tool-card, .testimonial-card').forEach(el => {
      observer.observe(el);
    });

    // Counter animation for stats
    const animateCounters = () => {
      document.querySelectorAll('.stat-number').forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            counter.textContent = target.toLocaleString();
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current).toLocaleString();
          }
        }, 16);
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

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }
  }

  // ===== ANIMATIONS =====
  setupAnimations() {
    // Add fade-in animation class
    const style = document.createElement('style');
    style.textContent = `
      .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
      }
    `;
    document.head.appendChild(style);

    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const heroBackground = document.querySelector('.hero-background');
      if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });

    // Floating animation for elements
    document.querySelectorAll('.feature-icon, .tool-icon, .achievement-icon').forEach(icon => {
      icon.style.animation = `float 6s ease-in-out infinite`;
    });

    // Add floating animation
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
    `;
    document.head.appendChild(floatStyle);
  }

  // ===== CONTACT FORM =====
  setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('.primary-submit');
      const originalText = submitBtn.textContent;

      // Show loading state
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      try {
        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Show success message
        this.showNotification('Message sent successfully!', 'success');

        // Reset form
        form.reset();

      } catch (error) {
        this.showNotification('Failed to send message. Please try again.', 'error');
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        this.validateField(input);
      });
    });
  }

  validateField(field) {
    const value = field.value.trim();
    const isValid = value.length > 0;

    field.classList.toggle('mdc-text-field--invalid', !isValid);

    return isValid;
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;

    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 16px 24px;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 1000;
      animation: slideIn 0.3s ease-out;
      ${type === 'success' ? 'background: #10b981;' : ''}
      ${type === 'error' ? 'background: #ef4444;' : ''}
      ${type === 'info' ? 'background: #6366f1;' : ''}
    `;

    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 5000);
  }

  // ===== BACK TO TOP =====
  setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===== MOBILE MENU =====
  setupMobileMenu() {
    const drawer = document.querySelector('.mdc-drawer');
    const menuBtn = document.getElementById('menu-button');
    const scrim = document.querySelector('.mdc-drawer-scrim');

    if (!drawer || !menuBtn) return;

    menuBtn.addEventListener('click', () => {
      drawer.classList.toggle('mdc-drawer--open');
    });

    if (scrim) {
      scrim.addEventListener('click', () => {
        drawer.classList.remove('mdc-drawer--open');
      });
    }

    // Close drawer on navigation
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('mdc-drawer--open');
      });
    });
  }

  // ===== INTERACTIVE DEMO =====
  setupInteractiveDemo() {
    const demoScreen = document.querySelector('.demo-screen');
    if (!demoScreen) return;

    const codeSamples = [
      `import tensorflow as tf
from sklearn.model_selection import train_test_split

# Load and preprocess data
(X_train, X_test, y_train, y_test) = train_test_split(
    data, labels, test_size=0.2, random_state=42
)

# Build neural network model
model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(10, activation='softmax')
])

# Compile and train
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

model.fit(X_train, y_train, epochs=10, validation_data=(X_test, y_test))`,
      `import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

# Load dataset
df = pd.read_csv('customer_data.csv')

# Preprocessing
features = df[['age', 'income', 'spending_score']]
features_scaled = (features - features.mean()) / features.std()

# Apply K-means clustering
kmeans = KMeans(n_clusters=5, random_state=42)
clusters = kmeans.fit_predict(features_scaled)

# Visualize results
plt.scatter(features_scaled.iloc[:, 0], features_scaled.iloc[:, 1],
           c=clusters, cmap='viridis')
plt.title('Customer Segmentation')
plt.show()`,
      `import cv2
import numpy as np
from tensorflow.keras.applications import MobileNetV2

# Load pre-trained model
model = MobileNetV2(weights='imagenet')

# Load and preprocess image
img = cv2.imread('image.jpg')
img = cv2.resize(img, (224, 224))
img = np.expand_dims(img, axis=0)
img = tf.keras.applications.mobilenet_v2.preprocess_input(img)

# Make prediction
predictions = model.predict(img)
decoded_predictions = tf.keras.applications.imagenet_utils.decode_predictions(predictions)

print("Top predictions:")
for pred in decoded_predictions[0][:3]:
    print(f"{pred[1]}: {pred[2]*100:.2f}%")`
    ];

    let currentSample = 0;
    const codeContent = demoScreen.querySelector('.editor-content pre');

    // Tab switching
    demoScreen.querySelectorAll('.tab').forEach((tab, index) => {
      tab.addEventListener('click', () => {
        // Update active tab
        demoScreen.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update code content
        currentSample = index;
        codeContent.textContent = codeSamples[currentSample];

        // Update accuracy meter
        const accuracyMeter = document.querySelector('.meter-fill');
        const accuracyValue = document.querySelector('.meter-value');

        const accuracies = ['94.2%', '87.6%', '91.8%'];
        const percentages = [94.2, 87.6, 91.8];

        accuracyMeter.style.width = '0%';
        setTimeout(() => {
          accuracyMeter.style.width = `${percentages[currentSample]}%`;
          accuracyValue.textContent = accuracies[currentSample];
        }, 100);
      });
    });

    // Initialize with first sample
    codeContent.textContent = codeSamples[0];
  }
}

// ===== MATERIAL DESIGN COMPONENTS INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Material Design components
  mdc.autoInit();

  // Initialize SK AI Hub
  new SKAIHub();

  // Add loading class to body
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
if ('IntersectionObserver' in window) {
  // Use Intersection Observer for performance
} else {
  // Fallback for older browsers
  document.querySelectorAll('[data-animate]').forEach(el => {
    el.classList.add('animate-in');
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
