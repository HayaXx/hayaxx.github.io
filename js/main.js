document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true
    });
  const liquidProgresses = document.querySelectorAll('.liquid-progress');
  
  const animateLiquidProgress = () => {
    liquidProgresses.forEach(progress => {
      const percent = progress.getAttribute('data-percent');
      progress.style.height = '0%';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            progress.style.height = percent + '%';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(progress);
    });
  };
  
  animateLiquidProgress();
  
  // Create dynamic bubbles
  const bubblesContainer = document.querySelector('.bubbles');
  for (let i = 0; i < 10; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble absolute rounded-full bg-neon-blue/20 animate-float';
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.bottom = '-' + (Math.random() * 50 + 20) + 'px';
    bubble.style.width = (Math.random() * 20 + 10) + 'px';
    bubble.style.height = bubble.style.width;
    bubble.style.animationDelay = (Math.random() * 5) + 's';
    bubble.style.animationDuration = (Math.random() * 10 + 10) + 's';
    bubblesContainer.appendChild(bubble);
  }
    
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function () {
      const isHidden = mobileMenu.classList.contains('hidden');

      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('animate-fade-in');

        // Change to X icon
        mobileMenuButton.innerHTML = `
          <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        `;
      } else {
        mobileMenu.classList.add('hidden');

        // Change back to hamburger
        mobileMenuButton.innerHTML = `
          <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        `;
      }
       document.querySelectorAll('.glitch-text').forEach(function(el) {
        el.setAttribute('data-text', el.textContent);
      });
      
      // Add dynamic particles
      addParticles();
      
      // Set equal heights for project cards
      equalizeCardHeights();
      
      // Handle window resize
      window.addEventListener('resize', function() {
        equalizeCardHeights();
      });
    });
    function equalizeCardHeights() {
      // Reset heights
      document.querySelectorAll('.project-card').forEach(function(card) {
        card.style.height = 'auto';
      });
      
      // Calculate tallest card in each row
      const grid = document.querySelector('.grid');
      if (!grid) return;
      
      let maxHeight = 0;
      const cards = document.querySelectorAll('.project-card');
      
      // Find the tallest card
      cards.forEach(function(card) {
        const frontContent = card.querySelector('.project-card-front').scrollHeight;
        const backContent = card.querySelector('.project-card-back').scrollHeight;
        const tallest = Math.max(frontContent, backContent);
        
        if (tallest > maxHeight) {
          maxHeight = tallest;
        }
      });
      
      // Apply height to all cards
      cards.forEach(function(card) {
        card.style.height = (maxHeight + 20) + 'px'; // Add some padding
      });
    }

    function addParticles() {
      const particlesContainer = document.querySelector('.floating-particles');
      if (!particlesContainer) return;
      
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 2;
        
        // Random color
        const colors = ['#00f0ff', '#ff00ff', '#00ff66'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Set styles
        particle.style.cssText = `
          position: absolute;
          top: ${posY}%;
          left: ${posX}%;
          width: ${size}px;
          height: ${size}px;
          background-color: ${color};
          border-radius: 50%;
          filter: blur(1px);
          opacity: ${Math.random() * 0.5 + 0.2};
          animation: floatParticle ${Math.random() * 20 + 10}s linear infinite;
        `;
        
        particlesContainer.appendChild(particle);
      }
    }

    // Particle floating animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatParticle {
        0% {
          transform: translate(0, 0);
        }
        25% {
          transform: translate(${Math.random() * 100}px, ${Math.random() * 100}px);
        }
        50% {
          transform: translate(${Math.random() * -100}px, ${Math.random() * 100}px);
        }
        75% {
          transform: translate(${Math.random() * -100}px, ${Math.random() * -100}px);
        }
        100% {
          transform: translate(0, 0);
        }
      }
    `;
    document.head.appendChild(style);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    
    
    // GSAP animations
    gsap.from(".nav-link", {
        duration: 1,
        y: -50,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out"
    });
    
    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'js/particles.json', function() {
            console.log('Particles.js loaded');
        });
    }
    
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});