async function loadComponent(targetId, filePath, activeKey) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to load ${filePath}`);
        const html = await response.text();
        targetElement.innerHTML = html;
        if (activeKey) {
            const links = targetElement.querySelectorAll(`a[data-menu="${activeKey}"], a[data-page="${activeKey}"]`);
            links.forEach(link => {
                link.classList.add('active');
                link.classList.add('current');
            });
        }
    } catch (error) { console.error(error); }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const btnIcon = document.querySelector('.mobile-menu-btn i');
    const subMenu = document.getElementById('mobileSubMenu');
    if(subMenu && subMenu.classList.contains('active')) { toggleSubMenu(); }
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
