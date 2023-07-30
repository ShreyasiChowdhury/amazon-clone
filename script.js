import { deal } from "./data.js"



let slideBtnLeft = document.getElementById('slide-btn-left');
let slideBtnRight = document.getElementById('slide-btn-right');

let imgItem = document.querySelectorAll('.image-item');

let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100;

slideBtnLeft.addEventListener('click', handleLeftBtn);

function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    } else if (startSlider == 0) {
        startSlider = -endSlider;
    }

    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener('click', handleRightBtn);

function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    } else if (startSlider == -endSlider) {
        startSlider = 0;
    }

    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

function renderSlideAuto() {
    handleRightBtn();
}

setInterval(renderSlideAuto, 5000);



const sidebarNavigationEl = document.getElementById('sidebar-container-navigation-id');
const sidebarOpenNavigationEl = document.getElementById('open-nav-sidebar');
const sidebarCLoseNavigationEl = document.getElementById('sidebar-btn');

sidebarOpenNavigationEl.addEventListener('click', () => {
    sidebarNavigationEl.classList.toggle('sidebar-show');
})

sidebarCLoseNavigationEl.addEventListener('click', () => {
    sidebarNavigationEl.classList.toggle('sidebar-show');
})



let dealProductListEl = document.querySelector('.deals-product-list');

let dealProductHTML = "";
let dealLength = deal.length;

for (let i = 0; i < dealLength; i++) {
    dealProductHTML += `
        <div class="deals-product-item">
            <img src=${deal[i].img}>
        </div>
    `
}

dealProductListEl.innerHTML = dealProductHTML;

let dealBtnPrev = document.getElementById('deal-btn-prev');
let dealBtnNext = document.getElementById('deal-btn-next');
let dealProductItem = document.querySelectorAll('.deals-product-item');

let dealStartProduct = 0;

dealBtnPrev.addEventListener('click', () => {
    if (dealStartProduct < 0) {
        dealStartProduct += 800;
    }
    if (dealStartProduct > -2500) {
        dealProductItem.forEach(el => {
            el.style.transform = `translateX(${dealStartProduct}%)`;
        })
    }
})

dealBtnNext.addEventListener('click', () => {
    if (dealStartProduct > -2400) {
        dealStartProduct -= 800;
    }
    dealProductItem.forEach(el => {
        el.style.transform = `translateX(${dealStartProduct}%)`;
    })
})

