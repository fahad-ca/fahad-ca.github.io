document.addEventListener('DOMContentLoaded', function() {
    
    // Typed.js animation for the hero section
    const typed = new Typed('.typed-text', {
        strings: ['CAF Qualified Student', 'Audit Professional', 'Financial Analyst'],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
        smartBackspace: true,
    });

    // On-scroll fade-in animation for sections
    const sections = document.querySelectorAll('.scroll-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"], .hero-buttons a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});