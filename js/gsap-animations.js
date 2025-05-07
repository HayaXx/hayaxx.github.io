// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    // Hero section animations
    gsap.from('.hero-title', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.5
    });
    
    gsap.from('.hero-subtitle', {
        duration: 1.5,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 1
    });
    
    gsap.from('.hero-buttons', {
        duration: 1,
        y: 20,
        opacity: 0,
        ease: 'power3.out',
        delay: 1.5
    });
    
    gsap.from('.hero-image', {
        duration: 1.5,
        x: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.8
    });
    
    // Scroll animations for sections
    gsap.utils.toArray('section').forEach((section, i) => {
        if (i > 0) { // Skip hero section
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        }
    });
    
    // Portfolio item hover animations
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item.querySelector('.portfolio-overlay'), {
                opacity: 1,
                duration: 0.3
            });
            
            gsap.to(item.querySelector('img'), {
                scale: 1.1,
                duration: 0.5
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item.querySelector('.portfolio-overlay'), {
                opacity: 0,
                duration: 0.3
            });
            
            gsap.to(item.querySelector('img'), {
                scale: 1,
                duration: 0.5
            });
        });
    });
    
    // Navigation link hover animations
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                color: '#c1272d',
                duration: 0.3
            });
        });
        
        link.addEventListener('mouseleave', () => {
            if (!link.classList.contains('active')) {
                gsap.to(link, {
                    color: 'white',
                    duration: 0.3
                });
            }
        });
    });
    
    // Social icon hover animations
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                backgroundColor: '#c1272d',
                y: -5,
                duration: 0.3
            });
        });
        
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                y: 0,
                duration: 0.3
            });
        });
    });
    
    // Form input focus animations
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                borderColor: '#c1272d',
                duration: 0.3
            });
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                gsap.to(input, {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    duration: 0.3
                });
            }
        });
    });
});