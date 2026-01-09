AOS.init({
    duration: 1000,
    once: true,
});

const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
let lastScrollTop = 0;

// 1. Open or close phone menu
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// 2. Close menu when an user click in the link (phone)
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            menu.classList.add('hidden');
        }
    });
});

// 3. Logic of scroll (Hidden or show nav)
window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // If dropdown menu is not open
    if (menu.classList.contains("hidden")) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = "translateY(-100%)";
        } else {
            navbar.style.transform = "translateY(0)";
        }
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);