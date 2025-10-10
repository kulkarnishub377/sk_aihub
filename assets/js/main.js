
// Loading screen
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }, 1000); // Show loading for at least 1 second
  }
});

// Neural Network Animation
const canvas = document.getElementById('neural-network-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let animationId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Node {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2 + 1;
      this.connections = [];
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = '#667eea';
      ctx.fill();
    }
  }

  const nodes = [];
  const numNodes = 50;

  function initNodes() {
    nodes.length = 0;
    for (let i = 0; i < numNodes; i++) {
      nodes.push(new Node(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }
  }

  function drawConnections() {
    ctx.strokeStyle = 'rgba(102, 126, 234, 0.1)';
    ctx.lineWidth = 1;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    nodes.forEach(node => {
      node.update();
      node.draw();
    });

    drawConnections();
    animationId = requestAnimationFrame(animate);
  }

  resizeCanvas();
  initNodes();
  animate();

  window.addEventListener('resize', () => {
    resizeCanvas();
    initNodes();
  });
}

// Back to top button show/hide on scroll
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  const toggleBackToTop = () => {
    if (window.scrollY > 300) {
      backToTop.classList.remove('opacity-0', 'invisible', 'translate-y-4');
      backToTop.classList.add('opacity-100', 'visible', 'translate-y-0');
    } else {
      backToTop.classList.add('opacity-0', 'invisible', 'translate-y-4');
      backToTop.classList.remove('opacity-100', 'visible', 'translate-y-0');
    }
  }
  window.addEventListener('load', toggleBackToTop);
  document.addEventListener('scroll', toggleBackToTop);

  // Smooth scroll to top
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#') && href !== '#') {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = href === '#hero' ? 0 : 80; // No offset for hero, 80px for others
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
        history.replaceState(null, null, href);
      }
    }
  });
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('hidden');
    if (isOpen) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('block');
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('block');
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('block');
    }
  });
}

// Scrollspy: highlight nav as you scroll
function onScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;
  let found = false;
  sections.forEach(section => {
    if (!found && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      // Remove active class from all nav links
      document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.classList.remove('text-primary-600', 'bg-primary-50');
        link.classList.add('text-neutral-700');
      });
      // Add active class to current section link
      const activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
      if (activeLink) {
        activeLink.classList.add('text-primary-600');
        activeLink.classList.remove('text-neutral-700');
      }
      found = true;
    }
  });
  if (!found) {
    // Default to hero section
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
      link.classList.remove('text-primary-600', 'bg-primary-50');
      link.classList.add('text-neutral-700');
    });
    const heroLink = document.querySelector('nav a[href="#hero"]');
    if (heroLink) {
      heroLink.classList.add('text-primary-600');
      heroLink.classList.remove('text-neutral-700');
    }
  }
}
window.addEventListener('scroll', onScrollSpy);
window.addEventListener('load', onScrollSpy);

// Contact form handling
const contactForm = document.getElementById('enquiry-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Basic validation
    let isValid = true;
    const requiredFields = ['name', 'email', 'phone', 'course', 'message'];

    requiredFields.forEach(field => {
      const element = document.getElementById(field);
      if (!data[field] || !data[field].trim()) {
        element.classList.add('border-red-500');
        element.classList.remove('border-neutral-300');
        isValid = false;
      } else {
        element.classList.remove('border-red-500');
        element.classList.add('border-neutral-300');
      }
    });

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailRegex.test(data.email)) {
      document.getElementById('email').classList.add('border-red-500');
      document.getElementById('email').classList.remove('border-neutral-300');
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (data.phone && !phoneRegex.test(data.phone.replace(/\D/g, ''))) {
      document.getElementById('phone').classList.add('border-red-500');
      document.getElementById('phone').classList.remove('border-neutral-300');
      isValid = false;
    }

    if (isValid) {
      // Show success message
      const successMessage = document.getElementById('success-message');
      if (successMessage) {
        successMessage.classList.remove('hidden');
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          successMessage.classList.add('hidden');
        }, 5000);
      }

      // Here you would typically send the data to your server
      console.log('Form submitted:', data);
    }
  });
}

// Animated counters for stats
function animateCounter(counter) {
  const target = parseInt(counter.getAttribute('data-target')) || parseInt(counter.textContent.replace(/[^\d]/g, ''));
  const duration = 2000; // 2 seconds
  const step = target / (duration / 16); // 60fps
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      counter.textContent = target.toLocaleString() + (target < 100 ? '+' : '');
      clearInterval(timer);
    } else {
      counter.textContent = Math.floor(current).toLocaleString() + (target < 100 ? '+' : '');
    }
  }, 16);
}

// Trigger counter animations when they come into view
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -50px 0px'
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('[data-target]');
      counters.forEach(counter => {
        if (!counter.hasAttribute('data-animated')) {
          animateCounter(counter);
          counter.setAttribute('data-animated', 'true');
        }
      });
    }
  });
}, observerOptions);

// Observe sections with counters
document.querySelectorAll('#hero, #about').forEach(section => {
  counterObserver.observe(section);
});

