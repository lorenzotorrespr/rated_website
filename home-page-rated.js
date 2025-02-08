// Function to create stars (for the space travel animation)
function createStars() {
    const starsContainer = document.querySelector('.stars-container');
    const numStars = 1000; // Number of stars

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Randomize star position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const z = Math.random() * -2000;

        star.style.setProperty('--x', `${x}px`);
        star.style.setProperty('--y', `${y}px`);

        const duration = Math.random() * 5 + 3; // Between 3 and 8 seconds
        star.style.animationDuration = `${duration}s`;

        const colors = ['#FFFFFF', '#AAAAAA']; // White and Grey
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        star.style.backgroundColor = randomColor;

        starsContainer.appendChild(star);
    }
}

// Function to handle the space travel animation
function handleSpaceTravelAnimation() {
    const spaceTravel = document.getElementById('space-travel');

    // Check if the animation has already been shown in this session
    if (sessionStorage.getItem('animationShown') === 'true') {
        spaceTravel.style.display = 'none'; // Hide the animation
        return; // Exit the function
    }

    // If the animation hasn't been shown, display it
    createStars();

    // Hide the animation after 10 seconds
    setTimeout(() => {
        spaceTravel.style.opacity = '0';
        spaceTravel.style.visibility = 'hidden';
    }, 6000); // 6 seconds

    // Mark the animation as shown in session storage
    sessionStorage.setItem('animationShown', 'true');
}

// Run the animation handler on page load
window.addEventListener('load', handleSpaceTravelAnimation);

// Smooth Transition to Homepage
function transitionToHomepage() {
    const spaceTravel = document.getElementById('space-travel');
    const body = document.body;

    // Hide the space travel animation after 15 seconds
    setTimeout(() => {
        spaceTravel.style.opacity = '0'; // Fade out
        spaceTravel.style.visibility = 'hidden'; // Hide after fade-out
        spaceTravel.classList.add('hidden'); // Add a class to hide the logo and tagline

        // Add a class to the body to indicate the transition is complete
        body.classList.add('scrolled');
    }, 12000); // 15 seconds total
}

// Run the star creation and transition functions on page load
window.addEventListener('load', () => {
    createStars();
    transitionToHomepage();
});

// Toggle Navigation Menu
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Close Menu and Smooth Scroll When a Link is Clicked
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Close the hamburger menu
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('active');

        // Smooth scroll to the target section
        const targetId = link.getAttribute('href'); // Get the href value (e.g., "#shop")
        if (targetId.startsWith('#')) { // Check if it's an internal link
            e.preventDefault(); // Prevent default anchor behavior
            const targetSection = document.querySelector(targetId); // Find the target section
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
            }
        }
    });
});

// Open Cart (Placeholder Function)
function openCart() {
    alert('Cart will open here!'); // Replace with actual cart functionality
}

// Hide Landing Screen on Scroll
window.addEventListener('load', () => {
    const landingScreen = document.getElementById('landing-screen');
    const body = document.body;

    setTimeout(() => {
        landingScreen.style.opacity = '0';
        body.classList.add('scrolled');
    }, 5000); // Adjust the delay (in milliseconds) as needed
});

// Scroll Animation Script
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const checkVisibility = () => {
        fadeElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            // Check if the element is in the viewport
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible'); // Optional: Reset if needed
            }
        });
    };

    // Initial check
    checkVisibility();

    // Check on scroll
    window.addEventListener('scroll', checkVisibility);
});


