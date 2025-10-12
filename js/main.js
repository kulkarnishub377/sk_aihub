// SK AI Hub - Premium JavaScript Functionality
// ============================================

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
    // Could send error to analytics service here
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // Could send error to analytics service here
});