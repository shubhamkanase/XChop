function toggleMenu() {
    var navbarLinks = document.getElementById('navbar-links');
    if (navbarLinks.style.display === 'block') {
        navbarLinks.style.display = 'none';
    } else {
        navbarLinks.style.display = 'block';
    }
}





document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const steps = document.querySelectorAll('.step');
    const totalSteps = steps.length;

    function showStep(index) {
        steps.forEach((step, i) => {
            step.style.display = i === index ? 'block' : 'none';
        });
    }

    function createSlider() {
        const slider = document.createElement('div');
        slider.className = 'slider';
        
        const prevButton = document.createElement('button');
        prevButton.innerText = "<";
        prevButton.onclick = () => {
            currentIndex = (currentIndex - 1 + totalSteps) % totalSteps;
            showStep(currentIndex);
        };
        
        const nextButton = document.createElement('button');
        nextButton.innerText = '>';
        nextButton.onclick = () => {
            currentIndex = (currentIndex + 1) % totalSteps;
            showStep(currentIndex);
        };
        
        slider.appendChild(prevButton);
        slider.appendChild(nextButton);
        document.querySelector('.container2').appendChild(slider);
    }

    function setupSlider() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) { 
            showStep(currentIndex);
            createSlider();
        } else {
            steps.forEach(step => step.style.display = 'block'); 
        }
    }

    setupSlider();
    window.addEventListener('resize', setupSlider); 
});
