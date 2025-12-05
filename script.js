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
// 기존 햄버거 메뉴 토글
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const btnIcon = document.querySelector('.mobile-menu-btn i');
    
    // 서브 메뉴가 열려있다면 닫기 (겹침 방지)
    const subMenu = document.getElementById('mobileSubMenu');
    if(subMenu && subMenu.classList.contains('active')) {
        toggleSubMenu();
    }

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

// [추가] 서브 메뉴(Foundation 드롭다운) 토글
function toggleSubMenu() {
    const list = document.getElementById('mobileSubMenu');
    const arrow = document.getElementById('subArrow');

    if (list.classList.contains('active')) {
        list.classList.remove('active');
        arrow.classList.remove('rotate');
    } else {
        list.classList.add('active');
        arrow.classList.add('rotate');
    }
}