// Navbar background on scroll
const navbar = document.querySelector('nav');
if (navbar) {
  const updateNavbar = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-lg');
    } else {
      navbar.classList.remove('shadow-lg');
    }
  };
  window.addEventListener('scroll', updateNavbar);
  window.addEventListener('load', updateNavbar);
}

// Smooth hover effects for cards
document.querySelectorAll('.hover\\:shadow-xl').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px)';
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Typing effect for hero section (updated for new structure)
const typedText = document.querySelector('.typed-text');
if (typedText) {
  const phrases = [
    "Master Artificial Intelligence and Machine Learning.",
    "Build intelligent systems with Python, TensorFlow, and PyTorch.",
    "Create AI-powered applications and solutions.",
    "Join 2000+ AI innovators shaping the future!"
  ];
  let phraseIndex = 0, charIndex = 0, typing = true;

  function typeEffect() {
    if (typing) {
      if (charIndex < phrases[phraseIndex].length) {
        typedText.textContent += phrases[phraseIndex][charIndex++];
        setTimeout(typeEffect, 50);
      } else {
        typing = false;
        setTimeout(typeEffect, 1500);
      }
    } else {
      if (charIndex > 0) {
        typedText.textContent = phrases[phraseIndex].substring(0, --charIndex);
        setTimeout(typeEffect, 30);
      } else {
        typing = true;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500);
      }
    }
  }
  typeEffect();
}

// Animate SVG lines in backgrounds (if present)
document.addEventListener('DOMContentLoaded', function() {
  const heroBg = document.querySelector('.hero-bg-svg');
  if (heroBg) {
    const lines = heroBg.querySelectorAll('polyline');
    let glow = true;
    setInterval(() => {
      lines.forEach(line => {
        line.setAttribute('opacity', glow ? '0.18' : '0.08');
      });
      glow = !glow;
    }, 1200);
  }
  const coursesBg = document.getElementById('courses-bg');
  if (coursesBg) {
    const lines = coursesBg.querySelectorAll('polyline');
    let glow = true;
    setInterval(() => {
      lines.forEach(line => {
        line.setAttribute('opacity', glow ? '0.16' : '0.08');
      });
      glow = !glow;
    }, 1400);
  }
});

// Newsletter form success message (if present)
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      emailInput.classList.add('border-red-500');
      return;
    }

    emailInput.classList.remove('border-red-500');

    // Show success message
    const successMessage = document.getElementById('newsletter-success');
    if (successMessage) {
      successMessage.classList.remove('hidden');
      newsletterForm.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 5000);
    }

    // Here you would typically send the data to your server
    console.log('Newsletter subscription:', email);
  });
}

// Pricing Toggle Functionality
const monthlyBtn = document.getElementById('monthly-btn');
const yearlyBtn = document.getElementById('yearly-btn');
const proPrice = document.getElementById('pro-price');
const enterprisePrice = document.getElementById('enterprise-price');
const proYearly = document.getElementById('pro-yearly');
const enterpriseYearly = document.getElementById('enterprise-yearly');

if (monthlyBtn && yearlyBtn) {
  monthlyBtn.addEventListener('click', () => {
    monthlyBtn.classList.add('bg-primary-600', 'text-white');
    monthlyBtn.classList.remove('text-neutral-600');
    yearlyBtn.classList.remove('bg-primary-600', 'text-white');
    yearlyBtn.classList.add('text-neutral-600');

    proPrice.textContent = '₹3,999';
    enterprisePrice.textContent = '₹15,999';
    proYearly.textContent = 'or ₹38,000/year';
    enterpriseYearly.textContent = 'or ₹153,000/year';
  });

  yearlyBtn.addEventListener('click', () => {
    yearlyBtn.classList.add('bg-primary-600', 'text-white');
    yearlyBtn.classList.remove('text-neutral-600');
    monthlyBtn.classList.remove('bg-primary-600', 'text-white');
    monthlyBtn.classList.add('text-neutral-600');

    proPrice.textContent = '₹3,199';
    enterprisePrice.textContent = '₹12,799';
    proYearly.textContent = 'Save ₹9,600/year';
    enterpriseYearly.textContent = 'Save ₹38,400/year';
  });
}

// Enhanced Navbar Functionality
class EnhancedNavbar {
  constructor() {
    this.navbar = document.getElementById('main-navbar');
    this.mobileMenuButton = document.getElementById('mobile-menu-button');
    this.mobileMenu = document.getElementById('mobile-menu');

    this.init();
  }

  init() {
    this.setupScrollEffects();
    this.setupMobileMenu();
    this.setupActiveStates();
    this.setupKeyboardNavigation();
    this.setupAccessibility();
  }

  setupScrollEffects() {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const scrollY = window.scrollY;
      const navbarHeight = this.navbar.offsetHeight;

      // Add/remove scrolled class for background changes
      if (scrollY > 50) {
        this.navbar.classList.add('navbar-scrolled');
      } else {
        this.navbar.classList.remove('navbar-scrolled');
      }

      // Hide/show navbar on scroll (optional - can be enabled if desired)
      // if (scrollY > lastScrollY && scrollY > navbarHeight) {
      //   this.navbar.style.transform = 'translateY(-100%)';
      // } else {
      //   this.navbar.style.transform = 'translateY(0)';
      // }

      lastScrollY = scrollY;
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
  }

