document.addEventListener('DOMContentLoaded', function() {
    // Simple navigation highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname;
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === '#about' && (currentPage.endsWith('index.html') || currentPage.endsWith('/'))) {
            link.classList.add('active');
        } else if (link.getAttribute('href') === 'courses.html' && currentPage.includes('courses.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});