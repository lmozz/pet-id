(() => {
    setTimeout(() => {
        document.getElementsByTagName('body')[0].removeAttribute('style');
    }, 1000);
    new Swiper('.slider', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
    });
    new Swiper(".target", {
        effect: "cards",
        grabCursor: true,
    });
    new Swiper(".parallax", {
        speed: 600,
        parallax: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    ScrollReveal({ reset: true });
    ScrollReveal().reveal('.scroll-animation', {
        delay: 0,
        distance: '200px',
        duration: 2000,
        origin: 'bottom',
        rotate: {
            x: 0,
            y: 60,
            z: 20,
        },
    });
    document.addEventListener('contextmenu', e => {
        e.preventDefault();
    });
    document.addEventListener('keydown', e => {
        if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
            (e.key === 'F12') ||
            (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
            return false;
        }
    });
    document.addEventListener('dragstart', e => {
        e.preventDefault();
    });
})();