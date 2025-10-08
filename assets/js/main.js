
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

    proPrice.textContent = '$49';
    enterprisePrice.textContent = '$199';
    proYearly.textContent = 'or $470/year';
    enterpriseYearly.textContent = 'or $1910/year';
  });

  yearlyBtn.addEventListener('click', () => {
    yearlyBtn.classList.add('bg-primary-600', 'text-white');
    yearlyBtn.classList.remove('text-neutral-600');
    monthlyBtn.classList.remove('bg-primary-600', 'text-white');
    monthlyBtn.classList.add('text-neutral-600');

    proPrice.textContent = '$39';
    enterprisePrice.textContent = '$159';
    proYearly.textContent = 'Save $120/year';
    enterpriseYearly.textContent = 'Save $480/year';
  });
}

// FAQ Accordion Functionality
document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.material-icons');

    // Close all other FAQ items
    document.querySelectorAll('.faq-content').forEach(item => {
      if (item !== content) {
        item.classList.add('hidden');
        item.previousElementSibling.querySelector('.material-icons').style.transform = 'rotate(0deg)';
      }
    });

    // Toggle current FAQ item
    content.classList.toggle('hidden');
    icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
  });
});

// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeToggleDesktop = document.getElementById('dark-mode-toggle-desktop');

function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');

  if (isDark) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    updateDarkModeIcons(false);
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    updateDarkModeIcons(true);
  }
}

function updateDarkModeIcons(isDark) {
  const icons = document.querySelectorAll('#dark-mode-toggle .material-icons, #dark-mode-toggle-desktop .material-icons');
  icons.forEach(icon => {
    icon.textContent = isDark ? 'light_mode' : 'dark_mode';
  });
}

// Initialize dark mode
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  document.documentElement.classList.add('dark');
  updateDarkModeIcons(true);
}

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', toggleDarkMode);
}

if (darkModeToggleDesktop) {
  darkModeToggleDesktop.addEventListener('click', toggleDarkMode);
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    if (e.matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateDarkModeIcons(e.matches);
  }
});
