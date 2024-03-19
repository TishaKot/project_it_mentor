//слайдер свайп

function initSlider() {
    new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        mousewheel: true,
        keyboard: true,
      });
}
initSlider();




const showMoreButton = document.getElementById('btn1');
const hideButton = document.getElementById('btn2');

showMoreButton.onclick = () => {
  const elements = document.querySelectorAll('.services-slide');
  elements.forEach((element, index) => {
    if (index >= 8) {
      element.style.display = 'block';
    }
  });
  document.getElementById("btn1").style.display = "none";
  document.getElementById("btn2").style.display = "block";
};

hideButton.onclick = () => {
  const elements = document.querySelectorAll('.services-slide');
  elements.forEach((element, index) => {
    if (index >= 8) {
      element.style.display = 'none';
    }
  });
  document.getElementById("btn1").style.display = "block";
  document.getElementById("btn2").style.display = "none";
};


// Функция для скрытия кнопки на мобильных устройствах

const showMoreButton = document.querySelector('.btn__open');
const hideButton = document.querySelector('.btn__hidden');


function hideButtonOnMobile() {
    if (window.innerWidth < 768) {
        showMoreButton.style.display = 'none';
        hideButton.style.display = 'none';
    } else {
        showMoreButton.style.display = 'block';
        hideButton.style.display = 'block';
    }
}

hideButtonOnMobile();
window.addEventListener('resize', hideButtonOnMobile);