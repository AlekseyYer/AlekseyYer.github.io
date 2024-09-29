// Project Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const carouselSlide = document.querySelector('.carousel-slide');
    const projects = document.querySelectorAll('.project');

    let currentIndex = 0;
    const totalProjects = projects.length;

    function showProject(index) {
        carouselSlide.style.transform = `translateX(${-index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalProjects; // Loop back to the first project
        showProject(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalProjects) % totalProjects; // Loop to the last project
        showProject(currentIndex);
    });

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.header .nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Skills Tabs Functionality
    const tabs = document.querySelectorAll('.tab');
    const skillsGrids = document.querySelectorAll('.skills-grid');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Hide all skills grids
            skillsGrids.forEach(grid => grid.style.display = 'none');
            // Add active class to clicked tab
            tab.classList.add('active');
            // Show the corresponding skills grid
            document.getElementById(tab.getAttribute('data-tab')).style.display = 'flex';
        });
    });

    // Set initial display for skills grids
    document.getElementById('all').style.display = 'flex';
});

// Hamburger Menu Functionality
function toggleMenu() {
    const navMenu = document.querySelector('.header .nav');
    navMenu.classList.toggle('active');
}

