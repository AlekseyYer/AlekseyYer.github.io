document.addEventListener('DOMContentLoaded', function() {
    // Project Carousel Functionality
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const carouselSlide = document.querySelector('.carousel-slide');
    const projects = document.querySelectorAll('.project');

    let currentIndex = 0;
    const totalProjects = projects.length;

    function showProject(index) {
        const slideWidth = projects[0].clientWidth;
        carouselSlide.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalProjects; // Always loop to the beginning
        showProject(currentIndex);
        prevBtn.style.display = 'block'; // Ensure left arrow is visible
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalProjects) % totalProjects; // Loop to the last project
        showProject(currentIndex);
        nextBtn.style.display = 'block'; // Ensure right arrow is visible
    });
    
    // Make sure arrows never disappear
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
});
