let slideBtnLeft = document.getElementById('slide-btn-left');
let slideBtnRight = document.getElementById('slide-btn-right');

let imgItem = document.querySelectorAll('.image-item');

let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100;


slideBtnLeft.addEventListener('click', () => {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    } else if (startSlider == 0) {
        startSlider = -endSlider;
    }

    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
})

slideBtnRight.addEventListener('click', () => {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    } else if (startSlider == -endSlider) {
        startSlider = 0;
    }

    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
})

const sidebarNavigationEl = document.getElementById('sidebar-container-navigation-id');
const sidebarOpenNavigationEl = document.getElementById('open-nav-sidebar');
const sidebarCLoseNavigationEl = document.getElementById('sidebar-btn');

sidebarOpenNavigationEl.addEventListener('click', () => {
    sidebarNavigationEl.classList.toggle('sidebar-show');
})

sidebarCLoseNavigationEl.addEventListener('click', () => {
    sidebarNavigationEl.classList.toggle('sidebar-show');
})

