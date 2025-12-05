function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const btnIcon = document.querySelector('.mobile-menu-btn i');
    
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        btnIcon.classList.remove('ri-close-line');
        btnIcon.classList.add('ri-menu-line');
    } else {
        menu.classList.add('active');
        btnIcon.classList.remove('ri-menu-line');
        btnIcon.classList.add('ri-close-line');
    }
}