  setupMobileMenu() {
    if (!this.mobileMenuButton || !this.mobileMenu) return;

    this.mobileMenuButton.addEventListener('click', () => {
      const isOpen = this.mobileMenu.classList.contains('hidden');

      if (isOpen) {
        this.mobileMenu.classList.remove('hidden');
        this.mobileMenu.classList.add('block');
        this.mobileMenuButton.setAttribute('aria-expanded', 'true');
        this.mobileMenuButton.querySelector('.material-icons').textContent = 'close';
      } else {
        this.mobileMenu.classList.add('hidden');
        this.mobileMenu.classList.remove('block');
        this.mobileMenuButton.setAttribute('aria-expanded', 'false');
        this.mobileMenuButton.querySelector('.material-icons').textContent = 'menu';
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!this.mobileMenuButton.contains(e.target) && !this.mobileMenu.contains(e.target)) {
        this.closeMobileMenu();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileMenu();
      }
    });
  }

  closeMobileMenu() {
    if (this.mobileMenu) {
      this.mobileMenu.classList.add('hidden');
      this.mobileMenu.classList.remove('block');
    }
    if (this.mobileMenuButton) {
      this.mobileMenuButton.setAttribute('aria-expanded', 'false');
      this.mobileMenuButton.querySelector('.material-icons').textContent = 'menu';
    }
  }

  setupKeyboardNavigation() {
    // Enhanced keyboard navigation for dropdowns
    const dropdownButtons = document.querySelectorAll('[role="button"][aria-haspopup="true"]');

    dropdownButtons.forEach(button => {
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          button.click();
        }
      });
    });
  }

  performSearch(query, courses) {
    if (!query) {
      this.searchResults.innerHTML = '<div class="text-center text-neutral-500 py-8">Start typing to search courses...</div>';
      return;
    }

    const results = courses.filter(course =>
      course.title.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query)
    );

    if (results.length === 0) {
      this.searchResults.innerHTML = '<div class="text-center text-neutral-500 py-8">No courses found matching your search.</div>';
      return;
    }

    const resultsHTML = results.map(course => `
      <a href="${course.url}" class="flex items-center p-4 rounded-xl hover:bg-primary-50 transition-all duration-200 group">
        <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4">
          <span class="material-icons text-white text-sm">school</span>
        </div>
        <div class="flex-1">
          <div class="font-semibold text-neutral-900 group-hover:text-primary-600">${course.title}</div>
          <div class="text-sm text-neutral-500">${course.category}</div>
        </div>
        <span class="material-icons text-neutral-400 group-hover:text-primary-600 transition-colors duration-300">arrow_forward</span>
      </a>
    `).join('');

    this.searchResults.innerHTML = resultsHTML;
  }

  closeSearch() {
    this.searchOverlay.classList.add('hidden');
    this.searchInput.value = '';
    this.searchResults.innerHTML = '<div class="text-center text-neutral-500 py-8">Start typing to search courses...</div>';
  }

  setupActiveStates() {
    // Manual active state management - only on click, not on scroll
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');
      });
    });
  }

  setupKeyboardNavigation() {
    // Enhanced keyboard navigation for dropdowns
    const dropdownButtons = document.querySelectorAll('[role="button"][aria-haspopup="true"]');

    dropdownButtons.forEach(button => {
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          button.click();
        }
      });
    });
  }

  setupAccessibility() {
    // Add ARIA labels and improve accessibility
    const dropdowns = document.querySelectorAll('.relative.group');
    dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('button');
      const menu = dropdown.querySelector('[role="menu"]') || dropdown.querySelector('div:last-child');

      if (button && menu) {
        button.setAttribute('aria-haspopup', 'true');
        button.setAttribute('aria-expanded', 'false');
        menu.setAttribute('role', 'menu');

        button.addEventListener('click', () => {
          const isExpanded = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
        });
      }
    });

    // Focus management for mobile menu
    if (this.mobileMenuButton) {
      this.mobileMenuButton.setAttribute('aria-label', 'Toggle mobile menu');
      this.mobileMenuButton.setAttribute('aria-expanded', 'false');
    }
  }
}

// Initialize enhanced navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new EnhancedNavbar();
});

// Add CSS for navbar scroll effects
const style = document.createElement('style');
style.textContent = `
  .navbar-scrolled {
    background: rgba(255, 255, 255, 0.98) !important;
    backdrop-filter: blur(20px) !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
  }

  .nav-link.active {
    color: #0284c7 !important;
    background-color: rgba(2, 132, 199, 0.1) !important;
  }

  .nav-link.active .absolute.bottom-0 {
    width: 100% !important;
  }

  .course-dropdown-item:hover {
    transform: translateX(4px);
  }

  .mobile-nav-link:hover {
    background-color: rgba(2, 132, 199, 0.1);
    transform: translateX(4px);
  }

  @media (max-width: 1024px) {
    .nav-link .material-icons {
      opacity: 1 !important;
    }
  }
`;
document.head.appendChild(style);
