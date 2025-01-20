

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-overview, .testimonials, .signup-form').forEach(section => {
    observer.observe(section);
});

// Form Validation
const form = document.querySelector('.signup-form form');
const feedback = document.querySelector('.feedback-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;

    if (!email.includes('@')) {
        feedback.textContent = 'Veuillez entrer une adresse email valide.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Inscription réussie ! Merci de nous rejoindre.';
        feedback.style.color = 'green';
    }
});

// Testimonial Slider
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const nextTestimonial = () => {
    testimonials[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].classList.add('active');
};
setInterval(nextTestimonial, 5000);
