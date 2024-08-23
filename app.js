$(document).ready(function () {
    // Initialize slider with Slick
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });

    // Mobile navigation functionality
    const hamberger = document.querySelector('.hamberger');
    const times = document.querySelector('.times');
    const mobileNav = document.querySelector('.mobile-nav');

    // Function to open mobile navigation
    function openMobileNav() {
        mobileNav.classList.add('open');
    }

    // Function to close mobile navigation
    function closeMobileNav() {
        mobileNav.classList.remove('open');
    }

    // Event listeners for mobile navigation
    hamberger.addEventListener('click', openMobileNav);
    times.addEventListener('click', closeMobileNav);

    // Fetch data with error handling
    async function fetchData() {
        try {
            const data = await someFetchFunction(); // Replace with actual function
            console.log(data);
        } catch (error) {
            console.error('An error occurred while fetching data:', error);
        }
    }

    fetchData();

    // Education cards slide-in effect
    const educationCards = document.querySelectorAll('.education-card');

    // Function to check and apply slide-in effect
    function checkSlide() {
        const triggerBottom = window.innerHeight / 5 * 4;

        educationCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
    }

    // Initial check and on-scroll check with debounce
    checkSlide();

    function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function () {
            const context = this, args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    window.addEventListener('scroll', debounce(checkSlide));
});
