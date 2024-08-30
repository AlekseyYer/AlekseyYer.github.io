document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const grids = document.querySelectorAll('.skills-grid');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            grids.forEach(grid => grid.style.display = 'none');
            document.getElementById(tab.getAttribute('data-tab')).style.display = 'grid';
        });
    });
});
